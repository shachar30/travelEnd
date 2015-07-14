var express= require('express');

var app=express();

var todoAction=require('./todoActionsConttrollerCal1');
var port = process.env.PORT || 3000;

app.use('/',express.static('./public'));

app.get('/ws_todo/getActionData',function(req,res,next){
	console.log("out docs:");
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
	app.set("json spaces",4);
	res.set("Content-Type","application/json");
	res.status(200);
	res.json(todoAction.getData());
	next();

});
app.all('/frinds/a', function (req, res, next) {
  console.log("out docs:"+todoAction.getDataT());
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
	app.set("json spaces",4);
	res.set("Content-Type","application/json");
	res.status(200);
	res.json(todoAction.getDataT());
	next();

});




app.listen(port);
console.log("service is listeing on port "+port);
