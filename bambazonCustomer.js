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

//Ask what item user wants to purchase with id #
//Ask quantity they want of item
//Update table
	//If quantity is insufficient, alert and don't update table
	//Otherwise change the new quantity

var displayTable = function(){
	connection.query('SELECT * FROM products', function(err, res){
		if(err) throw(err);
		// console.log(res[0].item_id);
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
		console.log(answer.itemId);
		connection.query("SELECT stock_quantity FROM products WHERE ?", { item_id: answer.itemId }, function(err, res) {
			var oldStock = res[0].stock_quantity;
			// console.log(oldStock);
			connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: ( oldStock - answer.quantity) }, { item_id: answer.itemId }], function(err, res){
				console.log(
		          "Product: " +
		            res.product_name +
		            " || Department: " +
		            res.department_name +
		            " || Price: " +
		            res.price +
		            " || Quantity: " +
		            res.stock_quantity
		        );
			});
			displayTable();
			// console.log(res);
			connection.end();
		});
		
	})
}

// connection.query('INSERT INTO products SET ?')