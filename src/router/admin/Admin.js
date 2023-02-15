import React from 'react'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import MangeProduct from './mange-product/MangeProduct'
import { Routes, Route, NavLink } from 'react-router-dom'
function Admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"create-product"}>Create Product</NavLink></li>
          <li><NavLink to={"manage-product"}>Manage Product</NavLink></li>
        </ul>
      </div>
      <div className="admin__content">
      <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manage-product' element={<MangeProduct/>}/>
        </Routes>
      </div>
    
    </div>
  )
}

export default Admin