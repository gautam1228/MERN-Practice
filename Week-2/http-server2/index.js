const express = require("express");

const app = express();

const port = 3000;

app.listen(port);

app.use(express.json());


var users = [{
    name : "John",
    kidneys : [
        {
            healthy : false
        },{
            healthy : true
        },{
            healthy : true
        }
    ]
}];


app.get("/", function(req, res){

    const userKidneys = users[0].kidneys;
    const numberOfKidneys = userKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i = 0; i < numberOfKidneys; i++){
        if(userKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealhtyKindeys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealhtyKindeys
    })

})


app.post("/", function(req, res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Done!"
    })

})


app.put("/", function(req, res){

    const currentUserKidneys = users[0].kidneys;

    for(let i = 0; i < currentUserKidneys.length; i++){

        currentUserKidneys[i].healthy = true;

    }

    res.json({
        msg : "User Healthy Now !"
    });

})


app.delete("/", function(req, res){

    const newKidneys = [];

    for(let i = 0; i < users[0].kidneys.length; i++){

        if(users[0].kidneys[i].healthy){

            newKidneys.push({
                healthy : true
            })

        }

    }

    users[0].kidneys = newKidneys;

    res.json({
        msg : " Unhealthy Kidneys replaced ! "
    })

})

