import React, {useState} from 'react'

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [urls, setUrls] = useState("")
console.log(title);
  return (
    <div>
      <h2>CreateProduct</h2>
      <form action='' className='create__form'>
        <input value={title} onChange = {e => setTitle(e.target.value)} type="text" placeholder='title'/>
        <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='price'/>
        <input value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='urls'/>
        <input type="text" placeholder='desc'/>
        <select name="" id=""> 
        <option value="" >tanlang</option>
        <option value="phone" >phone</option>
        <option value="tV" >televizor</option>
        <option value="laptop" >laptop</option>
         </select>
       <button>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct