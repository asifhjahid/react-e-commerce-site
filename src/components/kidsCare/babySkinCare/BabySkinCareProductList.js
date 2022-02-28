import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import babySkinCareProduct_1 from '../../../images/kidsCareProducts/babySkinCareProducts/babySkinCareProduct_1.jpeg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function BabySkinCareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babySkinCareProduct_1}
                        productName="Meril Baby Olive Oil"
                        productDesc='100 ml'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                    
                                                                                                                        
                    </div>
              
            </div>
        </RegularProductListStyle>
    )
}
