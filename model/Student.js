const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema;

const student = new StudentSchema({

    name:{
        required:true,
        trim: true,
        type: String
    },

    age:{
        required:true,
        trim: true,
        type: Number
    },

    school:{
        required:true,
        trim: true,
        type: String
    },

    address:{
        required:true,
        trim: true,
        type: String
    }

}) 

module.exports = mongoose.model("student",student);