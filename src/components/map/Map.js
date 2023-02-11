import React from 'react'
import "./Map.css"
import { PRODUCTS } from "../../static"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_LIKE, REMOVE_LIKE} from "../../context/action/actionType"
import { Link } from 'react-router-dom'
function Products() {
  const dispatch = useDispatch()
  const like = useSelector(s => s.heart)
  const cart = useSelector(s=>s.cart)
  console.log(cart);
  const addHaert = (item) => {
    let index = like.findIndex(i => i.id === item.id)
    if (index > -1) {
      return
    }
    dispatch({ type: ADD_TO_LIKE, payload: item })
  }
const addToCart = (item)=> {
  console.log(item);
}
  return (
    <div className='map'>
      {
        PRODUCTS?.map((item, inx) => <div key={inx} className="map__card">

          <div  className='map__heart' >
            {
              like?.some(i => i.id === item.id) ? 
              <AiFillHeart style={{color: "red"}} onClick={()=> dispatch({type:REMOVE_LIKE, payload: item.id})}/> : 
              <AiOutlineHeart onClick={() => addHaert(item)}/>
            }
          </div>
          <Link to={`/product/${item.id}`}><img className='map__img' src={item?.urls[0]} alt="" /></Link>
          <p className='map__title'>{item?.title}</p>
          <div className="map__top">
            <p>{item?.price}</p>
            <button>{Math.floor(item?.price / 12)} so'm</button>
          </div>
          <button onClick={()=> addToCart(item)} className='pro__cart'>Savatchaga qoshish</button>
        </div>)
      }
    </div>
  )
}

export default Products