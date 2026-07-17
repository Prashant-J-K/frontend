import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const{cartItem,food_list,removeFromCart,getTotalCartAmount} =useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-itmes">
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
      {food_list.map((item,index)=>{
      if(cartItem[item._id>0]){
       return(
        <div className='cart-items-title cart-items-item'>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{cartItem[item._id]}</p>
          <p>{item.price*cartItem[item._id]}</p>
          <p>x</p>
        </div>
       )
      }
      })}
       {food_list.map((item) => {
  if (cartItem[item._id] > 0) {
    return (
      <div>
      <div
        key={item._id}
        className="cart-items-title cart-items-item"
      >
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{cartItem[item._id]}</p>
        <p>${item.price * cartItem[item._id]}</p>
        <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
      </div>
      <hr />
      </div>
    );
  }

})}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/placeorder")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
          <p>if you have promocode, Enter here</p>
          <div className="cart-promocode-input">
          <input type="text"placeholder='promo code' />
          <button>Submit</button>
          </div>
          </div>
        </div>
      </div>

      </div>
  )
}

export default Cart