module.exports = function(app){

	app.get('/admin/createnew', function(req, res){
		app.app.controllers.admin.createNew(app, req, res);
	});

	app.post('/admin/createnew_submit', function(req, res){
		app.app.controllers.admin.createNew_Submit(app, req, res);

	});
}