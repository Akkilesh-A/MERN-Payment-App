const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function authMiddleware(req,res,next){
    const authorization = req.headers.authorization.split(" ")[1]
    try{
        const isValid = jwt.verify(authorization,JWT_SECRET)
        req.userId = isValid.userId || isValid.userID
        next();
    }
    catch(err){
        return res.status(403).json({
            "message" : "User not found"
        })
    }
}

module.exports=authMiddleware
