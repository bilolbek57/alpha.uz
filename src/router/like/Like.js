import React from 'react'
import "./Like.css"
import Empty from "../../components/empty/Empty"
import img from "../../assets/2.png"
import { useSelector } from 'react-redux'


function Like() {
  const like = useSelector(s=> s.heart)
  return (
    <div className='container like'>
      {
        like.length === 0 ?  <Empty url={img} text="Sevimli mahsulotlar yo'q"/> 
        : 
    <div className='likes'>
      {
        like?.map((item, inx)=><div key={inx} className="like__card">
        <img className='like__imgs' src={item?.urls[0]} alt="" />
        <p>{item?.title}</p>
      <div>
        
      <del className='two'>
        {item?.price + 200} so'm</del>
        <br />
        <p>{item?.price} so'm</p>
      </div>
      
        <button></button>
      <div className='like__btn'>
        <button className='like__btn2'>savatchaga qoshish</button>
        <button className='like__btn3'>O'chirish</button>
      </div>
      </div>)
      }
    </div>
      }
    </div>

  )
}

export default Like