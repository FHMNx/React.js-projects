import React, { useState } from 'react'

const Cart = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleCount = () => setCartCount(cartCount + 1);
    
    return (
        <>
            <h1>Number of Items in the cart : {cartCount}</h1>
            <button onClick={handleCount}>Add to Cart</button>
        </>
    )
}

export default Cart
