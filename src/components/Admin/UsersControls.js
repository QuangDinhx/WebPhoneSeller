import React, { useState,useEffect } from 'react';
import { Button} from 'react-bootstrap';

import { ProductConsumer } from '../../context';
import {Service} from '../../Service/api'
import { Link } from 'react-router-dom';


export default function UserControl(){
  const [users,setUsers] = useState([])
  const [admins,setAdmins] = useState([])

  const handleRemoveItem=(_id)=>{
    Service.removeUser(_id).then((res)=>{
      if(res.data.data){
        console.log('thanh cong')
      }else{
        console.log('that bai')
      }
    })
  }
  
  
  
  useEffect(()=>{
   
    Service.getAllUser().then((res)=>{
      const data = res.data.data
      const users = data;
      setUsers(users)
    })
    Service.getAllAdmin().then((res)=>{
        const data = res.data.data
        const users = data;
        setAdmins(users)
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
                    <h1 class="d-inline text-center">Danh sách người dùng</h1>
                    <div class="card">
                    <div class="card-body">
                    <div className="container-fluid text-center d-none d-lg-block">

                            <div className="row">
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Tên người dùng</p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Quyền</p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Ngày tạo</p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase"></p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase"></p> 
                            </div>
                            </div>
                            </div>
                    {users.map((value)=>{
                    const {_id,userName, permission, createdAt } = value;
                    return (
                      <>
                      <hr></hr>
                      <div className="row my-2 text-capitalize text-center">
                        
                        
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">product: </span>
                          {userName}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">price: </span>
                          {permission}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">price: </span>
                          {createdAt}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <Button onClick={() => handleRemoveItem(_id)}>
                            Delete
                          </Button>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <Button onClick={() => {
                              const data={
                                  _id:_id,
                                  userName:userName,
                                  permission:'admin'
                              }
                              Service.updateUser(data).then((res)=>{
                                if(res.data.data){
                                  console.log(true);
                                }else{
                                  console.log(false);
                                }
                                })
                          }}>
                            Gán quyền Admin
                          </Button>
                        </div>
                        <div >
                        
                        </div>
                  
                      </div>
                      </>
                    )
                 })}
                  </div>
                  </div>
                  <h1 class="d-inline text-center">Danh sách Admin</h1>
                    <div class="card">
                    <div class="card-body">
                    <div className="container-fluid text-center d-none d-lg-block">

                            <div className="row">
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Tên người dùng</p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Quyền</p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Ngày tạo</p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase"></p> 
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase"></p> 
                            </div>
                            </div>
                            </div>
                    {admins.map((value)=>{
                    const {_id,userName, permission, createdAt } = value;
                    return (
                      <>
                      <hr></hr>
                      <div className="row my-2 text-capitalize text-center">
                        
                        
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">product: </span>
                          {userName}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">price: </span>
                          {permission}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <span className="d-lg-none">price: </span>
                          {createdAt}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <Button onClick={() => handleRemoveItem(_id)}>
                            Delete
                          </Button>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                          <Button onClick={() => {
                              const data={
                                  _id:_id,
                                  userName:userName,
                                  permission:'user'
                              }
                              Service.updateUser(data).then((res)=>{
                                if(res.data.data){
                                  console.log(true);
                                }else{
                                  console.log(false);
                                }
                                })
                          }}>
                            Tước quyền Admin
                          </Button>
                        </div>
                        <div >
                        
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
    <h3>the requested URL: <span className="text-danger">UserControl</span>{" "} was not found</h3>
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
