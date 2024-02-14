import React from 'react'
import Hero from '../Components/hero/hero'
import Popular from '../Components/popular/popular'
import Offers from '../Components/offers/offers'
import NewCollections from '../Components/newCollections/newCollections'
import Newletter from '../Components/newLetter/newletter'
const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <Newletter/>
    </div>
  )
}

export default Shop
