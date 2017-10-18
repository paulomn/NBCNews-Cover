//Express and ejs
var app = require('./config/server');

//Routers
//var routeHome = require('./app/routes/home')(app);
//var routeNews = require('./app/routes/news')(app);
//var routeCreateNew = require('./app/routes/createnew')(app);

//Listen port 3000
app.listen(3000, function(){
	console.log('Express server running...');
});