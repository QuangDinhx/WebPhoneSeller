import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CusInf from './CustomInf'

export default function CartTotals({ value, history }) {
  const [AnhorChi, setAnhorChi] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [HoVaTen, setHoVaTen] = React.useState("");
  
  const [password, setPassword] = React.useState("");
  const [Repassword, setRePassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div class="d-flex justify-content-center" style={{boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}>
      <div class="card" style={{ width: '50rem'}}>
              <div class="card-body" >
      <div className="container">

          <div className="text-left">
          <CusInf/>
          </div>

        <Total>
        <div className="row" style={{position:"relative",top:"300px"}}>
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" 
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                subtotal:
              </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">
                tax:
              </span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">
                total:
              </span>
              <strong>${cartTotal}</strong>
            </h5>
            {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/> */}
          </div>
        </div>
        </Total>


      </div>
      
      </div>
      </div>


      
      </div>
      
    </React.Fragment>
  )
}
const Total = styled.form`
div{position:relative;bottom:650px}
`
