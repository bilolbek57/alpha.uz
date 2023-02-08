import React from 'react'
import "./Empty.css"
function Empty(p) {
  return (
    <div className='empty'>
      <img src={p?.url} alt="" />
        <h1>{p?.text}</h1>
    </div>
  )
}

export default Empty