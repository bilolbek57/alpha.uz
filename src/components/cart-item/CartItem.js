import React, { useState } from 'react'
import "./CartItem.css"
import { ADD_TO_CART, REMOVE_CART, } from '../../context/action/actionType'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function CartItem({ karzinka }) {
  const [name, setName] = useState()
  const [tel, setTel] = useState()
  const [adress, setAdress] = useState()
  const [desc, setDesc] = useState()
  const dispatch = useDispatch()
  const cart = useSelector(s => s.cart)

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
  const order = () => {
    console.log({ name, tel, adress, desc, cart });
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{marginTop: "50px"}}>Jami narx: {karzinka.reduce((a, b) => a + (b.price * b.qty), 0).brm()}</h2>
        <div className="inputs">
        <input className='cart__input' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='name' />
        <input className='cart__input' value={tel} onChange={e => setTel(e.target.value)} type="text" placeholder='tel' />
        <input className='cart__input' value={adress} onChange={e => setAdress(e.target.value)} type="text" placeholder='addres' />
        <textarea className='cart__texta' value={desc} onChange={e => setDesc(e.target.value)} name="" placeholder='desc' id="" cols="30" rows="10"></textarea>
        <button  onClick={order}>Buyurtma berish</button>
        </div>
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