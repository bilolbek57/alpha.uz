import React, { useState, useEffect } from 'react'
import "./HomeBanner.css"
import { db } from "../../server"
import { collection, getDocs } from 'firebase/firestore'
function HomeBanner() {
    const [nameImg, setNameImg] = useState()
    const HomeBannerColRef = collection(db, "homebanner")

    useEffect(() => {
        const getHomeBanner = async () => {
            const homebannner = await getDocs(HomeBannerColRef)
            setNameImg(homebannner.docs.map((pro) => ({ ...pro.nameImg(), id: pro.id })))
        }
        getHomeBanner()
    }, [])
    return (
        <div className=' homeBanner'>
            {
                nameImg?.map((item, inx) => <div key={inx} className="homeb__card">
                    <img src={item?.img} alt="" />
                    <p>{item?.text}</p>
                </div>)
            }
        </div>
    )
}

export default HomeBanner