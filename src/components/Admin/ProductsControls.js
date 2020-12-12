import React, { useState,useEffect } from 'react';
import { Button} from 'react-bootstrap';

import { ProductConsumer } from '../../context';
import {Service} from '../../Service/api'
import { Link } from 'react-router-dom';


export default function ProductControl(){
  const [products,setProducts] = useState([])
  

  const handleRemoveItem=(_id)=>{
    Service.removeProduct(_id).then((res)=>{
      if(res.data.data){
        console.log('thanh cong')
      }else{
        console.log('that bai')
      }
    })
  }
  
  const handleshow=()=>{

  }
  useEffect(()=>{
   
    Service.getProducts().then((res)=>{
      const data = res.data.data
      const products = data;
      setProducts(products)
    })
      
  })
  
   
    return (
      <ProductConsumer>
            {(value) => {
              const {isLogin,user,openAddPro} = value;
              const {permission} = user;
              
              if(isLogin && permission === "admin"){
                return(
                  <div>
                    <h1 class="d-inline text-center">Danh sách sản phẩm</h1>
                    
                    <button type="button" className="d-inline btn btn-success float-right" onClick={()=>{openAddPro()}}>
                      Thêm sản phẩm
                    </button>
                    
                    
                    <div class="card">
                    <div class="card-body">
                    {products.map((value)=>{
                    const {_id,id, title, img, price, } = value;
                    return (
                      <>
                      <hr></hr>
                      <div className="row my-2 text-capitalize text-center">
                        
                        <div className="col-10 mx-auto col-lg-2">
                          <img src={img} alt="product" style={{ width: '5rem', height: '5rem' }} className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">product: </span>
                          {title}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">price: </span>
                          {price}
                        </div>
                        
                        <div className="col-10 mx-auto col-lg-2">
                          <Button onClick={() => handleRemoveItem(_id)}>
                            Delete
                          </Button>
                        </div>
                        <div >
                        <Link to={`/details/${id}`} className="col-10 mx-auto col-lg-2">
                             <Button class="d-inline">
                               Edit 
                            </Button>
                          </Link>
                        </div>
                  
                      </div>
                      </>
                    )
                 })}
                  </div>
                  </div>
                  </div>
                 
                )
              }else{
                return (
                  <div className="container">
         <div className="row">
           <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
             <h1 className="display-3">
               404
             </h1>
             <h1>error</h1>
             <h2>page not found</h2>
    <h3>the requested URL: <span className="text-danger">ProductControl</span>{" "} was not found</h3>
           </div>
         </div>
       </div>
                )
              }
             
            }  
            }
          </ProductConsumer>
      
      
    )
  
}
