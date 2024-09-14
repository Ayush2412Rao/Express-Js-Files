const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength:3
    },
     email :{
        type : String,
        required : true,
        unique : [true,"E-mail id already present"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Email is not valid");
            }
        }
     },
     phone : {
        type : Number,
        minlength:10,
        maxlength:10,
        required : true,
        unique : [true, "Phone Number already exist"]
     },
     address : {
        type : String,
        required : true
     }
});

const Student = new mongoose.model("Student",studentSchema); 

module.exports = Student;