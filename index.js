// const express = require("express");

// const app = express();
// app.use(express.json());

// // let users = [
// //     {id:1,name:'Mg Mg',sex:'male'},
// //     {id:2,name:'Kyaw Kyaw',sex:'male'},
// //     {id:3,name:'Mya Mya',sex:'female'},
// // ]

// // app.get('/user',(req,res,next)=>{
// //     res.status(200).json(users);
// // })

// // app.get('/user/:id',(req,res,next)=>{
// //     let id = req.params.id;
// //     let user = users.find(usr => usr.id == id);
// //     if(user){
// //         res.status(200).json(user);
// //     }else{
// //         res.json({msg:'No student match with Ur Id'});
// //     }
   
// // })

// // app.post('/user',(req,res,next)=>{
// //     let id = req.body.id;
// //     let name = req.body.name;
// //     let sex = req.body.sex;
// //     let user = {
// //         id : id,
// //         name : name,
// //         sex : sex,
// //     }
// //     users.push(user);
// //     res.json(users);
// // })

// // app.patch('/user/:id',(req,res,next)=>{
// //     let id = req.params.id;
// //     let user = users.find(usr => usr.id == id)
// //     if(user){
// //         user.name = req.body.name;
// //         res.json(users)
// //     }else{
// //         res.json({msg:'This name is not here!'})
// //     }
// // })

// // app.delete('/user/:id',(req,res,next)=>{
// //     let id = req.params.id;
// //     let user = users.filter(usr => usr.id != id)
// //     res.json(user);
// // })
// // app.get('*',(req,res)=>{
// //     res.send('Page not found');
// // })
// const userRouter = require('./routes/users');

// app.use("/users",userRouter);
// app.listen(3000,console.log('Server is running at port 3000'));

//middleware
// const userRouter = require('./routes/users');
// const postRouter = require('./routes/post');

// const furky = (req,res,next) =>{
//     console.log(req.warningMsg);
//     res.json({msg:"I am admin"})
// }
// const isLogin = (req,res,next)=>{
//     if(4 * 1 == 4){
//         req.successMsg = "Accpet permission";
//         next();
//     }else{
//         next(new Error("Login Invalid"));
//     }
// }

// const isAdmin = (req,res,next) =>{
//     if(1+1 == 2){
//         console.log(req.successMsg);
//         req.warningMsg = "I am in ur system";
//         next();
//     }else{
//         next(new Error("You cannot access to the system"))
//     }
// }
// app.use("/users",isLogin,isAdmin,furky);

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const path = require('path');

const {imageUploads, deleteFile , imageUpload} = require('./utilies/gallery');

// mongoose.connect(`mongodb://0.0.0.0:27017/${process.env.DB_NAME}`);
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
.then(() => {
    console.log("connected to database");
})
.catch(err => console.log(err));
const app = express();
app.use(express.json());
app.use(fileUpload());


app.post('/gallery',imageUploads,(req,res,next)=>{
    res.status(200).json({msg:"Successfully Upload","filename":req.body.images})
});

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

// app.post('/gallery',async(req,res,next) =>{
//     await deleteFile(req.body.name);
//     res.status(200).json({msg:"Delete Successfully","filename":req.body.name})
// })
const userRouter = require('./routes/users');
 const postRouter = require('./routes/post');
 const catRouter = require('./routes/cat');
const articleRouter = require('./routes/article');
const tagController = require('./routes/tag');
const commentController = require('./routes/comment')


app.use("/users",userRouter);
app.use("/post",postRouter);
app.use("/category",catRouter);
app.use('/article',articleRouter);
app.use('/tag',tagController);
app.use('/comment',commentController);


app.use((err,req,res,next)=>{
    err.status = err.status || 200;
    res.status(err.status).json({
        cons:false,
        msg:err.message
    })
})
app.listen(process.env.PORT,console.log(`Server is running at PORT ${process.env.PORT}`))