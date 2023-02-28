import React, {useState} from 'react'
import { collection,addDoc } from "firebase/firestore"
import { db } from "../../../server"

function CreateHomeBanner() {
  const [name, setName] = useState("")
  const [urls, setUrls] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)
  const HomeBannerColRef = collection ( db, "homebanner" )

  const createHomeBanner = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let newHomeBanner = {
      name,
      urls: [urls],
      category
    }
    await addDoc(HomeBannerColRef, newHomeBanner)
    .then(res=> {console.log(res)
      setName("")
      setUrls("")
      setCategory("phone")
      setLoading(false)
      alert("HomeBanner has e been created")
    })
    .catch(err=> console.log(err))
  }
  return (
    <div>
      <h1>Create HomeBannner</h1>
      <form onSubmit={createHomeBanner} action="" className='create__form'>
        <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder='name'/>
        <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='urls'/>
        <select value={category} onChange={e => setCategory(e.target.value)} name="" id="">
          <option value="phone">phone</option>
          <option value="tv">televizor</option>
          <option value="laptop">laptop</option>
        </select>
        <button disabled={loading} type="submit">{loading ? "loading..." : "Create Product"}</button>
      </form>
    </div>
  )
}

export default CreateHomeBanner