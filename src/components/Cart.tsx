import React from 'react'
import 'bootstrap'

interface Props{
    cartItems: string[]
    onClear: () => void
}

const Cart = ({cartItems, onClear} : Props ) => {
  return (
    <>
    <div>Cart</div>
    <ul>
        {cartItems.map(item => <li key= {item}> {item}</li>)}
    </ul>
    <button onClick={onClear}> CLEAR </button>
    </>
  )
}

export default Cart