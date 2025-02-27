const {StatusCodes,ReasonPhrases} = require('http-status-codes');
const FakeStoreRepository = require('../repositories/fake_store_repository');
const ProductService = require('../services/product_service');

const productService=new ProductService(new FakeStoreRepository());

function createProduct(req,res){
    try {
        const response=productService.createProduct(req.body);
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
function getProduct(req,res){
    try {
        const response=productService.getProduct(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error:{},
            message:"Successfully fetched",
            data:response.data
        });
    } catch (error) {
        console.log("Something went wrong",error);
    }
}

module.exports={
    createProduct,
    getProducts,
    getProduct
}