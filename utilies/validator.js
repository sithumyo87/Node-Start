const jwt = require('jsonwebtoken');
const userDB = require('../models/user')

module.exports ={
    validateBody: (schema) =>{
        return (req,res,next) =>{
            const result = schema.validate(req.body);
            if(result.error){
                next(new Error(result.error.details[0].message))
                // console.log();
            }else{
                next();
            }
        }
    },
    validateParam:(schema,name) =>{
        return (req,res,next) => {
            let obj = {};
            obj[`${name}`] = req.params[`${name}`];
            console.log([`${name}`]);
            let result = schema.validate(obj);
            if(result.error){
                next(new Error(result.error.details[0].message));
            }else{  
                next();
            }
        }
    },
    validateToken:async(req,res,next)=>{
        if(req.headers.authorization){
            let token = req.headers.authorization;
            if(token){
                token = token.split(" ")[1];
                let decoded = jwt.decode(token,process.env.SECRET_TOKEN);
                let user = await userDB.findById(decoded._id);
                if(user){
                    req.body['user'] = user;
                    next();
                }else{
                    next(new Error("tokenization Error"));
                }
                // console.log(token);
            }else{
                next(new Error("tokenization Error"));
            }  
        }else{
            next(new Error("tokenization Error"));
        }  
    }
}