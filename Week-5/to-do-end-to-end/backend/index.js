const express = require("express")
const app = express();
const { createToDoSchema, updateToDoSchema } = require("./type");
const { todo } = require("./db");

app.use(express.json());

// routes

app.post("/todo", async (req, res) => {

    const createPayload = req.body;
    const parsedCreatePayLoad = createToDoSchema.safeParse(createPayload);

    if(!parsedCreatePayLoad.success){
        res.status(411).json({
            msg : "Incorrect input format !"
        });
        return;
    }
    // put in mongodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });

    res.json({
        msg : "Todo created Successfully !"
    })

});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put("/completed", async (req, res) => {

    const updatePayload = req.body;
    const parsedUpdatePayload = updateToDoSchema.safeParse(updatePayload);

    if(!parsedUpdatePayload.success){
        res.status(411).json({
            msg : "Incorrect input format !"
        });
        return;
    }
    // update in mongodb
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    });

    res.json({
        msg : "Todo marked as completed."
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
})