import React, { useContext } from 'react';
import cartContext from '../context/cartContext';
import ButtonStyle from '../styles/AddToButton.styles';


export default function AddToButton() {
    const ctx = useContext(cartContext);
    return (
        <ButtonStyle>
            <div class="bottomAddToCartBtn">
                <button class="addButton" onClick={()=>ctx.addToCart}>Add To Cart</button>
            </div> 
        </ButtonStyle>
    )
}
