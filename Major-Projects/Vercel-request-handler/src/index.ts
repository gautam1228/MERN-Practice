import express from "express";
import dotenv from "dotenv";

// Uploading the local environment vairables.
dotenv.config();

const app = express();

app.get("/*", (req, res) => {

    const host = req.hostname;
    console.log(host);
    const id = host.split(".")[0];
    console.log(id);

});

app.listen(process.env.REQUEST_HANDLER_PORT);