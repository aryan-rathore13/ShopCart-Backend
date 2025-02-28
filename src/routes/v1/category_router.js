const express=require('express');
const categoryRouter=express.Router();

const {createCategory}= require('../../controllers/category_controller');


categoryRouter.post('/',createCategory);


module.exports = categoryRouter;
