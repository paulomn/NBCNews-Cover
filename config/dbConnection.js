var mysql = require('mysql');

var conMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'P@ul0RM8sql',
		database : 'news_portal'
	});	
}

module.exports = function() {
	return conMySQL;
}