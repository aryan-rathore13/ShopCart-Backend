//in memory DB
const products=[];



class ProductService{
    constructor(repository){
        this.repository=repository;
    }
    
    async createProduct(product){
        const response= await this.repository.createProduct(product);
        return response;
    }
    
    async getProducts(){
        const response=await this.repository.getProducts();
        return response;
    }
    
    async getProduct(id){
        const response=await this.repository.getProduct(id);
        return response;
    }
}

module.exports=ProductService
