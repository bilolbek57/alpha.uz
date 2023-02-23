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
import { HiOutlineChevronDown } from "react-icons/hi"
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LOG_IN } from '../../context/action/actionType'
function Navbar() {
  const [show, setShow] = useState(false)
  const cart = useSelector(s => s.cart)
  const { } = useLocation()
  const [username, setUsermname] = useState('')
  const [password, setPassword] = useState("")
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register = ()=>{
    if(username === "alpha" && password === "2009"){
      dispatch({type: LOG_IN, payload: (username, password)})
      navigate("/admin")
    }else{
      console.log("error");
    }
  }

  
  document.body.style.overflow = show ? "hidden" : "auto"
  if (pathname.includes("admin")) {
    return <></>
  }


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
                <span className='nav__circle'>{cart?.length}</span>
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
                <input value={username} onChange={e => setUsermname(e.target.value)} type="text" placeholder='username' />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>
            <button onClick={register}>Login</button>
          </div>
        </> :
          <></> 
      }
      <></>
    </>
  )
}

export default Navbar