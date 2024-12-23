const express = require("express");

const PORT = 3000;
const app = express();


app.use(express.json());

const users = [];

const generateToken = () => {
    const options = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    let token = "";
    for(let i = 0; i < 32; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;

};

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

    const foundUser = users.find((u) => {
        if(u.username == username && u.password == password){
            return true;
        }
        else{
            return false;
        }
    });

    if(foundUser){
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token
        });
        console.log(users);
    } else{
        res.status(403).send({
            message : "Inavlid username or password"
        });
    }

});

app.get("/me", (req, res) => {

    const token = req.headers.authorization;
    const foundUser = users.find(user => user.token === token);

    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password 
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