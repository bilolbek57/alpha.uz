import React from 'react'
import "./Subheader.css"
function Subheader() {
  return (
    <div className='sub__header'>
        <div className="container">
          <div className="sub__container">
            <div>
              <button className='btn'>0% mudatli tolov</button>
              <button className='btn'>Chegirmalar</button>
              <span>Sayt xaritasi</span>
            </div>
            <div>
              <a href="tel:+998938155857">+998 93 815 58 57</a>
              <button className='btn'>alphadas sotib oling</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Subheader