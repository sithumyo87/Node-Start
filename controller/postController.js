const DB = require('../models/post');
const Helper = require('../utilies/helper');
const CommentDB = require('../models/comment');

const all = async(req,res,next)=>{
        let posts = await DB.find().populate('user cats');
        Helper.fMsg(res,"All Posts Here",posts);
        // res.json({msg:'All Data Posts'});
    };
    
    const onePost = async(req,res,next)=>{
        let onePost = await DB.findById(req.params.id).populate('user','-_id -__v');
        let comments = await CommentDB.find({post:onePost._id});
        postObj = onePost.toObject();
        postObj['comments'] = comments;
        Helper.fMsg(res,"One Post",postObj);
        // res.json({msg:'One Post'});
    }
    
    const post = async(req,res,next)=>{
        let userId = req.body.user._id;
        delete req.body.user;
        req.body.user = userId;
        let result =await new DB(req.body).save();
        console.log("request body is",req.body.user);
        Helper.fMsg(res,"Post Uploaded",result);
    }
    
    const patch = async(req,res,next)=>{
        let post = await DB.findById(req.params.id);
        if(post){
            await DB.findByIdAndUpdate(post._id,req.body);
            let result = await DB.findById(post._id);
            Helper.fMsg(res,"Successfully Updated",result);
        }else{
            next(new Error("Failed in Updated"));
        }
    }
    
    const drop = async(req,res,next)=>{
        let post = await DB.findById(req.params.id);
        if(post){
            await DB.findByIdAndDelete(post._id);
            Helper.fMsg(res,"Successfully Deleted");
        }else{
            next(new Error("Failed in Deleted"));
        }
    }   
    
    const catById = async(req,res,next)=>{
        let catId = await DB.find({cats:req.params.id});
        if(catId){
            Helper.fMsg(res,"Category By Searching",catId);
        }else{
            next(new Error("Failed By Catching Category"))
        }
    }

    const userById= async(req,res,next) =>{
        let userId = await DB.find({user:req.params.id});
        Helper.fMsg(res,"Get Post By User Id",userId);
    }

    const postByTag= async(req,res,next) =>{
        let tagId = await DB.find({postid:req.params.id});
        Helper.fMsg(res,"Get Post By User Id",tagId);
    }
    const pageByPost = async(req,res,next) =>{
        let page = req.params.page;
        console.log(page);
        let countpage = page == 1 ? 0 : page-1;
        let limit = Number(process.env.POST_LIMIT);
        let skipCount = limit * countpage;
        console.log(skipCount);
        let pageResult = await DB.find().skip(skipCount).limit(countpage);
        Helper.fMsg(res,"Pagination By Post",pageResult);

    }

    const toggle = async(req,res,next)=>{
        let post = await DB.findById(req.params.id);
        if(post){
            if(req.params.page == 1){
                post.likes = post.likes + 1;
                console.log("Add");
            }else{
                post.likes = post.likes - 1;
                console.log("Min");
            }
            await DB.findByIdAndUpdate(post._id,post);
            let result = await DB.findById(req.params.id).populate('user cats','-__v -password -_id -created');
            Helper.fMsg(res,"Toggle Post",result);
        }else{
            next(new Error("Error Occuing in toggle"))
        }
    }

module.exports = {
    all,
    onePost,
    post,
    patch,
    drop,
    catById,
    userById,
    pageByPost,
    postByTag,
    toggle
}
