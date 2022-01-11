import React, { useEffect, useState } from 'react';
import CartStyle from '../styles/FakeApiStore.styles';

export default function FakeApiStore() {
        
        const [products, setProducts] = useState([]);
        console.log(products);

        useEffect(()=>{
            storeProducts();
        },[])
        const storeProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        setProducts(data);

    }

    return (
        <CartStyle>
            <div className='container'>
               {products.map((product)=>{
                   return(
                       <>
                        <div className='cart'>
                            <div className='content'>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                            </div>
                            <img src={product.image} alt='' />
                        </div>
                     </>
                   )
               })}
                
            </div>
        </CartStyle>
    )
}
