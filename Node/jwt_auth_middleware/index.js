const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const PORT = 3000;
const JWT_SECRET = "secret123";
const app = express();

const users = []; // In memory global DB. 

const auth = (req, res, next) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    const foundUser = users.find(user => user.username === decodedInfo.username);

    if(foundUser){
        req.body.username = decodedInfo.username;
        next();
    } else {
        res.status(401).send({
            message : "Unauthorized !"
        });
        return;
    }

};

app.use(express.json());
app.use(cors());

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

        res.header("jwt", token);

        res.json({
            token
        });

    } else{
        res.status(403).send({
            message : "Inavlid username or password"
        });
    }

});

app.get("/me", auth, (req, res) => {

    const foundUser = users.find(user => user.username === req.body.username);

    res.json({
        username : foundUser.username,
        password : foundUser.password
    });

});

app.listen(PORT, () => {
    console.log(`Server runnning on port : ${PORT}`);
});