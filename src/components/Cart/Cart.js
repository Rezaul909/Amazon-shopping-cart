import React from 'react';
import './Cart.css'

const Cart = ({cart,children}) => {
    // console.log(cart);

    let price = 0;
    let shipping = 0;
    for(const product of cart){
        price = price + product.price;
        shipping = shipping + product.shipping;
    }

    const tex = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = price + shipping + tex;

    return (
        <div className='product-summary'>
            <h2>Order Summary </h2>
            <p>Selected items: {cart.length}</p>
            <p>Total price: ${price}</p>
            <p>Total shipping cost: ${shipping} </p>
            <p>Tex: ${tex}</p>
            <h3>Grand total: ${grandTotal}</h3>
            {children}
        </div>
    );
};

export default Cart;