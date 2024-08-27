import React, { useState } from 'react'
import './cart.css'
import { StoreContext } from '../../context/storeContext'
import { food_list } from '../../assets/assets'

const Cart = () => {


const {cartItems} = useState(StoreContext);

console.log(cartItems);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
          {food_list.map((item,index) => {
              if(cartItems > 0)
              {
                  return (
                      <div className='cart-items-title cart-items-item' key={index} id={item.id}>
                        <p>{item.name}</p>
                      </div>
                  )
              }
          })}
      </div>
    </div>
  )
}

export default Cart
