const mongoose = require("mongoose");
const { number } = require("zod");

mongoose.connect('mongodb+srv://gautamsingh12122003:RUrW6ihRmhU0k9TE@cluster0.h7cdvww.mongodb.net/paytm');

// User schema
const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
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
        maxLength : 50
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    }
});

const AccountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
});

// Created a model for the schema
const User = mongoose.model('Users', UserSchema);
const Account = mongoose.model('Accounts', AccountSchema);

module.exports = {
    User,
    Account
}