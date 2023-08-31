import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name,seller,price,img,ratings}=props.products;
    console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h3>Name : {name}</h3>
            <h5>Price : {price}</h5>
            <p>Manufacture : {seller}</p>
            <p>Rating : {ratings}</p>
            </div>
            <button className='add-btn'>Add to Cart</button>
        </div>
    );
};

export default Products;