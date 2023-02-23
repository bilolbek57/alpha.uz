import React from 'react'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../components/home-banner/HomeBanner'
import HomeMain from '../../components/home-main/HomeMain'
import "./Home.css"
import Map from "../../components/map/Map"
import Category from "../../components/category/Category"
import Swiper from 'swiper'
function Home() {
  return (
    <div className='container'>
      <div className='home'>
        <Banner/>
        <Category/>
        {/* <Swiper/>  */}
        <Map/>
        <HomeBanner/>
        <HomeMain/>
      </div>
    </div>
  )
}

export default Home