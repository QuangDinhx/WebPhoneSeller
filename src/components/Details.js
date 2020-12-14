import React, {  useEffect, useState } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import {Service} from '../Service/api'
import styled from 'styled-components';
import { Button} from 'react-bootstrap';


export function Details({match}) {
    const [item,setItem] = useState({});
    const [Utitle,setTitle] = useState('');
    const [UCompany,setCompany] = useState('')
    const [Uprice,setPrice] = useState('');
    const [UOPsys,setOPsys] = useState('');
    const [UCamBack,setCamBack] = useState('');
    const [UCamFront,setCamFront] = useState('');
    const [UCPU,setCPU] = useState('');

    const [URAM,setRAM] = useState('');

    const [UMemorySize,setMemorySize] = useState('');

    const [UCapacity,setCapacity] = useState('');

    const [Uimfo,setImfo] = useState('');
    
    useEffect(()=>{
      Service.getProducts().then((res)=>{
        const data = res.data.data
        const item = data[match.params.id - 1];
        
          setItem(item)
        
      })
    },[])
   
    

    return (
       <>
      <ProductConsumer>
        {(value) => {
          
          
          const {_id, id, company, img, imfo, price,inCart, title,OPsys,CamBack,CamFront,CPU,RAM,Capacity,MemorySize } = item?item : value.detailProduct;
          const {cart,isLogin,user,setEditMode,isEdit} = value
          const {permission} = user
          console.log(Utitle)
          
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
              {isLogin && permission ==='admin'?
                <div className="col">
                  <div className="float-right">
                  {isEdit?
                      <button type="button" className="d-inline btn pr-3" onClick={()=>{

                        const data = {
                          _id:_id,
                          id:id,
                          title:Utitle !==''?Utitle:title,
                          img:img,
                          price:Uprice !==''?Uprice:price,
                          company:UCompany !==''?UCompany:company,
                          imfo:Uimfo !==''?Uimfo:imfo,
                          inCart:false,
                          count:0,
                          total:0,
                          OPsys:UOPsys !== ''?UOPsys:OPsys,
                          CamBack:UCamBack !== ''?UCamBack:CamBack,
                          CamFront:UCamFront !==''?UCamFront:CamFront,
                          CPU:UCPU !==''?UCPU:CPU,
                          RAM:URAM !==''?URAM:RAM,
                          Capacity:UCapacity !== ''?UCapacity:Capacity,
                          MemorySize:UMemorySize !== ''?UMemorySize:MemorySize, 
                          active:true
                        }
                        console.log(data)
                        Service.updateProduct(data).then((res)=>{
                          if(res.data.data){
                            console.log(true);
                          }else{
                            console.log(false);
                          }
                          setEditMode()

                          setTimeout(()=>{
                            Service.getProducts().then((res)=>{
                              const data = res.data.data
                              const item = data[match.params.id - 1];
                              setItem(item)
                            })
                          },100)
                          
                          
                        }) 
                      }}>
                        Lưu thay đổi
                      </button>
                    :null}
                    <button type="button" className="d-inline btn btn-success " onClick={()=>{setEditMode()}}>
                      Sửa
                    </button>
                  </div>
                    
                </div>
              :null}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  {isEdit?
                    <input
                    name="userName"
                    type="text"
                    width="481px"
                    height="48px"
                    value = {Utitle}
                    placeholder = {title}
                    onChange={e => setTitle(e.target.value)}
                    required />
                  :<h1>{title}</h1>}
                  
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
                  
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by:{isEdit?
                      <input
                      name="userName"
                      type="text"
                      width="153px"
                      height="34px"
                      value={UCompany}
                      placeholder={company}
                      onChange={e => setCompany(e.target.value)}
                      required />
                    :<span className="text-uppercase">{company}</span>} 
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: <span>$</span>{isEdit?
                      <input
                      name="userName"
                      type="text"
                      width="50px"
                      height="28px"
                      value={Uprice}
                      placeholder={price}
                      onChange={e => setPrice(e.target.value)}
                      required />
                    :`${price}`}
                    </strong>
                  </h4>
                
                

                  <h4 className="text-blue">
                    <strong>Thông tin chi tiết:</strong>
                  </h4>
                  <div class="card">
                  <div class="card-body">
                  <ul class="parameter ">
                    <li class="p229056 g72 "><span>Hệ điều hành:</span>
                      {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={UOPsys}
                        placeholder={OPsys}
                        onChange={e => setOPsys(e.target.value)}
                        required />
                      :<div>{OPsys}</div>}
                    </li>
                    <li class="p229056 g27"><span>Camera sau:</span>
                      {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={UCamBack}
                        placeholder={CamBack}
                        onChange={e => setCamBack(e.target.value)}
                        required />
                      :<div>{CamBack}</div>}
                    </li>
                    <li class="p229056 g29"><span>Camera trước:</span>
                        {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={UCamFront}
                        placeholder={CamFront}
                        onChange={e => setCamFront(e.target.value)}
                        required />
                      :<div>{CamFront}</div>}
                    </li>
                    <li class="p229056 g6059"><span>CPU:</span>
                      {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={UCPU}
                        placeholder={CPU}
                        onChange={e => setCPU(e.target.value)}
                        required />
                      :<div>{CPU}</div>}
                    </li>
                    <li class="p229056 g50"><span>RAM:</span>
                      {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={URAM}
                        placeholder={RAM}
                        onChange={e => setRAM(e.target.value)}
                        required />
                      :<div>{RAM}</div>}
                    </li>
                    <li class="p229056 g49"><span>Bộ nhớ trong:</span>
                      {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={UMemorySize}
                        placeholder={MemorySize}
                        onChange={e => setMemorySize(e.target.value)}
                        required />
                      :<div>{MemorySize}</div>}
                    </li>
                    <li class="p229056 g84_10882"><span>Dung lượng pin:</span>
                      {isEdit?
                        <input
                        name="userName"
                        type="text"
                        width="172px"
                        height="32px"
                        value={UCapacity}
                        placeholder={Capacity}
                        onChange={e => setCapacity(e.target.value)}
                        required />
                      :<div>{Capacity}</div>}
                      
                    </li>
                  </ul>
                  </div>
                  </div>
                  <div class="card red-card st-card pb-3">
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Giới Thiệu:
                  </p>
                  {isEdit?
                    <textarea
                    name="userName"
                    type="text"
                    cols="40" 
                    rows="5"
                    value={Uimfo}
                    placeholder={imfo}
                    onChange={e => setImfo(e.target.value)}
                    required />
                  
                  :<p className="text-muted lead">
                  {imfo}
                </p>
                  }
                  
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

      </>
    )
  
}
