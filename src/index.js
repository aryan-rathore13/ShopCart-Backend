const express=require('express');
const app=express();
const responsetime=require('response-time');
const bodyparser=require('body-parser');

const {PORT}= require('./config/serverConfig');
const {pingConfigRoutes} = require('./routes/v1/pingRouter')
const apiRouter=require('./routes/apiRouter');
// app.use(responsetime(function f(request,response,time){
//     console.log("Time elapsed",time);
// }));
app.use(responsetime());
app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',apiRouter);
app.listen(PORT,()=>{
    console.log(`Server for shopcart is up on ${PORT}`);
})