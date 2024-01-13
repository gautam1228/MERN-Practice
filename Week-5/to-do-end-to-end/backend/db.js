const mongoose = require("mongoose");

// in a professional project we would put this link in a .env file and won't commit it to github.
mongoose.connect("mongodb+srv://gautamsingh12122003:RUrW6ihRmhU0k9TE@cluster0.h7cdvww.mongodb.net/to-do-app");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}