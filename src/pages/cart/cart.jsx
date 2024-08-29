import './cart.css';
import { StoreContext } from '../../context/storeContext';
import { food_list } from '../../assets/assets';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart , getTotalCartAmount } = useContext(StoreContext);

  // Filter food_list to get only the items that are in the cart
  const itemsInCart = food_list.filter(item => cartItems[item._id]);

  const navigate = useNavigate();

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
        {itemsInCart.map((item, index) => {
          return (
            <div className='cart-items-title cart-items-item' key={index} id={item.id}>
              <img src={item.image} alt="" />
              <p> {item.name} </p>
              <p> ${item.price} </p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
            </div>
          );
        })}
      </div>
      <div className="cart-bottom">
          <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Total</p>
                    <p>${getTotalCartAmount()+2}</p>
                  </div>
              </div>
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className='cart-promocode-input'>
                  <input type="text" placeholder='promo code' />
                  <button>submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );

}

export default Cart;
