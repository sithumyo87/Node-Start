const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    user:{type:Schema.Types.ObjectId,require:true,ref:"user"},
    title:{type:String,require:true},
    des:{type:String,require:true},
    create:{type:Date,default:Date.now}
})

const Post = mongoose.model("post",PostSchema);

module.exports = Post;