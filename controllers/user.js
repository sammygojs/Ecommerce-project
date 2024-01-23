const User = require('../models/user')

exports.userById = (req, res, next, id)=>{
    console.log("userbyId called")
    User.findById(id)
    .then((user,err)=>{
        if(!user||err){
            return user.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user;
        next();
    })
    
}