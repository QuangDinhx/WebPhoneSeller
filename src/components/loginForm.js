import React from "react";
import { ProductConsumer } from '../context';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import logo from '../logo2.png';
import {Service} from '../Service/api'

export default function LOgin() {
  const [show, setShow] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  

  return (
    <ProductConsumer>
    {(value) => {
      const { LoginOpen, openLogin , closeLogin, setLogin,setUser,isLogin} = value;
      setShow(LoginOpen);
      if(!show){
        return null;
      }else{
        return (
          <Modal
          show={LoginOpen}
          onHide={closeLogin}
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
          
      
      <p className="h4 text-center mb-4">Đăng Nhập</p>
      
      <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
        Tài khoản:
      </label>
      <input
          name="userName"
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required />
      

      <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
        Mật khẩu:
        
      </label>
      <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />

      <div className="text-center mt-4">
      <Button variant="primary" onClick={()=>{
        if(userName !== '' && password !== ''){
          
          let data
          console.log(userName)
          Service.getUserbyKey(userName).then((res)=>{
            data = res.data.data
            console.log(data)
            
          }) 
          setTimeout(()=>{
            if(data.length !== 0 ){
              if(data[0].password !== password){
                
                console.log(password)
                window.location ="#"
                alert('Không tìm được tài khoản hoặc mật khẩu');
              }else{
                console.log(true);
                
                setShow(false)
                closeLogin()
                const data2 = {
                  userName: userName,
                  permission: "user"
                }
                setLogin();
                setUser(data2);
                console.log(isLogin)
              }
              
            }else{
              window.location ="#"
              alert('Không tìm được tài khoản');
              console.log(false);
            }
            

          },300)
         }else{
           if(userName === ''){
             window.location ="#"
            alert('Không được bỏ trống User Name');
           }
           else if(password === ''){
            window.location ="#"
            alert('Không được bỏ trống password');
           }
           
          
           
         }
        if(!show){
          closeLogin()
        }
        
        
        }}>
            Submit
          </Button>
      </div>

      
    
    </MDBCol>
    <a class="navbar-brand" href="#"><img src={logo} alt="store" className="navbar-brand" /></a>
  </MDBRow>
</MDBContainer>
    </Modal.Body>
        <Modal.Footer>
        
          <Button variant="secondary" onClick={closeLogin}>
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