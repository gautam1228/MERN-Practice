import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import jwt, { JwtPayload } from 'jsonwebtoken';


const JWT_SECRET = 'mysecret';
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));


app.post("/signin", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    // do db validations etc
    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);

    res.cookie("token", token);
    res.send("Logged in !");

});


app.get("/user", (req, res) => {

    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // Get email of the user from the db.
    res.send({
        userId: decoded.id
    });

});


app.post("/logout", (req, res) => {

    res.clearCookie("token");
    
    // or 
    // res.cookie("token", "");
    
    res.json({
        msg : "Logged Out !"
    })

});

app.get("/", (req, res) => {

    res.json({
        
    });

});


app.listen(3000, () => {
   
    console.log("Server running on port 3000.");

});