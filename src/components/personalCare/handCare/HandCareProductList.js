import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import handCareProduct_1 from '../../../images/personalCareProducts/handCareProducts/handCareProduct_1.jpg'
import handCareProduct_2 from '../../../images/personalCareProducts/handCareProducts/handCareProduct_2.jpg'
import handCareProduct_3 from '../../../images/personalCareProducts/handCareProducts/handCareProduct_3.jpg'
import handCareProduct_4 from '../../../images/personalCareProducts/handCareProducts/handCareProduct_4.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function HandCareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={handCareProduct_1}
                        productName="Dettol Instant Hand Sanitizer"
                        productDesc='50 ml'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={handCareProduct_2}
                        productName="Sepnil Hand Sanitizer"
                        productDesc='40 ml'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={handCareProduct_3}
                        productName="Hexisol Hand Rub"
                        productDesc='250 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={handCareProduct_4}
                        productName="Meril Nail Polish Remover"
                        productDesc='40 ml'
                        productPrice='40'
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
