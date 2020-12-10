import API from '../api';
export const Service = {
    getProducts,
    getProductbyKey,
    addUser,
    getUserbyKey
}
function getProducts(){
    return API.get(`api/products/`)
}
function getProductbyKey(key){
    return API.get(`api/products/search/?key=${key}`)
}
function addUser(data){
    return API.post(`api/users/add`,data)
}
function getUserbyKey(key){
    return API.get(`api/users/search/?key=${key}`)
}
