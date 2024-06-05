const mongoose = require("mongoose")
const { string } = require("zod")
require('dotenv').config();
const link =process.env.MONGODB_LINK

mongoose.connect(link)

const userSchema = mongoose.Schema({
    username : {
        type: String,
        minLength :3,
        maxLength : 30,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountsSchema = mongoose.Schema({
	userId: { type : String , ref: 'User', required : true},
	balance: { type : Number, required : true}
})

const User = mongoose.model('User',userSchema)
const Accounts = mongoose.model("Accounts",accountsSchema)

module.exports={
    User,
    Accounts
}