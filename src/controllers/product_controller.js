const {StatusCodes,ReasonPhrases} = require('http-status-codes');
function createProduct(request,response){
    try {
        return response.status(StatusCodes.CREATED).json({
            success:true,
            error:{},
            message:ReasonPhrases.CREATED,
            data:{
                id:Math.random() * 20,
                title:request.body.title,
                price:request.body.price,
                description:request.body.description,
                image:request.body.image,
                category:request.body.category
            }

        })

    } catch (error) {
        console.log("Something went wrong",error);
    }
}

module.exports={
    createProduct
}