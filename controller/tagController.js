const DB = require('../models/tag.js');
const Helper = require('../utilies/helper');

const all = async(req,res,next) => {
    let alltag = await DB.find();
    Helper.fMsg(res,"ALl tag Here",alltag);
} 


const post = async(req,res,next)=> {
    let result = await new DB(req.body).save();
    Helper.fMsg(res,"Added Tag",result);
}
const Onetag = async(req,res,next) =>{
    console.log("Hello GEt");
    let tagId = await DB.findById(req.params.id);
    if(tagId){
        Helper.fMsg(res,"Get ONe Tag",tagId);
    }else{
        next(new Error("Cannot search Tag By Id"))
    }
}
const EditTag = async(req,res,next) => {
    console.log("Hello Edir");
    let tagId = await DB.findById(req.params.id);
    if(tagId){
        let updtag = await DB.findByIdAndUpdate(tagId._id,req.body);
        let result = await DB.findById(updtag);
        Helper.fMsg(res,"Successfully Updated",result);
    }else{
        next(new Error("Cannot Find To updated"))
    }
}
const DeleteTag = async(req,res,next) => {
    console.log("Hello Delete");
    let tagId = await DB.findById(req.params.id);
    console.log("Hello Delete");
    if(tagId){
        let updtag = await DB.findByIdAndDelete(tagId);
        let result = await DB.findById(updtag);
        Helper.fMsg(res,"Successfully Updated",result);
    }else{
        next(new Error("Cannot Find To Delete"))
    }
}
module.exports = {
    all,
    post,
    Onetag,
    EditTag,
    DeleteTag
}