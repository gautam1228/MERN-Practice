import express from "express";

const app = express();

app.get("/", (req, res) => {

    res.status(200).json({
        msg : "Healthy server !"
    });

});

app.listen(3003, () => {
    console.log("Server running on port 3003.");
})