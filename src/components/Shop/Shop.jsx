import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleAddToCart = products => {
        const newCart = [...cart, products];
        setCart(newCart);
    }

    return (
        <div className='shop-containar'>
            <div className="products-containar">
                {
                    products.map(
                        products => <Products
                            key={products.id}
                            products={products}
                            handleAddToCart={handleAddToCart}
                        ></Products>
                    )
                }
            </div>
            <div className="cart-containar">
                <h2 className='order-title'>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h3>Grand Total: $1559</h3>
            </div>
        </div>
    );
};

export default Shop;