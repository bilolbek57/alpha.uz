import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';
import "./SingleRouter.css"
import { BsFillCartPlusFill } from "react-icons/bs"
import { ADD_TO_CART, ADD_TO_LIKE } from '../../context/action/actionType';
import { useDispatch, useSelector } from 'react-redux';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../server';



function SingleRoute() {
  const params = useParams()

  const [data, setData] = useState([])
  const productsColRef = collection(db, "products")

  useEffect(() => {
    const getProduct = async () => {
      const product = await getDocs(productsColRef)
      setData(product.docs.map((pro) => ({ ...pro.data(), id: pro.id })))

    }
    getProduct()
  }, [])





  const dispatch = useDispatch()
  const like = useSelector(s => s.heart)
  const cart = useSelector(s => s.cart)
  const oneItem = data?.find(el => el.id === params.id)



  if (!oneItem) {
    return <div className='placeholder container'>
      <div className='placeholder__img'></div>
      <div className='placeholder__text'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
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
              oneItem?.urls?.map((a, inx) => <div key={inx} className="sing__rasm">
                <img className='sing__rasm1' src={a} alt="" />
              </div>)
            }
          </div>
        </div>
        <div className="single__text">
          <p>{oneItem?.xotira}</p>
          <p>{oneItem?.desc}</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestias autem at laudantium officia, itaque illum, magnam architecto consectetur cum, fugit obcaecati eveniet illo laboriosam iure. A nobis explicabo porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi eaque molestias odit dicta magni.</p>
        </div>
        <div className="sing__left">
          <h2>{oneItem?.price} so'm</h2>
          <p>Yetkazib berish to'g'risida ma'lumot:</p>
          <p>Standart yetkazib berish Manzilga qarab 2 soatdan 2 ish kunigacha yetkazib beriladi</p>
          <button onClick={() => addToCart(oneItem)} className='sing__bnt2'><BsFillCartPlusFill />Savatchga qoshish</button>
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
