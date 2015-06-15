var express= require('express');

var app=express();
var todoAction=require('./todoActionsConttrollerCal1');

app.use('/',express.static('./public'));

app.get('/ws_todo/getActionData',function(req,res){
	console.log("out docs:"+todoAction.getData());
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
	app.set("json spaces",4);
	res.set("Content-Type","application/json");
	res.status(200);
	res.json(todoAction.getData());

});
app.listen(3000);
console.log("service is listeing on port 3000");