var mongoose=require('mongoose');
var db= mongoose.connect('mongodb://shachar:301290@ds041432.mongolab.com:41432/todo',['section','friends']);

var actionSchema=require('./action_schema').actionSchema;
var actionSchemaT=require('./action_schemaT').actionSchemaT;
mongoose.model('actionM',actionSchema);
mongoose.model('actionT',actionSchemaT);
var todoAction;
var tdoActionT;
var westEsat;



mongoose.connection.once('open', function(){
	var Actions=this.model('actionM');
	var ActionsT=this.model('actionT');
	

	var query=Actions.find().where('section').ne('PRIVATE');
	//var queryT=ActionsT.find().where('friends').ne('PRIVATE');
	var queryT=ActionsT.find();
	queryT.where('name');
	
	query.exec(function(err,docs){
		todoAction=docs;
		console.log("docs:"+todoAction);
		
		return todoAction;
	});

	
	queryT.exec(function(err,docs){
		tdoActionT=docs;
		console.log("docs:"+tdoActionT);
		
		return tdoActionT;
	});
});

exports.getData=function(){
	return todoAction;
};
exports.getDataT=function(){
	return tdoActionT;
};
