const express = require("express");
const zod = require("zod");
const mongoose = require("mongoose");
const { authMiddleware } = require("../middlewares");
const { Account } = require("../db");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    
    const { balance } = await Account.findOne({
        userId : req.userId
    });

    return res.status(200).json({
        balance
    });

});

const transferBodySchema = zod.object({
    to : zod.string(),
    amount : zod.number()
})

router.post("/transfer", authMiddleware, async (req, res) => {
    
    const { success } = transferBodySchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Invalid Inputs."
        });
    }

    const session = await mongoose.startSession();

    session.startTransaction();

    const { to, amount } = req.body;

    const account = await Account.findOne({
        userId : req.userId
    }).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insufficient balance."
        });
    }

    const toAccount = await Account.findOne({
        userId : to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Invalid Account."
        });
    }

    await Account.updateOne({userId : req.userId}, {"$inc" : { balance : -amount }}).session(session);
    await Account.updateOne({userId : to}, {"$inc" : { balance : amount }}).session(session);

    await session.commitTransaction();
    return res.status(200).json({
        message : "Transaction successful !"
    });
});

module.exports = router;