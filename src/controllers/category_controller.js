const {StatusCodes,ReasonPhrases} = require('http-status-codes');
const CategoryRepository = require('../repositories/category_repository');
const CategoryService = require('../services/product_service');

const categoryservice=new CategoryService(new CategoryRepository());

async function createCategory(req,res){
    try {
        const response=await categoryservice.createProduct(req.body);
        
        return res.status(StatusCodes.CREATED).json({
            success:true,
            error:{},
            message:ReasonPhrases.CREATED,
            data:response
        });
        

    } catch (error) {
        console.log("Something went wrong",error);
    }
}
async function getProducts(req,res){
    try {
        const response=await productService.getProducts();
        
        return res.status(StatusCodes.OK).json({
            success:true,
            error:{},
            message:"Success",
            data:response
        });
    } catch (error) {
        console.log("Something went wrong",error);
    }
}
async function getProduct(req,res){
    try {
        const response= await productService.getProduct(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error:{},
            message:"Successfully fetched",
            data:response
        });
    } catch (error) {
        console.log("Something went wrong",error);
    }
}

module.exports={
    createCategory
}