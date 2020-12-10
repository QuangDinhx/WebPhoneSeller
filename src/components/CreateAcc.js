import React, { useEffect,useState } from "react";
import { ProductConsumer } from '../context';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import logo from '../logo2.png';
import axios from 'axios';
import {Service} from '../Service/api'


export default function CreateAcc() {
  const [show, setShow] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [HoVaTen, setHoVaTen] = React.useState("");
  const [formErrors, setFormErrors] = React.useState(
    {
        userName: "",
        password: "",
        Repassword: "",
    }
  )
  const [password, setPassword] = React.useState("");
  const [Repassword, setRePassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  
  

  return (
    <ProductConsumer>
    {(value) => {
      const { SignUpOpen, openSignUp , closeSignUp ,setLogin,setUser,isLogin} = value;
      console.log(isLogin)
      setShow(SignUpOpen);
      
      
      if(!show){
        
        return null;
      }else{
        return (
          <Modal
          show={SignUpOpen}
          onHide={closeSignUp}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sell Phone</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBContainer>
          <MDBRow>
          <MDBCol md="6">
          
      
      <p className="h4 text-center mb-4">Tạo tài khoản</p>

      
      
      <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
        Tài khoản:
      </label>
      <input
          name="userName"
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required />
      <a></a>

      <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
        Mật khẩu:
        
      </label>
      <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />

      <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
        Nhập lại mật khẩu:
      </label>
      <input
          name="password"
          type="password"
          value={Repassword}
          onChange={e => setRePassword(e.target.value)}
          required />
          <a></a>

      <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
      <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(!acceptedTerms)}
          required />
        Tôi đồng ý với các điều khoản của trang 
      </label>
      
      

      
    
    </MDBCol>
    <a class="navbar-brand" href="/"><img src={logo} alt="store" className="navbar-brand" /></a>
  </MDBRow>
</MDBContainer>
    </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>{
          if(userName!=='' && password !=='' && Repassword !=='' && password === Repassword && acceptedTerms === true){
            const data = {
              userName: userName,
              password: password,
              permission: "user"
            }
            console.log(data)
            Service.addUser(data).then((res)=>{
              if(res.data.data){
                console.log(true);
              }else{
                console.log(false);
              }
              setShow(false)
              closeSignUp()
              
              
            }) 
            setTimeout(()=>{
              const data2 = {
                userName: userName,
                permission: "user"
              }
              setLogin();
              setUser(data2);
              console.log(isLogin)

            },300)
           }else{
             if(userName === ''){
               window.location ="#"
              alert('Không được bỏ trống User Name');
             }else if(userName.length < 5){
               window.location ="#"
               alert('Tên tài khoản quá ngắn')
             }
             else if(password === ''){
              window.location ="#"
              alert('Không được bỏ trống password');
             }else if(password < 5){
              window.location ="#"
              alert('Mật khẩu quá ngắn');
             }
             else if(password !== Repassword){
              window.location ="#"
             alert('Mật khẩu không trùng');
            }else if(acceptedTerms !== true){
              window.location ="#"
              alert('Vui lòng chấp nhận điều khoản');
            }
             
           }
          if(!show){
            closeSignUp()
          }
          
          
        }}>
            Submit
          </Button>
      
          <Button variant="secondary" onClick={closeSignUp}>
            Close
          </Button>
          
          
        </Modal.Footer>
      </Modal>
        )
      }
    
  }}
</ProductConsumer>
  )
}