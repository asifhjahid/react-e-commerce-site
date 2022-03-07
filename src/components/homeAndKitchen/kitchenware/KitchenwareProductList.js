import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import kitchenwareProduct_1 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_1.jpg'
import kitchenwareProduct_2 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_2.jpg'
import kitchenwareProduct_3 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_3.jpg'
import kitchenwareProduct_4 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_4.jpg'
import kitchenwareProduct_5 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_5.jpg'
import kitchenwareProduct_6 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_6.jpg'
import kitchenwareProduct_7 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_7.jpg'
import kitchenwareProduct_8 from '../../../images/homeAndKitchenProducts/kitchenwareProducts/kitchenwareProduct_8.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function KitchenwareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_1}
                        productName="Rok Dishwash Scrubber (Buy 4 G..."
                        productDesc='4 pcs'
                        productPrice='78'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_2}
                        productName="Household Gloves 14.5 Inch Red..."
                        productDesc='2 pcs'
                        productPrice='109'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_3}
                        productName='Kitchen Vegetable Cutter (Chin...'
                        productDesc='each'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_4}
                        productName="Mediker SafeLife Veggie Wash"
                        productDesc='250 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_5}
                        productName='Planet Grass Broom'
                        productDesc='each'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_6}
                        productName='Wrapping Roll'
                        productDesc='each'
                        productPrice='1099'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_7}
                        productName='Dishwashing Steel Scourer (Maj...'
                        productDesc='1 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={kitchenwareProduct_8}
                        productName='Matador Steel Scourer (Majoni)...'
                        productDesc='1 pcs'
                        productPrice='35'
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
