var inquirer = require('inquirer');
var mysql = require('mysql');
var consoletable = require('console.table')

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: '',
	database: 'bambazon'
});

connection.connect(function(error){
	if(error) throw error;
	console.log('Connected as id: '+connection.threadId);
})

//Ask what item user wants to purchase with id #
//Ask quantity they want of item
//Update table
	//If quantity is insufficient, alert and don't update table
	//Otherwise change the new quantity

var displayTable = function(){
	connection.query('SELECT * FROM products', function(err, res){
		if(err) throw(err);
	});
	console.table([
		])
	start();
};

var start = function(){
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
		}
	]).then(function(response){
		var query = connection.query('SELECT item_id FROM products', function(err, res){
			if(err) throw err;
			console.log(res);
		});

		if(response.itemId===query.item_id){
			console.log(query);
		}
		else{
			console.log('That id doesn\'t exit!');
		}
	})
}


// connection.query('INSERT INTO products SET ?')