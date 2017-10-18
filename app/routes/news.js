//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	app.get('/news/listNews', function(req, res){
		app.app.controllers.news.listNews(app, req, res);
	});

	app.get('/news/new', function(req, res){
		app.app.controllers.news.new(app, req, res);
	});
	
}