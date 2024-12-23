const express = require("express");

const PORT = 3000;

const app = express();

// Can also do 
// app.get("/multiply/:a/:b", (req, res) => {
//     const a = req.params.a;
//     const b = req.params.b;
//     const result = a*b;
//     res.json({
//         result : `${result}`
//     });

// });

app.get("/multiply", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = a*b;
    res.json({
        result : `${result}`
    });

});




app.get("/add", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = Number(a) + Number(b);

    res.json({
        result : `${result}`
    });
});

app.get("/divide", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = a/b;
    
    res.json({
        result : `${result}`
    });
    
});

app.get("/subtract", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = a-b;
    
    res.json({
        result : `${result}`
    });

});

app.listen(3000, () => {
    console.log(`Server listening on port : ${PORT}`);
})