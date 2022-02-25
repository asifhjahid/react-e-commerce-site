import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import otherIngredientProduct_1 from '../../../images/cookingProducts/otherIngredientProducts/otherIngredientProduct_1.jpeg'
import otherIngredientProduct_2 from '../../../images/cookingProducts/otherIngredientProducts/otherIngredientProduct_2.jpeg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function OtherIngredientProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={otherIngredientProduct_1}
                        productName="Cool Breeze Jasmine Air Freshe..."
                        productDesc='320 ml'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={otherIngredientProduct_2}
                        productName="Diamond Aluminium Foil"
                        productDesc='37.5 sqft'
                        productPrice='130'
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
