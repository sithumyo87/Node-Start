const DB = require('../models/cat.js');
const Helper =require('../utilies/helper');

const all = async (req,res,next) =>{
    const allData = await DB.find();
    Helper.fMsg(res,"Succesfully Get All Data",allData)
}

const add =async(req,res,next)=>{
    const catDb = await DB.findOne({name:req.body.name});
    if(catDb){
        next(new Error("Already exist"));
        console.log("Hi HI");
        return;
        
    }
    const result = await new DB(req.body).save();
    Helper.fMsg(res,"Successfully Uploaded",result)
}

const getOne = async(req,res,next) =>{
    let catOne = await DB.findById(req.params.id);
    console.log("Hello");
    Helper.fMsg(res,"Get One Category Data",catOne)
}

const patch = async(req,res,next) =>{
    let getOne = await DB.findById(req.params.id);
    // console.log(getOne.name)
    if(getOne){
        await DB.findByIdAndUpdate(getOne._id,req.body)
        let retCat = await DB.findById(req.params.id);
        Helper.fMsg(res,"Successfully Updated",retCat)
    }else{
        next(new Error("Failed Updated"));
    }
}

const drop = async(req,res,next) => {
    let getData = await DB.findById(req.params.id);
    if(getData){
        await DB.findByIdAndDelete(req.params.id);
        Helper.fMsg(res,"Successfully Deleted");
    }else{
        next(new Error("Failed Deleted"))
    }
}
module.exports = {
    all,add,getOne,patch,drop
}