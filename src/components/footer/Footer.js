import React from 'react'
import "./Footer.css"
import { AiFillApple } from "react-icons/ai"
import { FaGooglePlay } from "react-icons/fa"
import { IoMdAppstore } from "react-icons/io"
import { CgMail } from "react-icons/cg"
import img from "../../assets/1.webp"
// import { CiLocationOn } from "react-icons/ci"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import img1 from "../../assets/foo1.jpg"
import img2 from "../../assets/foo2.jpg"
import img3 from "../../assets/foo3.jpg"
import img4 from "../../assets/foo4.jpg"
import img5 from "../../assets/foo5.jpg"
import img6 from "../../assets/foo6.jpg"
import { useLocation } from 'react-router-dom'
function Footer() {

  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  } 

  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__left">
              <h2>Our mobile application is available in AppGallery, App store and Google play</h2>
              <div className="footer_btns">
                <button className='footer__btn'><AiFillApple className='btn__app' />App Story</button>
                <button className='footer__btn'><FaGooglePlay className='btn__play' />Google Play</button>
                <button className='footer__btn'><IoMdAppstore className='btn__gallery' /> AppGallery</button>
              </div>
            </div>
            <div className="footer__right">
              <img className='footer__img' src={img} alt="" />
            </div>
          </div>
          <div className='br'></div>
          <div className="footer__middle">
            <div className="footer__right2">
              <div className="footer__alpha">
                <h1 className='nav__logo'>alpha</h1>
                <p>Phone support</p>
                <p>+998 (93) 815 58 57</p>
                <p>Kozitarnov, Tashkent</p>
                <p><CgMail />info@olcha.uz</p>
              </div>
              <div className="footer__information">
                <h1 className='nav__logo'>information</h1>
                <p>About company</p>
                <p>Jobs</p>
                <p>Return and exchange of goods</p>
                <p>Installment terms</p>
                <p>Help</p>
                <p>Delivery</p>
              </div>
              <div className="footer__eco">
                <p>Eco friendly</p>
                <p>Bonuses and Promotions</p>
                <p>Payment and delivery</p>
                <p>Sell on olcha</p>
                <p>Service centres</p>
              </div>
            </div>
            <div className="footer__left2">
              <div className="footer__top-">
                <img src={img2} alt="" />
                <img src={img1} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="footer__top2">
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="footer__bottom">
            <div className="thee">
              <p>© 2017-2022. LLC "Olcha store"</p>
              <p>Public offer</p>
              <p>Privacy Policy</p>
            </div>
            <div className="beten">
              <BsFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer