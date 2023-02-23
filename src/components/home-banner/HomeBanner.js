import React, { useState, useEffect } from 'react'
import "./HomeBanner.css"
import { db } from "../../server"
import { collection, getDocs } from 'firebase/firestore'
import { deleteDoc, doc } from 'firebase/firestore'

function HomeBanner({admin}) {
    const [nameImg, setNameImg] = useState([])
    const HomeBannerColRef = collection(db, "homebanner")

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const getHomeBanner = async () => {
            const homebannner = await getDocs(HomeBannerColRef)
            setNameImg(homebannner.docs.map((po) => ({ ...po.data(), id: po.id })))
        }
        getHomeBanner()
    }, [])
    console.log(nameImg);


    const delHbanner = async(id)=>{
        await deleteDoc(doc(db, "homebanner", id))
        .then(res=> {
          console.log(res)
          setRefresh(!refresh)  
        })
        .catch(res=> console.log(res))
       }
    return (
        <div className=' homeBanner'>
            {
                nameImg?.map((item, inx) => <div key={inx} className="homeb__card">
                    <img src={item?.urls[0]} alt="" />
                    <p>{item?.name}</p>
                    {
                        admin ?
                        <button onClick={()=> delHbanner(item.id)}>delete</button>
                        :
                        <></>
                    }
                </div>)
            }
        </div>
    )
}

export default HomeBanner