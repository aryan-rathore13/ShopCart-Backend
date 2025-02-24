const express=require('express');
const app=express();


const {PORT}= require('./config/serverConfig');

app.listen(3000,()=>{
    console.log(`Server for shopcart is up on ${PORT}`);
})