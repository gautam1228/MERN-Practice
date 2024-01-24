const express = require("express");
const { User } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middlewares");

const router = express.Router();

const signupBodySchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6),
    firstName : zod.string(),
    lastName : zod.string()
});

router.post("/signup", async (req, res) => {
    
    const { success } = signupBodySchema.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message : "Invalid Inputs."
        });
    }
    const userExists = await User.findOne({
        username : req.body.username
    });

    if(userExists){
        res.status(411).json({
            message : "Email already taken."
        });
    }
    else{
        const user = await User.create({
            username : req.body.username,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : req.body.password
        });
        
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET);
        
        res.status(200).json({
            message : "User created successfully !",
            token : token
        });
    }
});

const signinBodySchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6)
});

router.post("/signin", async (req, res) => {

    const { success } = signinBodySchema.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message : "Invalid Inputs."
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    });

    const token = jwt.sign({
        userId : user._id
    }, JWT_SECRET);

    if(user){
        res.status(200).json({
            token 
        });
    }
    else{
        res.status(411).json({
            message : "Error while logging in."
        })
    }
    
});

const updateBodySchema = zod.object({
    password : zod.string().min(6),
    firstName : zod.string(),
    lastName : zod.string()
})

router.put("/", authMiddleware, async (req, res) => {

    const { success } = updateBodySchema.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message : "Error while updating information."
        });
    }

    await User.updateOne(req.body, {
        _id : req.userId
    });

});

module.exports = {
    router
}