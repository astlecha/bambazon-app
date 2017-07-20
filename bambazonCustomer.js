var inquirer = require('inquirer');
var mysql = require('mysql');
require('console.table');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: '',
	database: 'bambazon'
});

connection.connect(function(error){
	if(error) throw error;
	// console.log('Connected as id: '+connection.threadId);
	displayTable();
})

var displayTable = function(){
	connection.query('SELECT * FROM products', function(err, res){
		if(err) throw(err);

		var resArr = [];
		for(var i=0;i<res.length; i++){
			resArr.push(res[i]);
		}
		//Place results into the console table
		console.table(resArr);
		start();
	})
};

var start = function(){
	inquirer.prompt([
		{	
			type: 'confirm',
			name: 'start',
			message: 'Would you like to purchase an item?'
		}
	]).then(function(answer){
		if(answer.start===true){
			purchase();
		} else{
			console.log('Thank you, have a nice day!');
			connection.end();
		}
	})
}

var purchase = function(){
	inquirer.prompt([
		{	
			type: 'input',
			name: 'itemId',
			message: 'What is the ID of the item you would like to purchase?',
			validate: function(value){
				if(isNaN(value)===false){
					return true;
				} 
				return false;
			}
		}, {
			type: 'input',
			name: 'quantity',
			message: 'How many units of this item would you like to purchase?',
			validate: function(value){
				if(isNaN(value)===false){
					return true;
				}
				return false;
			}
		}
	]).then(function(answer){
		connection.query("SELECT stock_quantity, price FROM products WHERE ?", { item_id: answer.itemId }, function(err, res) {
			var oldStock = res[0].stock_quantity;
			var price = res[0].price;

			if((oldStock > 0)&&(answer.quantity<=oldStock)){
				console.log('Your total comes to $'+(answer.quantity * price));
				updateStock(answer, oldStock);
				displayTable();
			}
			else{
				console.log('Sorry, but there is not enough inventory to complete your request.');
				start();
			}

		});
		
	})
}

function updateStock(answer, oldStock) {
	connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: ( oldStock - answer.quantity) }, { item_id: answer.itemId }], function(err, res){
		});
}


// connection.query('INSERT INTO products SET ?')