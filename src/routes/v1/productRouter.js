const express=require('express');
const productRouter=express.Router();
const {createProductValidator} = require('../../middlewares/product_middlewares');
const {createProduct}= require('../../controllers/product_controller');
productRouter.get('/',(req,res)=>{
    res.json({product:[]});
});

productRouter.post('/',createProductValidator,createProduct);

module.exports = productRouter;
