import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name,seller,price,quantity,img,ratings}=props.products;
    console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
        </div>
    );
};

export default Products;