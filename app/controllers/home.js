module.exports.index = function(app, req, res){

	var connection = app.config.dbConnection();
	var newsDAO = new app.app.models.newsDAO(connection);

	newsDAO.getLastNews(function(error, result){
		res.render('home/index', {news: result});
	});

}