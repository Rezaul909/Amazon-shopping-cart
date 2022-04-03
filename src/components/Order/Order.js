import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCarts';
import useProduct from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products , setProducts] = useProduct();
    const [cart , setCart] = useCart(products);

    const handleRemove = product => {
        const restProduct = cart.filter(pd => product.id !== pd.id);
        setCart(restProduct);
        removeFromDb(product.id);
    }

    return (
        <div className='container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                        key = {product.id}
                        product = {product}
                        handleRemove ={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className='side-menu'>
                <Cart cart={cart}>
                    <Link to={'/Contact'}>
                        <button>Proceed Checkout &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;