import React, {  useEffect, useState } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import {Service} from '../Service/api'
import styled from 'styled-components';
import { Button} from 'react-bootstrap';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export function Details({match}) {
    const [item,setItem] = useState({});
    useEffect(()=>{
      Service.getProducts().then((res)=>{
        const data = res.data.data
        const item = data[match.params.id - 1];
        setItem(item)
      })
    },[])
   
    

    return (
       
      <ProductConsumer>
        {(value) => {
          let state = JSON.parse(localStorage.getItem('State'));
          
          const { id, company, img, imfo, price,inCart, title,OPsys,CamBack,CamFront,CPU,RAM,Capacity,MemorySize } = item?item : value.detailProduct;
          const {cart} = state?state:[]
          if(cart&& cart.length!==0){
            cart.forEach(element => {
              if(element.id === id){
                let addItem = item;
                addItem.inCart = true
                setItem(addItem);
              }
            });
          }   
          
          return (
            <div class="card">
            <div class="card-body">
            <div className="container py-5">
            
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              
              <div className="row">
              
                <div class="col-10 mx-auto col-md-6 my-3">
                  <img src={`../${img}`} alt={`${img}`} class="d-block img-fluid " style={{paddingBottom:"50px"}} />
                  <Link to="/cart">
                  <Button class="d-block col-10" style={{height:"60px", width: "400px", backgroundColor: "red" }} cart disabled ={inCart?true:false} onClick={() => {
                      value.addToCart(id);
                      
                      
                    }}
                    >Mua Ngay</Button>
                  </Link>
                  <div style={{paddingTop:"15px"}}>
                    <Link to="/">
                      <ButtonContainer style={{paddingRight:"20px"}}>
                        Trở lại
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled ={inCart?true:false} onClick={() => {
                      value.addToCart(id);
                      value.openModal(id); 
                      console.log(inCart)
                    }}>
                      {inCart ? "Đã sở hữu" : "Thêm vào giỏ hàng"}
                    </ButtonContainer>
                  </div>
                </div>
                
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: <span>$</span>{price}</strong>
                  </h4>
                
                

                  <h4 className="text-blue">
                    <strong>Thông tin chi tiết:</strong>
                  </h4>
                  <div class="card">
                  <div class="card-body">
                  <ul class="parameter ">
                    <li class="p229056 g72 "><span>Hệ điều hành:</span>
                      <div>{OPsys}</div>
                    </li>
                    <li class="p229056 g27"><span>Camera sau:</span>
                      <div>{CamBack}</div>
                    </li>
                    <li class="p229056 g29"><span>Camera trước:</span>
                        <div>{CamFront}</div>
                    </li>
                    <li class="p229056 g6059"><span>CPU:</span>
                      <div>{CPU}</div>
                    </li>
                    <li class="p229056 g50"><span>RAM:</span>
                      <div>{RAM}</div>
                    </li>
                    <li class="p229056 g49"><span>Bộ nhớ trong:</span>
                      <div>{MemorySize}</div>
                    </li>
                    <li class="p229056 g84_10882"><span>Dung lượng pin:</span>
                      <div>{Capacity}</div>
                    </li>
                  </ul>
                  </div>
                  </div>
                  <div class="card red-card st-card pb-3">
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Giới Thiệu:
                  </p>
                  
                  <p className="text-muted lead">
                    {imfo}
                  </p>
                  </div>
                  
                  {/* buttons */}
                  
                </div>
              </div>
            </div>
            </div>
            </div>
            
          )
        }}
      </ProductConsumer>
      
    )
  
}
