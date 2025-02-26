const {StatusCodes,ReasonPhrases} = require('http-status-codes');
const {createProduct,getProducts,getProduct} = require('../services/product_service');
function createProductHandler(req,res){
    try {
        const response=createProduct(req.body);
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
async function getProductsHandler(req,res){
    try {
        const response=await getProducts();
        console.log(response.data);
        return res.status(StatusCodes.OK).json({
            success:true,
            error:{},
            message:"Success",
            data:response.data
        });
    } catch (error) {
        console.log("Something went wrong",error);
    }
}
function getProductHandler(req,res){
    try {
        const response=getProduct(req.params.id);
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
    createProduct: createProductHandler,
    getProducts: getProductsHandler,
    getProduct: getProductHandler
}