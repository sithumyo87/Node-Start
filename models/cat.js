const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
    name:{type:String,unique:true,required:true},
    image:{type:String,required:true,unique:true},
    created:{type:Date,default:Date.now}
})

const Category = mongoose.model('category',catSchema);

module.exports = Category;