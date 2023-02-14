import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';
import "./SingleRouter.css"
import {BsFillCartPlusFill} from "react-icons/bs"
import { ADD_TO_CART, ADD_TO_LIKE } from '../../context/action/actionType';
import { useDispatch, useSelector } from 'react-redux';
function SingleRoute() {
    const dispatch = useDispatch()
  const like = useSelector(s => s.heart)
  const cart = useSelector(s => s.cart)
    const params = useParams()
    const oneItem = PRODUCTS?.find(el => el.id === params.id)
    console.log(oneItem);
    
    if(!oneItem){
        return <div> <h2>Malumot topilmadi</h2> </div>        
    }
    const addToCart = (item) => {
        let index = cart.findIndex(i => i.id === item.id)
        if (index < 0) {
          return dispatch({ type: ADD_TO_CART, payload: [...cart, { ...item, qty: 1 }] })
        }
        let newCart = cart.map((pro, inx) => inx === index ? { ...pro, qty: pro.qty + 1 } : pro)
        dispatch({ type: ADD_TO_CART, payload: newCart })
      }
      const addHaert = (item) => {
        let index = like.findIndex(i => i.id === item.id)
        if (index > -1) {
          return
        }
        dispatch({ type: ADD_TO_LIKE, payload: item })
      }
  return (
    <div className='container'>
        <h1 className='sing__h1'>{oneItem?.title}</h1>
        <div className="single__img">
            <div className="sing__tepa">
        <img className='sing__imgs' src={oneItem?.urls[0]} alt="" />
        <div className="sing__dis">
        {
            oneItem?.urls?.map((a, inx) =><div key={inx} className="sing__rasm">
            <img className='sing__rasm1' src={a} alt="" />
        </div>)
        }
        </div>
            </div>
        <div className="single__text">
            <p>{oneItem?.xotira}</p>
            <div className="s">
            {
                oneItem?.xotiraxajmi?.map((i, inx)=>  <button className='sing__btn' key={inx}>{i}</button>)
            }
            <p className='sing'>Rangi</p>
            {
                oneItem?.ranglar?.map((i, inx)=>  <button className='sing__btn' key={inx}>{i}</button>)
            }
            </div>
            {
                oneItem?.desc?.map((a, inx)=> <p key={inx}>{a}</p>)
            }
        </div>
        <div className="sing__left">
            <h2>{oneItem?.price} so'm</h2>
            <p>Yetkazib berish to'g'risida ma'lumot:</p>
            <p>Standart yetkazib berish Manzilga qarab 2 soatdan 2 ish kunigacha yetkazib beriladi</p>
            <button onClick={() => addToCart(oneItem)} className='sing__bnt2'><BsFillCartPlusFill/>Savatchga qoshish</button>
            <button className='sing__like' onClick={() => addHaert(oneItem)}>Sevimlilarga qoshish</button>
            <div>
            <button className='sing__bnt3'>Bir klikda sotib olish</button>
            </div>
        </div>
        </div>
   
    </div>
  )
}

export default SingleRoute
