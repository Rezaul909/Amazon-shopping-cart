import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.addToCart);
    const {name, price, seller, img, ratings, category} = props.product;
    return (
        <div className="product-style">
            <img className='img' src= {img} alt="" />
            <div className="product-details">
                <h3>{name}</h3>
                <p>Price: ${price} </p>        
                <div className='product-info'>
                    <p><small>Manufacturer: {seller}</small> </p>
                    <p><small>Ratings: {ratings} </small></p>
                    <p><small>Categories: {category}</small> </p>
                </div>
            </div>
            <button onClick={ ()=> props.HandleAddToCart(props.product)} className='button'>
                <p>Add to cart &nbsp; <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;