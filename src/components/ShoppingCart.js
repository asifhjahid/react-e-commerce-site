import React from 'react';
import { AiFillCloseSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCartStyle from '../styles/ShoppingCart.styles';

export default function ShoppingCart() {
    return (
        <ShoppingCartStyle>
        <div className='main'>
        <div className='header'>
         
			<h1>Shopping Cart</h1>
           
			<div className="iconShopping">
				<p>0</p>
                <div>
                <AiOutlineShoppingCart />
                </div>
				
			</div>
		</div>
        </div>

        <div className="cartBox">
		    <div className="cart">
                <div className='close'>
                <AiFillCloseSquare />
                </div>
			<h1>Cart</h1>
		    </div>
	    </div>
    </ShoppingCartStyle>
    )
}
