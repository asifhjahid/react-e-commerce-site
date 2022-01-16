import React, { useState } from 'react';
import { AiFillCloseSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCartStyle from '../styles/ShoppingCart.styles';

export default function ShoppingCart() {
    const [showCart,setShowCart]= useState(false);

    const handleChange=()=>{
        console.log('Close Button Clicked');
    }
    return (
        <ShoppingCartStyle>
        <div className="main">
		<header className="header">
			<h1>Shopping Cart</h1>
			<div className="iconShopping">
				<p>0</p>
				<AiOutlineShoppingCart />
			</div>
		</header>
    
	<div className="cartBox">
		<div className="cart">
            <div className='close' onClick={()=>handleChange()}>
                <AiFillCloseSquare/>
            </div>
       
			<h1>Cart</h1>
		</div>
	</div>
    </div>
    </ShoppingCartStyle>
    )
}
