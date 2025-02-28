const express=require('express');

const v1router=express.Router();
const pingRouter=require('./pingRouter');
const productRouter=require('./productRouter.js');
const categoryRouter=require('./category_router.js');
v1router.use('/ping',pingRouter);
v1router.use('/products',productRouter);
v1router.use('/categories',categoryRouter);

module.exports=v1router;