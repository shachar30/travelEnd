var mongoose= require('mongoose');
var schema=mongoose.Schema;

var actionSchemaT=new schema({

	name:{type:String, index:1,required:true,unique:true},
	lastname:{type:String}
	
},
	{collection:'friends'}
);

exports.actionSchemaT=actionSchemaT;