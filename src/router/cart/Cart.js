import React from 'react'
import "./Cart.css"
import Empty from '../../components/empty/Empty'
import photo from "../../assets/3.png"
import { useSelector } from 'react-redux'
import CartItem from '../../components/cart-item/CartItem'
function Cart() {
  const cart = useSelector(s => s.cart)
  console.log(cart);
  return (
    <div className='container cart'>
      {
        cart.length === 0 ? <Empty url={photo} text="Savatchangiz bo'sh" />
          :
          <CartItem karzinka={cart}/>
      }
    </div>
  )
}

export default Cart