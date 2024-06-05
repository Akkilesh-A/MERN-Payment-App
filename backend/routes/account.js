const express = require("express");
const { Accounts } = require("../db");
const router = express.Router();
const authMiddleware = require("../middlewares/middleware")
const mongoose = require("mongoose")


router.get("/balance",authMiddleware,async (req,res)=>{
    console.log("inside balance function")
    const userId = req.userId
    const balance = await Accounts.findOne({
        userId : userId
    })
    res.status(200).json({
        balance: balance.balance
    })
})

router.post("/transfer",authMiddleware,async(req,res)=>{
    const to = req.body.to;
    const amount = req.body.amount;
    const account = await Accounts.findOne({ userId: req.userId })
    const toAccount = await Accounts.findOne({userId : to})
    console.log("Inside transfer of " + amount + "from " + account + " to " + to )

    await Accounts.updateOne({ userId : req.userId},{$inc : {balance : -amount}})
    await Accounts.updateOne({ userId : to},{$inc : {balance : amount}}) 
    
    res.status(200).json({
        message : "Transaction Successful"
    })
})



module.exports = router;