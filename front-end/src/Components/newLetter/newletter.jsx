import React from 'react'
import './newsletter.css'
const Newletter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <input type="text" placeholder='Your email id ' />
      <button>Subscribe</button>
    </div>

  )
}

export default Newletter
