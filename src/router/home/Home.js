import React from 'react'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../components/home-banner/HomeBanner'
import HomeMain from '../../components/home-main/HomeMain'
import "./Home.css"
import Catigory from '../../components/catigory/Catigory'
import Map from "../../components/map/Map"
import Swiper from 'swiper'
function Home() {
  return (
    <div className='container'>
      <div className='home'>
        <Banner/>
        {/* <Swiper/> */}
        <Map/>
        <Catigory/>
        <HomeBanner/>
        <HomeMain/>
      </div>
    </div>
  )
}

export default Home