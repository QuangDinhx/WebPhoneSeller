import React from "react";
import styled from 'styled-components';
import { Button} from 'react-bootstrap';


export default function CusInf() {
  
    const [Anh, setAnh] = React.useState(false);
    const [Chi, setChi] = React.useState(false);
    const [HoVaTen, setHoVaTen] = React.useState("");
    const [phoneNumber, setphoneNumber] = React.useState("");

  
    const [address, setAddress] = React.useState("");
    
    const [request, setRequest] = React.useState("");

    const handleSubmit = (event) => {


    
  }

  return (

          <form onSubmit={handleSubmit}>
      <div class="row">
    <div class="col-10 mt-2 ml-sm-1 ml-md-auto col-sm-5text-capitalize " >
      <p class="h4  mb-4"><b>Thông tin khách Hàng</b></p>
      <div>
      <label htmlFor="defaultFormLoginEmailEx" class="grey-text">
      <input
          
          name="acceptedTerms"
          type="checkbox"
          checked={Anh}
          onChange={e => {setAnh(e.target.value)
            if(Chi){
                setChi(!Chi)
            }
        }}
          required />
        <b class='col-2'>Anh </b>
        
      </label>
      <label htmlFor="defaultFormLoginEmailEx" class="grey-text col-9">
      <input
          
          name="acceptedTerms"
          type="checkbox"
          checked={Chi}
          onChange={e => {setChi(e.target.value);
            if(Anh){
                setAnh(!Anh)
            }
        }}
          required />
        <b class='col-2'>Chị </b>
      </label>
      </div>

        <div>
        <label htmlFor="defaultFormLoginEmailEx" class="grey-text">
        
        <b>Họ và tên :</b>
      </label>
      </div><div>
      <input
          name="userName"
          type="text"
          placeholder="Họ và Tên"
          value={HoVaTen}
          onChange={e => setHoVaTen(e.target.value)}
          required />
      <a></a>
        </div>
      
      <div>
      <label htmlFor="defaultFormLoginEmailEx" class="grey-text">
        
        <b>Số điện thoại:</b>
      </label>
      </div><div>
      <input
          name="userName"
          type="text"
          pattern="[0-9]*"
          placeholder="Số điện thoại"
          maxLength="10"
          value={phoneNumber}
          onChange={e => setphoneNumber(e.target.value)}
          required />
      <a></a>
      </div>
      
      <div>
        <label htmlFor="defaultFormLoginEmailEx" class="grey-text">
        
        <b>Địa Chỉ:</b>
      </label>
      </div>

      <div>
      <input
          name="userName"
          type="text"
          value={address  }
          placeholder="Địa chỉ"
          onChange={e => setAddress(e.target.value)}
          required />
      </div>
     

     

      <div>
        <label></label>
      </div>
      <div>
      <input
          name="acceptedTerms"
          type="text"
          placeholder="Yêu cầu khác (không bắt buộc)"
          value={request}
          style={{width: "370px"}}
          onChange={e => setRequest(e.target.value)}
          required />
      </div>
      
        
      
      <div class=" mt-4">
      <Button type= "submit" class='submitButton' style={{width:"400px",heigh:"80px"}}  value="Submit" onClick={()=>{
        handleSubmit();
        }}>
            Đặt Hàng
            
          </Button>
      </div>
      </div>
      </div>
    </form>
    
  )
}
const Form = styled.div`

`