import API from '../api';
export const Service = {
    getProducts,
    getProductbyKey,
    addUser,
    getUserbyKey,
    addProduct,
    removeProduct,
    updateProduct
}
function getProducts(){
    return API.get(`api/products/`)
}
function getProductbyKey(key){
    return API.get(`api/products/search/?key=${key}`)
}
function removeProduct(id){
    return API.delete(`api/products/?id=${id}`)
}
function updateProduct(data){
    return API.put(`api/products/`,data)
}
function addProduct(data){
    return API.post(`api/products/add`,data)
}
function addUser(data){
    return API.post(`api/users/add`,data)
}
function getUserbyKey(key){
    return API.get(`api/users/search/?key=${key}`)
}
