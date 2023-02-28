import React, { useState } from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDocx, addDoc } from "firebase/firestore"
import { async } from '@firebase/util'

// array (javascript) = collection (database)

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [urls, setUrls] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)
  const productsColRef = collection ( db, "products" )
  const createProduct = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      title,
      price: +price,
      urls: [urls],
      desc,
      category
    }
    await addDoc(productsColRef, newProduct)
    .then(res=> {console.log(res)
      setTitle("")    
      setPrice("")
      setUrls("")
      setDesc("")
      setCategory("phone")
      setLoading(false)
      alert("Product has e been created")
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className='creat_pro'>
      <h2>CreateProduct</h2>
      <form onSubmit={createProduct} action='' className='create__form'>
        <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' />
        <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='price' />
        <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='urls' />
        <input required value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='desc' />
        <select value={category} onChange={e => setCategory(e.target.value)} name="" id="">
          {/* <option value="" >tanlang</option> */}
          <option value="phone" >phone</option>
          <option value="tv" >televizor</option>
          <option value="laptop" >laptop</option>
        </select>
        <button disabled={loading} type="submit">{loading ? "loading..." : "Create Product"}</button>
      </form>
    </div>
  )
}

export default CreateProduct