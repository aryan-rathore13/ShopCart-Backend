const express=require('express');
const productRouter=express.Router();
productRouter.get('/',(req,res)=>{
    res.json({product:[]});
});

module.exports = productRouter;
