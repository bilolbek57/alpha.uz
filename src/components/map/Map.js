import React from 'react'
import "./Map.css"
import { PRODUCTS } from "../../static"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_LIKE } from "../../context/action/actionType"
import { Link } from 'react-router-dom'
function Products() {
  const dispatch = useDispatch()
  const like = useSelector(s => s.heart)
  const addHaert = (item) => {
    let index = like.findIndex(i => i.id === item.id)
    if (index > -1) {
      return
    }
    dispatch({ type: ADD_TO_LIKE, payload: item })
  }

  return (
    <div className='map'>
      {
        PRODUCTS?.map((item, inx) => <div key={inx} className="map__card">

          <div onClick={() => addHaert(item)} className='map__heart' >
            {
              like?.some(i => i.id === item.id) ? <AiFillHeart/> : <AiOutlineHeart />
            }
         
          </div>
          <Link to={`/product/${item.id}`}><img className='map__img' src={item?.urls[0]} alt="" /></Link>
          <p className='map__title'>{item?.title}</p>
          <div className="map__top">
            <p>{item?.price}</p>
            <button>{Math.floor(item?.price / 12)} so'm</button>
          </div>
          <button className='pro__cart'>Add to cart</button>
        </div>)
      }
    </div>
  )
}

export default Products