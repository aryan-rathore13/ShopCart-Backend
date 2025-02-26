const {default:axios}= require("axios");
async function getProducts(){
    const response= await axios.get('https://fakestoreapi.com/products')
    return response;
}

module.exports={
    getProducts
}