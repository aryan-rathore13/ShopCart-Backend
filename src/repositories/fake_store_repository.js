const {default:axios}= require("axios");
class FakeStoreRepository{
    async getProducts(){
        const response= await axios.get('https://fakestoreapi.com/products')
        return response.data;
    }
    async getProduct(id){
        const response= await axios.get('https://fakestoreapi.com/products/'+id)
        return response.data;
    }
    async createProduct(product){
        const response= await axios.post('https://fakestoreapi.com/products',product)
        return response.data;
    }
}


module.exports=FakeStoreRepository