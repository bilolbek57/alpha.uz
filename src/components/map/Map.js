import React, { useState, useEffect } from 'react'
import "./Map.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_LIKE, REMOVE_LIKE, ADD_TO_CART } from "../../context/action/actionType"
import { Link } from 'react-router-dom'
import { db } from "../../server"
import { collection, getDocs } from "firebase/firestore"
function Products() {
  const dispatch = useDispatch()
  const like = useSelector(s => s.heart)
  const cart = useSelector(s => s.cart)
  const [data, setData] = useState([])
  const productsColRef = collection(db, "products")

  useEffect(() => {
    const getProduct = async () => {
      const product = await getDocs(productsColRef)
      setData(product.docs.map((pro)=> ({...pro.data(), id:pro.id }) ))

    }
    getProduct()
  }, [])




  console.log(cart);
  const addHaert = (item) => {
    let index = like.findIndex(i => i.id === item.id)
    if (index > -1) {
      return
    }
    dispatch({ type: ADD_TO_LIKE, payload: item })
  }
  const addToCart = (item) => {
    let index = cart.findIndex(i => i.id === item.id)
    if (index < 0) {
      return dispatch({ type: ADD_TO_CART, payload: [...cart, { ...item, qty: 1 }] })
    }
    let newCart = cart.map((pro, inx) => inx === index ? { ...pro, qty: pro.qty + 1 } : pro)
    dispatch({ type: ADD_TO_CART, payload: newCart })
  }

  return (
    <div className='map'>
      {
        data?.map((item, inx) => <div key={inx} className="map__card">

          <div className='map__heart' >
            {
              like?.some(i => i.id === item.id) ?
                <AiFillHeart style={{ color: "red" }} onClick={() => dispatch({ type: REMOVE_LIKE, payload: item.id })} /> :
                <AiOutlineHeart onClick={() => addHaert(item)} />
            }
          </div>
          <Link to={`/product/${item.id}`}><img className='map__img' src={item?.urls[0]} alt="" /></Link>
          <p className='map__title'>{item?.title}</p>
          <div className="map__top">
            <p>{item?.price}</p>
            <button>{Math.floor(item?.price / 12)} so'm</button>
          </div>
          <button onClick={() => addToCart(item)} className='pro__cart'>Savatchaga qoshish</button>
        </div>)
      }
    </div>
  )
}

export default Products