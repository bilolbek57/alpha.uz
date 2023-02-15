import React from 'react'
import "./CartItem.css"
import { ADD_TO_CART, REMOVE_CART, } from '../../context/action/actionType'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function CartItem({ karzinka }) {
  const dispatch = useDispatch()
  const addToCart = (item) => {
    let index = karzinka.findIndex(i => i.id === item.id)
    if (index < 0) {
      return dispatch({ type: ADD_TO_CART, payload: [...karzinka, { ...item, qty: 1 }] })
    }
    let newCart = karzinka.map((pro, inx) => inx === index ? { ...pro, qty: pro.qty + 1 } : pro)
    dispatch({ type: ADD_TO_CART, payload: newCart })
  }

  const removeCart = (item) => {
    let index = karzinka.findIndex(i => i.id === item.id)
    if (index < 0) {
      return dispatch({ type: ADD_TO_CART, payload: [...karzinka, { ...item, qty: 1 }] })
    }
    let newCart = karzinka.map((pro, inx) => inx === index ? { ...pro, qty: pro.qty - 1 } : pro)
    dispatch({ type: ADD_TO_CART, payload: newCart })
  }


  return (
    <div>
      <div style={{textAlign: "center"}}>
      <h2>Jami narx: {karzinka.reduce((a, b) => a + (b.price * b.qty), 0).brm()}</h2>
      </div>
      <div className=" cartItem">
        {
          karzinka?.map((item, inx) => <div key={inx} className="cart__item">
            
            <img src={item?.urls[0]} width={100} alt="" />
            <Link to={`/product/${item.id}`}><p>{item?.title}</p></Link>
            <p>{item?.price.brm()} so'm</p>
            <div className="qty">
            <button className='minus' disabled={item?.qty <= 1} onClick={() => removeCart(item)}>-</button>
            <span>{item?.qty}</span>
            <button className='plas' onClick={() => addToCart(item)}>+</button>
            </div>
            <button className='delet' onClick={() => dispatch({ type: REMOVE_CART, payload: item.id })} >delete</button>
          </div>)
        }
      </div>
    </div>
  )
}

export default CartItem