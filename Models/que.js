const mongoose = require('mongoose');

const queSchema = new mongoose.Schema({
    level:{
        type : String,
        required : true
    },
    que:{
        type : String,
        required : true
    },
    optionA : {
        type : String,
        required : true
    },
    optionB : {
        type : String,
        required : true
    },
    optionC : {
        type : String,
        required : true
    },
    optionD : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    }
})

const queModel = mongoose.model("Que",queSchema);

module.exports = queModel;