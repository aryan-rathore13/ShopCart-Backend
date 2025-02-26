const {StatusCodes,ReasonPhrases} = require('http-status-codes');
const badrequest = require("../errors/bad_request");
const { errorResponse } = require("../utils/error_message");

function createProductValidator(request,response,next){
    if(!request.body.title){
        return response.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST,new badrequest("title")));
    }
    if(!request.body.description){
        return response.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST,new badrequest("description")));
    }
    if(!request.body.price){
        return response.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST,new badrequest("price")));
    }
    if(!request.body.image){
        return response.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST,new badrequest("image")));
    }
    next();
}
module.exports={
    createProductValidator
}