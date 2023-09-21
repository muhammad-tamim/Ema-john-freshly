import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    // console.log(props);
    const { name, seller, price, img, ratings } = props.products;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>Name : {name}</h3>
                <h5>Price : ${price}</h5>
                <p>Manufacture : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.products)} className='add-btn'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />

            </button>
        </div>
    );
};

export default Products;