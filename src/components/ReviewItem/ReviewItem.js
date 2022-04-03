import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemove} = props;
    const {name ,price , shipping, quantity, img } = product;
    return (
        <div className='review-item'>
            <div className="item-details">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="item-info">
                    <div>
                        <p className='name'>{name}</p>
                        <p>price: <span className='color-hight'> ${price} </span></p>
                        <p><small>Shipping: {shipping}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                    <div className='delete-btn-container'>
                        <button onClick={()=>handleRemove(product)} className='delete-btn'>
                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;