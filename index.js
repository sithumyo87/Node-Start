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


const express = require('express');
const app = express();
app.use(express.json());

const userRouter = require('./routes/users');
const postRouter = require('./routes/post');

app.use("/users",userRouter);
app.use("/post",postRouter);
app.listen(3000,console.log('Server is running at port 3000'))