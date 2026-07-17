import React from 'react'
import "./Placeorder.css"
import { StoreContext } from '../../context/Storecontext'
import { useContext } from 'react'

const Placeorder = () => {
   const{getTotalCartAmount} =useContext(StoreContext)
  return (
   <form action="" className="place-order">
    <div className="place-order-left">
    <p className='title'>Delivery information</p>
    <div className="multi-fields">
      <input type="text" placeholder='First Name' />
      <input type="text" placeholder='Last Name' />
    </div>
    <input type="email" placeholder='Emial address'  />
    <input type="text" placeholder='street'/>
    <div className="multi-fields">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
    </div>
    <div className="multi-fields">
      <input type="text" placeholder='Zip code' />
      <input type="text" placeholder='Country' />
    </div>
    <input type="text" placeholder='phone' />
    </div>
    <div className="place-order-right">
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
          <button >Proceed to Payment</button>
        </div>
    </div>
   </form>
  )
}

export default Placeorder