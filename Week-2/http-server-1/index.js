const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("Website was loaded...");
    res.send("Bum chiki bum bum..");
})

app.listen(port, () => {
    console.log('Example app listening on port ', port);
})