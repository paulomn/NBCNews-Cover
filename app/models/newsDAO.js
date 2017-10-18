function NewsDAO(connection){
	this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback){
	this._connection.query('select * from news order by newdate DESC', callback);
}

NewsDAO.prototype.getNew = function(id_new, callback){
	this._connection.query('select * from news where id_new = ' + id_new.id_new, callback);
}

NewsDAO.prototype.saveNew = function(news, callback){
	this._connection.query('insert into news set ?', news, callback);
}

NewsDAO.prototype.getLastNews = function(callback){
	this._connection.query('select * from news order by id_new desc limit 5', callback);
}

module.exports = function(){

	return NewsDAO;
}