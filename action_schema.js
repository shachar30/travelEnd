var mongoose= require('mongoose');
var schema=mongoose.Schema;

var actionSchema=new schema({

	nameS:{type:String, index:1,required:true,unique:true},
	lengthS:{type:Number },
	Way:{type:String},
	Water:{type:String},
	HelpWay:{type:String},
	southwest:{type:Number},
	northeast:{type:Number}
	
},
	{collection:'section'}
);

exports.actionSchema=actionSchema;