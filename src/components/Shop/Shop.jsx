import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilites/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    }, [products]);
    const handleAddToCart = products => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === products.id);
        if (!exists) {
            products.quantity = 1;
            newCart = [...cart, products];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== products.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(products.id)
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