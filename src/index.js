const express=require('express');
const app=express();
const responsetime=require('response-time');
const bodyparser=require('body-parser');
const apiRouter=require('./routes/apiRouter');
const db =require('./config/db_config');
const {PORT} = require('./config/serverConfig')
const category=require('../src/models/category')
// app.use(responsetime(function f(request,response,time){
//     console.log("Time elapsed",time);
// }));
app.use(responsetime());
app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',apiRouter);
app.listen(PORT,async ()=>{
    console.log(`Server for shopcart is up on ${PORT}`);
    await db.sync();
    console.log('db connected')
    // const res=await category.create({
    //     name:'Electronics',
    //     description:'Cateogory for Electronic Products'
    // });
    // console.log(res);
    
})