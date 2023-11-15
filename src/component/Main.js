import React from 'react'
import shop from '../assets/shop.png'
import shoe_image from '../assets/shoe_image.png'
import '../css/main.css'

function Main() {
  return (
    <div className='main'>
      <div className='main-content'>
        <h1 className='headings'>
        YOUR FEET DESERVE THE BEST
        </h1>
        <p className='main-para'>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='buttons'>
            <button className='shop-button'>Shop Now</button>
            <button className='category-button'>Category</button>
        </div>
        <img src = {shop} alt ='shop' className='shop-name'></img>
      </div>
      <img src = {shoe_image} alt ='shop'></img>
    </div>
  )
}

export default Main
