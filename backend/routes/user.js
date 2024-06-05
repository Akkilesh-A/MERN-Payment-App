const express = require('express');
const router = express.Router();
const zod= require("zod")
const { User, Accounts } = require("../db")
const { JWT_SECRET }  = require("../config")
const jwt= require("jsonwebtoken")
const authMiddleware = require("../middlewares/middleware")

const signupBody = zod.object({
    username : zod.string().email().min(3),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string()
})

router.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const success = signupBody.safeParse(req.body)
    // console.log(`inside signup route with ${username} + ${password} + ${firstName} + ${lastName} `)
    if(!(success.success)){
        return res.status(411).json({
            "message" : "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        username: username
    })
    
    if(existingUser){
        return res.status(411).json({
            "message" : "Username already taken"
        })
    }

    const user = await User.create({
        username ,
        password,
        firstName,
        lastName
    })
   
    const userId = user._id

    const jwtToken = jwt.sign({
        userId : userId
    },JWT_SECRET)

    const finance = await Accounts.create({
        userId:userId,
        balance : (Math.random()*10000+1)
    })

    return res.status(200).json({
        "message" : "User created succesfully",
        token : jwtToken
    })

})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})


router.post('/signin',async (req,res)=>{
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const username=req.body.username;
    const password= req.body.password;

    const existingUser = await User.findOne({
        username,
        password
    })
    if(!existingUser){
        return res.status(411).json({
            "message" : "Username Not Found"
        })
    }

    const userId = existingUser._id

    const token = jwt.sign({
        userId : userId
    }, JWT_SECRET)

    return res.status(200).json({
        "token" : `${token}`
    })

})

const authBody = zod.object(
    {
        password : zod.string().optional(),
        firstName : zod.string().optional(),
        lastName : zod.string().optional()
    }
)

router.put("/update",authMiddleware, async(req,res)=>{
    const success = authBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message: "Inputs wrong"
        })
    }

    const newPassword = req.body.password ? req.body.password : null
    const newFirstName = req.body.firstName ? req.body.firstName : null
    const newLastName = req.body.lastName ? req.body.lastName : null

    const updation = await User.updateOne({_id : req.userId},{
        password : newPassword,
        firstName : newFirstName,
        lastName : newLastName
    })
    console.log(req.body)

    if(!updation){
        res.status(411).json(
            {
                message: "Error while updating information"
            }
        )
    }
    return res.status(200).json({
        message: "User details Updation Successful"
    })

})

router.get("/bulk",async (req,res)=>{
    const filter = req.query.filter || "";

    const usersFound = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.status(200).json({
        user : usersFound.map(user =>({
            username : user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;