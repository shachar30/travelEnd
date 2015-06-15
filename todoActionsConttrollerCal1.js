var mongoose=require('mongoose');
var db= mongoose.connect('mongodb://shachar:301290@ds041432.mongolab.com:41432/todo');

var actionSchema=require('./action_schema').actionSchema;
mongoose.model('actionM',actionSchema);
var todoAction;


mongoose.connection.once('open', function(){
	var Actions=this.model('actionM');

	var query=Actions.find();
	query.where('section').ne('PRIVATE');
	query.exec(function(err,docs){
		todoAction=docs;
		console.log("docs:"+todoAction);
		mongoose.disconnect();
		return todoAction;
	});
});
exports.getData=function(){
	return todoAction;
};