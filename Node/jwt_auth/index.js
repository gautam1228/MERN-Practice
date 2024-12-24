const express = require("express");
const jwt = require("jsonwebtoken");

const PORT = 3000;
const JWT_SECRET = "hello123";
const app = express();


app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username : username,
        password : password
    });
    
    res.json({
        msg : "You are signed up !"
    });
    
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if(foundUser){
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);

        res.json({
            token
        });

    } else{
        res.status(403).send({
            message : "Inavlid username or password"
        });
    }

});

app.get("/me", (req, res) => {

    const token = req.headers.authorization;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    const foundUser = users.find(user => user.username === decodedInfo.username);

    if(foundUser){
        res.json({
            username : decodedInfo.username
        });
    } else {
        res.status(401).send({
            message : "Unauthorized !"
        });
    }

});

app.listen(PORT, () => {
    console.log(`Server runnning on port : ${PORT}`);
});