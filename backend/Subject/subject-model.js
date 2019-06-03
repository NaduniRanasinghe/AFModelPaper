const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Subject = new Schema({
    subject_name :{
        type:String
    },
    subject_description:{
        type:String
    },

    subject_amount:{
        type:Number
    }
});

module.exports = mongoose.model('Subject',Subject);

