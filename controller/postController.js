

const all = async(req,res,next)=>{
    res.json({msg:'All Data Posts'});
};

const onePost = async(req,res,next)=>{
    res.json({msg:'One Post'});
}

const post = async(req,res,next)=>{
    res.json({msg:'Add New Post',result:req.body})
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