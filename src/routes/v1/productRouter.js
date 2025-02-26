const express=require('express');
const productRouter=express.Router();
const {createProductValidator} = require('../../middlewares/product_middlewares');
const {createProduct,getProducts,getProduct}= require('../../controllers/product_controller');


productRouter.post('/',createProductValidator,createProduct);
productRouter.get('/',getProducts);
productRouter.get('/:id',getProduct);

module.exports = productRouter;
