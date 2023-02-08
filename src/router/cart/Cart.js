import React from 'react'
import "./Cart.css"
import Empty from '../../components/empty/Empty'
import photo from "../../assets/3.png"
function Cart() {
  return (
    <div className='container cart'>
        <Empty url={photo} text="Savatchangiz bo'sh"/>
    </div>
  )
}

export default Cart