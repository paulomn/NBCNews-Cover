module.exports.createNew = function(app, req, res){
	
	res.render('admin/formCreateNew', {validationForm: {}, news: {}});
}

module.exports.createNew_Submit = function(app, req, res){
	
	var news = req.body;

	req.assert('subject', 'Subject field is required').notEmpty();
	req.assert('summary', 'Summary field is required').notEmpty();
	req.assert('summary', 'Summary must contain between 10 and 100').len(10, 100);
	req.assert('authorName', 'Author field is required').notEmpty();
	req.assert('newDate', 'Date field is required').notEmpty();
	req.assert('description', 'Description field is required').notEmpty();
	
	var errors = req.validationErrors();

	if (errors){
		res.render('admin/formCreateNew', {validationForm: errors, news: news});
		return;
	}

	//connection.query(sql, function(error, result));
	var connection = app.config.dbConnection();
	var newsDAO = new app.app.models.newsDAO(connection);

	newsDAO.saveNew(news, function(error, result){
		res.redirect('/news/listNews');
	});

}