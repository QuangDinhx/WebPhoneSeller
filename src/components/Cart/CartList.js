import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {

  const { cart } = value;

  return (
    <div class="card">
              <div class="card-body">
    <div className="container-fluid">
    
      {cart.map(item => {
        return (<div>
        <CartItem key={item.id} item={item} value={value} />
        <hr />
              </div>
          )
      })}
    </div>
    </div>
    </div>
  )
}

