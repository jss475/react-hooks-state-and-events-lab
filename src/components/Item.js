import React, {useState} from "react";

function Item({ name, category }) {
  const [cartState, setCart] = useState('')
  
  function handleClick(event){
    if(event.target.textContent === 'Add to Cart'){
      event.target.textContent = 'Remove From Cart'
      setCart('in-cart')
      
    }else{
      event.target.textContent = 'Add to Cart'
      setCart('')
     
    }
  }
  console.log(cartState)
  

  return (
    <li className= {cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
