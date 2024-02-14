import React from 'react'
import './offers.css'
import exclusiveImage from '../Assets/icons8-user-48.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive </h1>
        <h1>Offers For you</h1>
        <p>Only on Best seller products</p>
        <button>check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveImage} alt="" />
      </div>
    </div>
  )
}

export default Offers
