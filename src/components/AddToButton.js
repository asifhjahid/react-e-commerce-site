import React from 'react';
import ButtonStyle from '../styles/AddToButton.styles';



export default function AddToButton({cartBtn}) {
    
    return (
        <ButtonStyle>
            <div class="bottomAddToCartBtn">
                <button class="addButton" onClick={()=>cartBtn.addToCart()}>Add To Cart</button>
            </div> 
        </ButtonStyle>
    )
}
