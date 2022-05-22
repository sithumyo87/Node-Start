const all = async(req,res,next) =>{
    res.json({msg:"Get All user"});
}

const oneUser = async(req,res,next)=>{
    res.json({msg:`One user of ${req.params.id}`});
}

const addUser = async(req,res,next) =>{
    res.json({msg:'Add User Done',result:req.body})
}

const editUser = async(req,res,next) =>{
    res.json({msg:`Edit User Id ${req.params.id}`,result:req.body})
}

const deleteUser = async(req,res,next)=>{
    res.json({msg:`Delete User Id ${req.params.id}`})
}

module.exports = {
    all,
    oneUser,
    addUser,
    editUser,
    deleteUser
}