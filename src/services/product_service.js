const FakeStoreRepository= require('../repositories/fake_store_repository');
//in memory DB
const products=[];

const repository=FakeStoreRepository;
function createProduct(product){
    const newProduct={
        id:products.length,
        ...product
    };
    products.push(newProduct);
    return newProduct;
}

async function getProducts(){
    return repository.getProducts();
}

function getProduct(id){
    return products.filter(product=>product.id==id)[0];
}
module.exports={
    createProduct,
    getProducts,
    getProduct
}
