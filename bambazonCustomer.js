var inquirer = require('inquirer');
var mysql = require('mysql');

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
		
	})
}