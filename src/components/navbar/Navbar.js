import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { BiBarChart } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"
import { BsPerson, BsPower } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { FiX } from "react-icons/fi"
import {HiOutlineChevronDown} from "react-icons/hi"
function Navbar() {
  const [show, setShow] = useState(false)
  document.body.style.overflow= show ? "hidden" : "auto"
  return (
    <>
      <div className="nav__container">
        <div className='container'>
          <div className='navbar'>
            <Link to={"/"}
              // </div>contentEditable={true}
              className='nav__logo'>alpha</Link>
            <button className='btn nav__katalog'>
              <AiOutlineMenu />
              <span>Katalog</span>
            </button>
            <div className="nav__search">
              <input type="text" placeholder='Qidirish...' />
              <button><AiOutlineSearch /></button>
            </div>
            <div className="nav__items">
              <Link to={"/taqoslash"} className="nav__item">
                <BiBarChart />
                <p>Taqoslash</p>
              </Link>
              <Link to={"/like"} className="nav__item">
                <AiOutlineHeart />
                <p>Sevimlilar</p>
              </Link>
              <Link to={"/cart"} className="nav__item">
                <SlBasket />
                <p>Savatcha</p>
              </Link>
              <div onClick={() => setShow(true)} className="nav__item">
                <BsPerson />
                <p>Kirish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        show ? <>
          <div onClick={() => setShow(false)} className="nav__shadow"></div>
          <div className="nav__login">
            <FiX onClick={() => setShow(false)} className='nav__close' />
            <h2>Kirish yoki profil yaratish</h2>
            <p>phone raqami</p>
            <div className="raqam">
            <p>
              +998<HiOutlineChevronDown/>
            <input type="text" />
            </p>
            </div>
        <p className='s'>Phone raqami maidoni tuldirilish kerak</p>
        <button className='nav__btn'>Confirm</button>
      </div>
        </> :
          <></>
      }
      <></>

    </>
  )
}

export default Navbar