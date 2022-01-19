import React from 'react';
import ButtonStyle from '../styles/AddToButton.styles';



export default function AddToButton({ctx}) {
    
    return (
        <ButtonStyle>
            <div class="bottomAddToCartBtn">
                <button class="addButton" onClick={()=>ctx.addToCart()}>Add To Cart</button>
            </div> 
        </ButtonStyle>
    )
}
