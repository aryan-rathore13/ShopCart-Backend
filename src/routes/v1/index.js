const express=require('express');

const v1router=express.Router();
const pingRouter=require('./pingRouter');
const productRouter=require('./productRouter.js');
v1router.use('/ping',pingRouter);

v1router.use('/products',productRouter);

module.exports=v1router;