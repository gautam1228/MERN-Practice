const express = require("express");

const zod = require("zod");

const app = express();

function middleware1(req, res, next){

    // some logic   
    next();

}

function middleware2(){

    // some logic
    next(); // => need to call this so that the next middleware / callback function gets called.

}


app.use(express.json());


app.get("/", middleware1, middleware2, function(req, res){

    res.json({
        msg : "Hi there !"
    });

})


app.post("/health-checkup", function(req, res){
    
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys.")

})


// global catches
app.use(function(err, req, res, next){

    res.json({
        msg : "Oops, something doesn't seem to be right !"
    });

});



app.listen(3000);