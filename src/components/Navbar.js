import React, {useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import Login from './loginForm';
import ResultBoxs from './SearchBox/ResultBoxs'
import { ProductConsumer } from '../context';
import {Service} from '../Service/api'



export default function Navbar (){
  const [filteredProducts,setfilteredProducts] = useState([]);
  const [searchField,setSearchField] = useState('000000000000000')
  
  useEffect(()=>{
    
    
  })
  const getProductbyKey=(key)=>{
    Service.getProductbyKey(key).then((res)=>{
      const data = res.data.data;
      const filteredProducts = data
      setfilteredProducts(filteredProducts) ;
    })
  }
  
    
    // const filteredProducts = this.products.filter(product =>(
    //   product.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    // ))
    return (
      <ProductConsumer>
      {(value) => {
        const { SignUpOpen, openSignUp , openLogin,user, isLogin,Logout} = value;
        const {userName,permission} = user
        const {cart} = JSON.parse(localStorage.getItem('State')) !== null? JSON.parse(localStorage.getItem('State')) : []
        return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src={logo} alt="store" className="navbar-brand" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Trang chủ<span class="sr-only">(current)</span></a>
            </li>
          <li class="nav-item">
            <a class="nav-link" href="/">24h Công Nghệ</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hãng
            </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/"><img class="d-flex justify-content-center" src="//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_52.jpg"/></a>
            <a class="dropdown-item" href="/"><img class="d-flex justify-content-center" src="//cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg"/></a>
            <a class="dropdown-item" href="/"><img class="d-flex justify-content-center" src="//cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg"/></a>
            <a class="dropdown-item" href="/"><img class="d-flex justify-content-center" src="//cdn.tgdd.vn/Brand/1/Realme42-b_37.png"/></a>
          </div>
          </li>
      
    </ul>
      <Form class="d-inline">
      <form class="form-inline my-2 " autocomplete="off" id = "search-site">
      
      <input class="d-inline form-control" style={{width: "370px",fontSize:"20px"}} type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
        if(e.target.value.trim() !== ''){
          setSearchField(e.target.value.trim())
        }else{
          setSearchField('000000000000000')
        }
        getProductbyKey(searchField);
        
        }}></input>
        
      
        <ResultBoxs products = {filteredProducts }/>
      
    
    
    
      </form>
      </Form>
      <button class="btn btn-outline-success " type="submit">Search</button>
    
      <Link to="/cart" className="d-block p-2 ml-auto mr-auto">
           <ButtonContainer class="d-inline">
           
            <span className="mr-2">
               <i className="fas fa-cart-plus"></i>
               
             </span>
             Giỏ Hàng
             
          </ButtonContainer>
          <Total class="d-inline">
          <b class="fs-cartic countTotalCart" >{cart? cart.length:0}</b>
          </Total>
      
        </Link>
        <div class="member">
          <p>
            <span>Xin chào:</span>
            
      {isLogin?<a href="#" class="btn-login">{userName}</a>:<a href="#" class="btn-login" onClick = {() => openLogin()}>Đăng nhập</a>}
          </p>
          {isLogin
           ? <a href="#" class="btn-login" onClick = {() => Logout()}>Đăng xuất</a>
            :<p>
              <a href = "#" onClick = {() => openSignUp()}>
              <i class="fa fa-user"></i> 
              <strong>Đăng ký tài khoản</strong>
              </a>
          </p>}
        </div>
  </div>
</nav>
        )}
    }
    </ProductConsumer>
    )
  
}

const Total = styled.form`
/*! CSS Used from: Embedded */
b{margin:0;padding:0;border:0;vertical-align:baseline;background:0 0;}
*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;}
.fs-cartic{position:relative;bottom:50px;left:140px;width:15px;height:15px;line-height:15px;text-align:center;font-size:10px;color:#fff;display:inline-block;background:#f5a623;border-radius:100%;}
*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box;}
`
const Form = styled.form`
  /*! CSS Used from: Embedded */
* {
  margin: 0;
  padding: 0;
}
img {
  border: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  text-rendering: geometricPrecision;
}
input[type="text"] {
  -webkit-appearance: none;
}
input,

h3,
h6 {
  font: 14px/18px Helvetica, Arial, "DejaVu Sans", "Liberation Sans", Freesans,
    sans-serif;
  color: #333;
  outline: none;
  zoom: 1;
}
#search-site {
  float: left;
  width: 230px;
  height: 35px;
  margin: 10px 10px 0 10px;
  background: #fff;
  position: relative;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
}
.d-block form-control mr-sm-2 mr-auto {
  float: left;
  width: 162px;
  margin-left: 8px;
  padding-top: 3px;
  border: 0;
  position: relative;
  background: #fff;
  height: 30px;
  text-indent: 10px;
  font-size: 13px;
}

[class^="icontgdd-"],
[class*="icontgdd-"] {
  background-image: url(https://cdn.tgdd.vn/v2015/Content/desktop/images/V4/icondesktop2022@1x_edit.png?v=004);
  background-repeat: no-repeat;
  display: inline-block;
  height: 30px;
  width: 30px;
  line-height: 30px;
  vertical-align: middle;
}
@media all and (-webkit-min-device-pixel-ratio: 1.5) {
  [class^="icontgdd-"],
  [class*="icontgdd-"] {
    background-image: url(https://cdn.tgdd.vn/v2015/Content/desktop/images/V4/icondesktop2022@2x_edit.png?v=003);
    background-size: 500px 100px;
  }
}
.icontgdd-topsearch {
  background-position: -160px 0;
  width: 20px;
  height: 20px;
  display: block;
  margin: 1px auto 0;
}
.wrap-suggestion {
  display: block;
  border: 1px solid #e2e2e2;
  background: #fff;
  position: absolute;
  left: 0;
  width: 345px;
  top: 45px;
  z-index: 9;
}
.wrap-suggestion:after,
.wrap-suggestion:before {
  bottom: 100%;
  left: 80px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
}
.wrap-suggestion:after {
  border-color: rgba(255, 255, 255, 0);
  border-bottom-color: #fff;
  border-width: 8px;
  margin-left: -8px;
}
.wrap-suggestion:before {
  border-color: rgba(218, 218, 218, 0);
  border-bottom-color: #dadada;
  border-width: 9px;
  margin-left: -9px;
}

header #search-site {
  height: 30px;
  margin-top: 5px;
  width: 200px;
}
header #search-site .d-block form-control mr-sm-2 mr-auto {
  height: 24px;
}

header .wrap-suggestion {
  top: 35px;
}
`