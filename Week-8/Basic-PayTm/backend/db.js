const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://gautamsingh12122003:RUrW6ihRmhU0k9TE@cluster0.h7cdvww.mongodb.net/payTm');

// User schema
const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 12
    },
    pasword : {
        type : String,
        required : true,
        minLength : true
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 20
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 20
    }
});

// Created a model for the schema
const User = mongoose.model('Users', UserSchema);

module.exports = {
    User
}