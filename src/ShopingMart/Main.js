import React, { useState } from 'react'
import Navbar from "./Navbar"
import Product from './Product'
function Main() {
  const [formData, setFormData] = useState({
    image: "" ,
    name : "" ,
    price : "" ,

});
 const [data, setData] = useState([]);
  return (
    <>
      <Navbar setFormData ={setFormData} formData={formData} data={data} setData={setData} />
      <Product data={data}  />
    </>
  )
}

export default Main
