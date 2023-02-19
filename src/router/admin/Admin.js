import React from 'react'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import MangeProduct from './mange-product/MangeProduct'
import { Routes, Route, NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {ImProfile} from "react-icons/im"
import {BsShareFill} from "react-icons/bs"
import {FaBlog} from "react-icons/fa"
import {RiContactsBook2Line }from "react-icons/ri"
import {FaMapPin} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {FcManager} from "react-icons/fc"
import {IoIosCreate} from "react-icons/io"
import CreateHomeBanner from './create-home-banner/CreateHomeBanner'
import rasm from "../../assets/alpha.jpg"
function Admin() {  
  return (
    <div className='admin'>
      <div className="admin__sidebar">
          <h2 style={{color: "#fff"}}>Admin Panel</h2>
        <img className='alpha__img' src={rasm} alt="" />
        ,<NavLink to={"/"}><h1 className='nav__logo' style={{color:"red"}}>alpha</h1></NavLink>
        <ul className="admin__collection">
          <li className="admin__item"><NavLink to={"/"}><AiFillHome/>Home</NavLink></li>
          <li className="admin__item"><NavLink to={"create-product"}><IoIosCreate/>Create Product</NavLink></li>
          <li className="admin__item"><NavLink to={"create-home-banner"}><IoIosCreate/>Create Home Banner</NavLink></li>
          <li className="admin__item"><NavLink to={"manage-product"}><FcManager/>Manage Product</NavLink></li>
          <li className="admin__item"><CgProfile/>Profile</li>
          <li className="admin__item"><ImProfile/>About</li>
        </ul>
        <div className="admin__icon">
        <AiFillFacebook/>
        <AiFillTwitterSquare/>
        <AiFillInstagram/>
        </div>
      </div>
      <div className="admin__content">
      <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manage-product' element={<MangeProduct/>}/>
          <Route path='/create-home-banner' element={<CreateHomeBanner/>}/>
        </Routes>
      </div>
    
    </div>
  )
}

export default Admin