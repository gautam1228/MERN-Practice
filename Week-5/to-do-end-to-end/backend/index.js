const express = require("express")
const app = express();
const { createToDoSchema, updateToDoSchema } = require("./type");

app.use(express.json());

// routes

app.post("/todo", (req, res) => {

    const createPayload = req.body;
    const parsedCreatePayLoad = createToDoSchema.safeParse(createPayload);

    if(!parsedCreatePayLoad.success){
        res.status(411).json({
            msg : "Incorrect input format !"
        });
        return;
    }
    // put in mongodb

});

app.get("/todos", (req, res) => {

});

app.put("/completed", (req, res) => {

    const updatePayload = req.body;
    const parsedUpdatePayload = updateToDoSchema.safeParse(updatePayload);

    if(!parsedUpdatePayload.success){
        res.status(411).json({
            msg : "Incorrect input format !"
        });
        return;
    }
    // update in mongodb
    
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
})