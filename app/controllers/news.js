module.exports.listNews = function(app, req, res){
	
	//connection.query(sql, function(error, result));
	var connection = app.config.dbConnection();
	var newsDAO = new app.app.models.newsDAO(connection);

	newsDAO.getNews(function(error, result){
		res.render('news/formListNews', {news : result});
	});
}

module.exports.new = function(app, req, res){
	
	//connection.query(sql, function(error, result));
	var connection = app.config.dbConnection();
	var newsDAO = new app.app.models.newsDAO(connection);
	var id_new = req.query;

	newsDAO.getNew(id_new, function(error, result){
		res.render('news/formNew', {news : result});
	});
}