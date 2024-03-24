import express from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();

console.log(BACKEND_URL);
app.get("/", (req, res) => {
    res.status(200).json({
        msg : "Healthy server !"
    });

});

app.listen(3003, () => {
    console.log("Server running on port 3003.");
})