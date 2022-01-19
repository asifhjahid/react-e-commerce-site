import React, { useContext, useEffect, useState } from 'react';
import cartContext from '../../context/cartContext';
import CartStyle from '../../styles/FakeApiStore.styles';
import AddToButton from '../AddToButton';

export default function FakeApiStore() {
        const ctx = useContext(cartContext);
        const [products, setProducts] = useState([]);
        // console.log(products);

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
    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products));
    },[products])

    return (
        <CartStyle>
            <div className="productListArea"> 
             <div className="productCart">
               {products.map((product)=>{
                   return(
                       <div>
                        
                            <div className='cart'>
                            
                            <img src={product.image} alt='' />

                            <div className='content'>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>

                                
                            </div>
                            <div>
                            <AddToButton ctx={ctx}  />
                            </div>
                        </div>
                     </div>
                   )
               })}
                </div>
            </div>
        </CartStyle>
    )
}
