const badrequest = require("../errors/bad_request");
const { errorResponse } = require("../utils/error_message");

function createProductValidator(request,response,next){
    if(!request.body.title){
        return response.status(400).json(errorResponse("Title is required",new badrequest("title")));
    }
    if(!request.body.description){
        return response.status(400).json(errorResponse("Description is required",new badrequest("description")));
    }
    if(!request.body.price){
        return response.status(400).json(errorResponse("Price is required",new badrequest("price")));
    }
    if(!request.body.image){
        return response.status(400).json(errorResponse("Image is required",new badrequest("image")));
    }
    next();
}
module.exports={
    createProductValidator
}