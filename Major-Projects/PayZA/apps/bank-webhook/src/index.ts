import express from "express";
import db from "@repo/db/client";

const app = express();

app.post("/dummyBankWebHook", async (req, res) => {

    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount : req.body.amount
    };


    try{
        await db.$transaction([
    
            db.balance.update({
                where : {
                    userId: Number(paymentInformation.userId)
                },
                data : {
                    amount : {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.update({
                where : {
                    token: paymentInformation.token
                },
                data : {
                    status : "Success"
                }
            })
    
        ]);
    }
    catch(e){
        console.error(e);
        res.status(411).json({
            message : "Error while processing webhook."
        });

        await db.onRampTransaction.update({
            where : {
                token: paymentInformation.token
            },
            data : {
                status : "Failure"
            }
        });

    }


    res.status(200).json({
        message : "Captured !"
    });


});

app.listen(3003);