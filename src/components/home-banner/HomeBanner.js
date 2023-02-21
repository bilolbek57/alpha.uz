import React, { useState, useEffect } from 'react'
import "./HomeBanner.css"
import { db } from "../../server"
import { collection, getDocs } from 'firebase/firestore'
import { deleteDoc, doc } from 'firebase/firestore'

function HomeBanner({admin}) {
    const [nameImg, setNameImg] = useState([])
    const HomeBannerColRef = collection(db, "homebanner")

    const [refersh, setRefresh] = useState(false)

    useEffect(() => {
        const getHomeBanner = async () => {
            const homebannner = await getDocs(HomeBannerColRef)
            setNameImg(homebannner.docs.map((po) => ({ ...po.data(), id: po.id })))
        }
        getHomeBanner()
    }, [])
    console.log(nameImg);


    const deleProduct = async(id)=>{
        await deleteDoc(doc(db, "products", id))
        .then(res=> {
          console.log(res)
          setRefresh(!refersh)
        })
        .catch(err=> console.log(err))
       }
    return (
        <div className=' homeBanner'>
            {
                nameImg?.map((item, inx) => <div key={inx} className="homeb__card">
                    <img src={item?.urls[0]} alt="" />
                    <p>{item?.name}</p>
                    {
                        admin ?
                        <button onClick={()=> deleProduct(item.id)}>delete</button>
                        :
                        <></>
                    }
                </div>)
            }
        </div>
    )
}

export default HomeBanner