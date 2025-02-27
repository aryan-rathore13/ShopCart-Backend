const express=require('express');
const app=express();
const responsetime=require('response-time');
const bodyparser=require('body-parser');
const mysql=require('mysql2');
const {PORT,DB_Host,DB_NAME,DB_PASS,DB_USER}= require('./config/serverConfig');
const {pingConfigRoutes} = require('./routes/v1/pingRouter')
var db = mysql.createConnection({
    host:DB_Host,
    user:DB_USER,
    password: DB_PASS,
    database: DB_NAME
})
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
    db.connect((err)=>{
        if(err){
            console.log("DB didnt connect");
            console.log(err);
            throw err;
        }
        console.log("Conected boss");
        db.query(`Select * from productstb`,(err,result)=>{
            if(err){
                throw err;
            }
            console.log(result);
        })
    });
})