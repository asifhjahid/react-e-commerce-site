import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import foodSupplementsProduct_1 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_1.jpg'
import foodSupplementsProduct_2 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_2.jpg'
import foodSupplementsProduct_3 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_3.jpg'
import foodSupplementsProduct_4 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_4.jpg'
import foodSupplementsProduct_5 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_5.jpg'
import foodSupplementsProduct_6 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_6.jpg'
import foodSupplementsProduct_7 from '../../../images/personalCareProducts/foodSupplementsProducts/foodSupplementsProduct_7.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FoodSupplementsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_1}
                        productName="Horlicks Mothers Health And Nu..."
                        productDesc='350 gm'
                        productPrice='490'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_2}
                        productName="Junior Horlicks Health And Nut..."
                        productDesc='500 gm'
                        productPrice='370'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_3}
                        productName="Horlicks Health And Nutrition ..."
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_4}
                        productName="PediaSure Vanilla Delight"
                        productDesc='1 kg'
                        productPrice='1716'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_5}
                        productName="PediaSure Complete Classic Van..."
                        productDesc='400 gm'
                        productPrice='1180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_6}
                        productName="PediaSure Vanilla Delight"
                        productDesc='400 gm'
                        productPrice='759'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={foodSupplementsProduct_7}
                        productName='Maltova Health And Nutrition D...'
                        productDesc='400 gm'
                        productPrice='330'
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
