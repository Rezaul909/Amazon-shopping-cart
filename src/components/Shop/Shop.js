import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products , setProducts] = useState([]);
    const [cart, setCart] = useState([])

   useEffect( () => {
       fetch('products.json')
       .then(response => response.json())
       .then(data => setProducts(data))
   } ,[]);

   useEffect(() =>{
        const storedCartId = getStoredCart();
        // console.log(storedCart);
        for(const myId in storedCartId){
            // console.log(myId);
            const addedProduct = products.find(product => product.id === myId);
            console.log(addedProduct);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;