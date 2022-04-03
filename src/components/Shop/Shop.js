import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products , setProducts] = useProduct()
    const [cart, setCart] = useState([])

    useEffect(() =>{
            const storedCartId = getStoredCart();

            for(const myId in storedCartId){
                const addedProduct = products.find(product => product.id === myId);
                // setCart(addedProduct);
            }
            
    }, []);

   const HandleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='container'>
            <div className='card-container'>
                {
                    products.map(product =><Product 
                        key={product.id} 
                        product={product} 
                        HandleAddToCart={HandleAddToCart}>
                        </Product>)
                }
            </div>
            <div className='side-menu'>
                <Cart cart={cart}>
                    <Link to={'/order'}>
                        <button>Review Order &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;