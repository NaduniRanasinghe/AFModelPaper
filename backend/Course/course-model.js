const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Course = new Schema({

    course_name:{
        type:String
    },

    course_code:{
        type:String
    },
    course_passmark:{
        type:Number
    },
    course_lic:{
        type:String
    },

    subjects:{
        type:mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Course',Course);
//Creating a schema(1) according to our model name Course (2)