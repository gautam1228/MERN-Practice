const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtPassword = "123456";

app.use(express.json());

const ALL_USERS = [

    {
        username : "gautam@gmail.com",
        password : "gautam123",
        name : "Gautam Singh"
    },{
        username : "sania@gmail.com",
        password : "sania123",
        name : "Sania Parashar"
    },{
        username : "mehul@gmail.com",
        password : "mehul123",
        name : "Mehul Pahuja"
    }

];

function userExists(username, password){

    let foundUser = ALL_USERS.find(elem => elem.username == username && elem.password == password);

    if(foundUser == undefined){
        return false;
    }
    return true;

}


app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg : "User not found !"
        });
    }

    var token = jwt.sign({username : username}, jwtPassword);
    return res.json({
        token
    })

});

app.get("/users", (req, res) => {

    const token = req.headers.authorization;

    try{

        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        
        const userList = ALL_USERS.filter(elem => elem.username != username);

        return res.json({
            users : userList
        });

    }
    catch(err){
        return res.status(403).json({
            msg : "Invalid token."
        });
    }

});

app.listen(3000);