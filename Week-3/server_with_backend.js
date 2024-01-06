const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb+srv://gautamsingh12122003:RUrW6ihRmhU0k9TE@cluster0.h7cdvww.mongodb.net/user_app");

const User = mongoose.model(
    'users',
    {
        name : String,
        username : String,
        password : String
    }
);

// const sample_user = new User({
//     name : 'Gautam Singh',
//     email : 'gautam123@gmail.com',
//     password : '123456'
// });

app.post("/signin", async (req, res) => {
    
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existing_User = await User.findOne({username : username});

    if(existing_User){
        return res.status(400).send("Username already exists.");
    }

    const new_user = new User({
        name : name,
        username : username,
        password : password
    });

    new_user.save();

    res.json({
        msg : "User created successfully !"
    })

});

app.listen(port, () => {
    console.log('Server running on port : ' + port);
})
