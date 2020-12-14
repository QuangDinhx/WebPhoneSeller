import API from '../api';
export const Service = {
    getProducts,
    getProductbyKey,
    addUser,
    getUserbyKey,
    addProduct,
    removeProduct,
    updateProduct,
    getAllUser,
    getAllAdmin,
    removeUser,
    updateUser,
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
function removeUser(id){
    return API.delete(`api/users/?id=${id}`)
}
function updateProduct(data){
    return API.put(`api/products/`,data)
}
function updateUser(data){
    return API.put(`api/users/`,data)
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
function getAllUser(){
    return API.get(`api/users/`)
}
function getAllAdmin(){
    return API.get(`api/users/admin`)
}
