import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product);
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
        quantity = quantity + product.quantity;
    }
    let tex = (totalPrice * 7) / 100;
    let grandTotal = totalPrice + shippingCost + tex;
    return (
        <div className='cart'>
            <h2 className='order-title'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingCost}</p>
            <p>Tax: ${tex}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;