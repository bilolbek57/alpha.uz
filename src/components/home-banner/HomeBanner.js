import React, { useState, useEffect } from 'react'
import "./HomeBanner.css"
import { db } from "../../server"
import { collection, getDocs } from 'firebase/firestore'
function HomeBanner() {
    const [nameImg, setNameImg] = useState([])
    const HomeBannerColRef = collection(db, "homebanner")

    useEffect(() => {
        const getHomeBanner = async () => {
            const homebannner = await getDocs(HomeBannerColRef)
            setNameImg(homebannner.docs.map((po) => ({ ...po.data(), id: po.id })))
        }
        getHomeBanner()
    }, [])
    console.log(nameImg);
    return (
        <div className=' homeBanner'>
            {
                nameImg?.map((item, inx) => <div key={inx} className="homeb__card">
                    <img src={item?.urls[0]} alt="" />
                    <p>{item?.title}</p>
                </div>)
            }
        </div>
    )
}

export default HomeBanner