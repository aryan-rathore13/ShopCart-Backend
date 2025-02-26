const {pingController }= require('../../controllers/pingController');
const express=require('express');
const router=express.Router();

// function checkrequest(request,response,next){
//     console.log("Request is getting checked");
//     next();
// }

// function logger(request,response,next){
//     console.log("Logging the request");
//     next();
// }
// function authchecker(request,response,next){
//     console.log("Request is authenticated");
//     next();
// }
router.get('/',pingController);

module.exports = router;
