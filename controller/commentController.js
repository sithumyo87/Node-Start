const DB = require('../models/comment');
const Helper = require('../utilies/helper');

const getAll = async(req,res,next) =>{
    let result = await DB.find();
    Helper.fMsg(res,"ALl comment here",result);
}

const postComment = async(req,res,next) => {
    let comment = await new DB(req.body).save();
    Helper.fMsg(res,"Post Success",comment);
}
const dropComment =async(req,res,next) => {
    let CommentId = await DB.findById(req.params.id);
    if(CommentId){
        let result = await DB.findByIdAndDelete(CommentId);
        Helper.fMsg(res,"Successfully Deleted",result)
    }else{
        next(new Error("Failed in delete"))
    }
}

module.exports ={
    getAll,
    postComment,
    dropComment
}