import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import {Service} from '../../Service/api'
import { ProductConsumer } from '../../context';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default function AddProduct() {
    const [show, setShow] = React.useState(false);
    const [id,setId] = useState('');
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [price,setPrice] = useState('');
    const [company,setCompany] = useState('');
    const [imfo,setImfo] = useState('');
    const [OPsys,setOPsys] = useState('');
    const [CamBack,setCamBack] = useState('');
    const [CamFront,setCamFront] = useState('');
    const [CPU,setCPU] = useState('');
    const [RAM,setRAM] = useState('');
    const [Capacity,setCapacity] = useState('');
    const [MemorySize,setMemorySize] = useState('');

    useEffect(()=>{
        Service.getProducts().then((res)=>{
            const data = res.data.data;
            setId(data.length);
        })
    })

    const handleSubmit = (event) => {


    
    }

  return (
    <ProductConsumer>
    {(value) => {
      const {AddProOpen,closeAddPro} = value;
      setShow(AddProOpen);
      
      
      if(!show){
        
        return null;
      }else{
        return (
          <Modal
          show={AddProOpen}
          onHide={closeAddPro}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBContainer>
          <MDBRow>
          <MDBCol md="6">
          
      <div class="container">
        <div class = "d-block">
          
        

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Tên Sản Phẩm:
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Link ảnh:
                </label>
                <input
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Giá Sản Phẩm:
                </label>
                <input
                    type="text"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Tên Công ty:
                </label>
                <input
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Thông tin:
                </label>
                <textarea
                    type="text"
                    value={imfo}
                    cols="40" 
                    rows="5"
                    style={{width: "370px"}}
                    onChange={e => setImfo(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Hệ Điều hành:
                </label>
                <input
                    type="text"
                    value={OPsys}
                    onChange={e => setOPsys(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Camera Trước:
                </label>
                <input
                    type="text"
                    value={CamFront}
                    onChange={e => setCamFront(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Camera Sau:
                </label>
                <input
                    type="text"
                    value={CamBack}
                    onChange={e => setCamBack(e.target.value)}
                    required />
                <a></a>
        </div>
        
        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Chip CPU:
                </label>
                <input
                    type="text"
                    value={CPU}
                    onChange={e => setCPU(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Ram:
                </label>
                <input
                    type="text"
                    value={RAM}
                    onChange={e => setRAM(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Dung lượng pin:
                </label>
                <input
                    type="text"
                    value={Capacity}
                    onChange={e => setCapacity(e.target.value)}
                    required />
                <a></a>
        </div>

        <div>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Dung lượng bộ nhớ:
                </label>
                <input
                    type="text"
                    value={MemorySize}
                    onChange={e => setMemorySize(e.target.value)}
                    required />
                <a></a>
        </div>
        
      


          

        </div>
      
      </div>
      
    
    </MDBCol>
    
  </MDBRow>
</MDBContainer>
    </Modal.Body>
        <Modal.Footer>
        <Button type= "submit" variant="primary" onClick={()=>{
          if(title !== '' && image !=='' && price !== '' && company !== '' && imfo !=='' && OPsys !== '' && CamBack !=='' && CamFront !== '' && Capacity !=='' && MemorySize !== '' && CPU !== '' && RAM !== ''){
            const data = {
              id:id,
              title:title,
              image:image,
              price:price,
              company:company,
              imfo:imfo,
              inCart:false,
              count:0,
              total:0,
              OPsys:OPsys,
              CamBack:CamBack,
              CamFront:CamFront,
              CPU:CPU,
              RAM:RAM,
              Capacity:Capacity,
              MemorySize:MemorySize,
              active:true
            }
            
            Service.addProduct(data).then((res)=>{
              if(res.data.data){
                console.log(true);
              }else{
                console.log(false);
              }
              setShow(false)
              closeAddPro()
              
              
            }) 
           
           }else{
             
             window.location ="#"
            alert('Không được bỏ trống');
             
            
             
           }
           if(!show){
            closeAddPro()
          }
          
          
          
        }}>
            Submit
          </Button>
      
          <Button variant="secondary" onClick={()=>closeAddPro()}>
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
