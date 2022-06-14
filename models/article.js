const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    name:{type:String,unique:true,required:true},
    author:{type:String,unique:true,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true,min:0},
    created:{type:Date,default:Date.now()}
})

const article = mongoose.model('article',articleSchema);
module.exports = {
    article
}