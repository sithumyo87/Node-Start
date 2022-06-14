const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    user:{type:Schema.Types.ObjectId,required:true,ref:"user"},
    cats:{type:Schema.Types.ObjectId,required:true,ref:"category"},
    tags:{type:Schema.Types.ObjectId,required:true,ref:"tag"},
    likes:{type:Number,default:0},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    image:{type:String,required:true},
    create:{type:Date,default:Date.now}
})

const Post = mongoose.model("post",PostSchema);

module.exports = Post;