import React from 'react'
import "./Map.css"
import {PRODUCTS} from "../../static"
import {AiOutlineHeart} from "react-icons/ai"    
import { useDispatch } from 'react-redux'
import { ADD_TO_LIKE } from "../../context/action/actionType"
import { Link } from 'react-router-dom'
function Products() {
  const dispatch = useDispatch()
    return (
        <div className='map'>
          {
            PRODUCTS?.map((item, inx)=>    <div key={inx} className="map__card">
                <AiOutlineHeart onClick={()=> dispatch({type:ADD_TO_LIKE,payload: item})} className='map__heart'/>
          <Link to={`/product/${item.id}`}><img className='map__img' src={item?.urls[0]} alt="" /></Link>  
            <p>{item?.title}</p>
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