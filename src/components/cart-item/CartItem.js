import React, { useState } from 'react'
import "./CartItem.css"
import { ADD_TO_CART, REMOVE_CART, } from '../../context/action/actionType'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BOT_TOKEN = "6209208490:AAF5B9mqgggVQPNHR60pjNPEPSVBTeqFGO4"
const CHAT_ID = "-1001516817949"

// chat id olish uchun
// https://api.telegram.org/bot6209208490:AAF5B9mqgggVQPNHR60pjNPEPSVBTeqFGO4/getUpdates

// xabarni chatga yuborish uchun  
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html  

function CartItem({ karzinka }) {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [adress, setAdress] = useState("")
  const [desc, setDesc] = useState("")
  const dispatch = useDispatch("")
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
    let msg = ""
    msg += `Ism:<b>${name}</b> %0A`// %0A = <br/>
    msg += `Tel:${tel}%0A`
    msg += `Address:${adress}%0A`
    msg += `Ta'rif:${desc}%0A`
    msg += `%0A<b>Buyurtmalar</b>%0A%0A`
    karzinka.forEach((order) => {
      msg += `Nomi: ${order.title}%0A`
      msg += `Soni: ${order.qty}%0A`
      msg += `Narxi: ${order.price}%0A`
    })
    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=html`
    let api = new XMLHttpRequest();
    api.open("GET", API_URL, true);
    api.send();
    const deletInput = () => {
      setName("")
      setTel("")
      setAdress("")
      setDesc("")
    }
    deletInput()
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginTop: "50px" }}>Jami narx: {karzinka.reduce((a, b) => a + (b.price * b.qty), 0).brm()}</h2>
        <div className="inputs">
          <input className='cart__input' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='name' />
          <input className='cart__input' value={tel} onChange={e => setTel(e.target.value)} type="number" placeholder='tel' />
          <input className='cart__input' value={adress} onChange={e => setAdress(e.target.value)} type="text" placeholder='address' />
          <textarea className='cart__texta' value={desc} onChange={e => setDesc(e.target.value)} name="" placeholder='desc' id="" cols="30" rows="10"></textarea>
          <button onClick={order}>Buyurtma berish</button>
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