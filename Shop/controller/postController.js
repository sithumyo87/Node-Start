const DB = require('../db/post');
const Helper = require('../utilies/helper');

const all = async(req,res,next)=>{
    let posts = await DB.find().populate('user');
    Helper.fMsg(res,"All Posts Here",posts);
    // res.json({msg:'All Data Posts'});
};

const onePost = async(req,res,next)=>{
    let onePost = await DB.findById(req.params.id).populate('user','-_id -__v');
    if(onePost){
        Helper.fMsg(res,"One Post",onePost);
    }else{
        next(new Error("Post is not available"));
    }
    // res.json({msg:'One Post'});
}

const post = async(req,res,next)=>{
    let result =await new DB(req.body).save();
    Helper.fMsg(res,"Post Uploaded",result);
    // res.json({msg:'Add New Post',result:req.body})
}

const patch = async(req,res,next)=>{
    res.json({msg:'You got once'});
}

const drop = async(req,res,next)=>{
    res.json({msg:'Hello Delete'})
}

module.exports = {
    all,
    onePost,
    post,
    patch,
    drop
}