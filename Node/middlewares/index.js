const express = require("express");
const cors = require("cors");

const PORT = 3000;

const app = express();


const logger = (req, res, next) => {
    console.log(`-------------- New Request --------------`);
    console.log(`Method : ${req.method}`);
    console.log(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(`Route : ${req.url}`);
    console.log(new Date());
    console.log(`-------------- END --------------`);
    next();
};

// ------------------- Middlewares -------------------
app.use(logger);
app.use(express.json()); // Used to parse the body if the request has any. (POST or PUT methods mostly)
app.use(cors({
    domains : ["http://localhost:3000"]
}));

app.post("/sum", (req, res) => {

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        result : `${a + b}`
    });

});

app.listen(3000, () => {
    console.log(`Server listening on port : ${PORT}`);
})