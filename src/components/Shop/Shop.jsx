import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;