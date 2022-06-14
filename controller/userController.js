const DB = require('../models/user')
const Helper = require("../utilies/helper");

const login = async(req,res,next)=>{
    let phoneUser = await DB.findOne({phone:req.body.phone}).select('-__v');
    if(phoneUser){
        if(Helper.compare(req.body.password,phoneUser.password)){
            let user = phoneUser.toObject();
            delete user.password;
            user.token = Helper.makeToken(user);
            Helper.fMsg(res,"Login",user);
        }
    }else{
        next(new Error("wrong Creditinal"));
    }
    
}
const register = async(req,res,next)=>{
    let nameUse = await DB.findOne({name:req.body.name});
    if(nameUse){
        next(new Error('Already Exist Name'));
        return;
    }
    
    let emailUse = await DB.findOne({email:req.body.email});
    if(emailUse){
        next(new Error("already Use EMail"));
        return;
    }

    let phoneUse = await DB.findOne({phone:req.body.phone});
    if(phoneUse){
        next(new Error("Already Use phone Number"));
        return;
    }
    req.body.password = Helper.encode(req.body.password);
    let result = await new DB(req.body).save();
    Helper.fMsg(res,"register",result);
}

module.exports ={
    login,register
}

// const all = async(req,res,next) =>{
//     let users = await DB.find();
//     Helper.fMsg(res,"All Message Here",users);
//     // res.status(200).json({
//     //     con:true,
//     //     msg:"Get All user",
//     //     result:[],
    
//     // });
// }

// const oneUser = async(req,res,next)=>{
//     let id = req.params.id;
//     let result = await DB.findById(id);
//     Helper.fMsg(res,"Success Get One user",result);
//     // res.json({msg:`One user of ${req.params.id}`});
// }

// const addUser = async(req,res,next) =>{
//     let saveUser = new DB(req.body);
//     let result = await saveUser.save();
//     Helper.fMsg(res,"Success Post",result)
//     // res.json({msg:'Add User Done',result:req.body})
// }

// const editUser = async(req,res,next) =>{
//    let user=  await DB.findById(req.params.id);
//    if(user){
//     await DB.findByIdAndUpdate(user._id,req.body);
//     let retUser = await DB.findById(user._id);
//     Helper.fMsg(res,"Successfully Updated",retUser)
//    }else{
//     next(new Error("Error is happening")) ;
//    }
//     // res.json({msg:`Edit User Id ${req.params.id}`,result:req.body})
// }

// const deleteUser = async(req,res,next)=>{
//     let user = await DB.findByIdAndDelete(req.params.id);
//     Helper.fMsg(res,"successfully Deleted",user);
//     // res.json({msg:`Delete User Id ${req.params.id}`})
// }

// module.exports = {
//     all,
//     oneUser,
//     addUser,
//     editUser,
//     deleteUser
// }