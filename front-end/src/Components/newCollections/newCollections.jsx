import React from 'react'
import './newCollections.css'
import newCollection from '../Assets/data'
import Item from '../items/item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>new collection</h1>
      <hr />
<div className="collections">
{newCollection.map((item,i) =>{
    return <Item key={i} id={item.id} name= {item.name} image={item.image} new_price={item.new_price}
    old_price = {item.old_price}/>
})}
</div>
    </div>
  )
}

export default NewCollections
