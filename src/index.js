const express=require('express');
const app=express();


const {PORT}= require('./config/serverConfig');
const {pingConfigRoutes} = require('./routes/v1/pingRouter')
const apiRouter=require('./routes/apiRouter');

app.use('/api',apiRouter);
app.listen(PORT,()=>{
    console.log(`Server for shopcart is up on ${PORT}`);
})