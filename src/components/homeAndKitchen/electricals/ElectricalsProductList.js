import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import electricalProduct_1 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_1.jpg'
import electricalProduct_2 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_2.jpg'
import electricalProduct_3 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_3.jpg'
import electricalProduct_4 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_4.jpg'
import electricalProduct_5 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_5.jpg'
import electricalProduct_6 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_6.jpg'
import electricalProduct_7 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_7.jpg'
import electricalProduct_8 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_8.jpg'
import electricalProduct_9 from '../../../images/homeAndKitchenProducts/electricalProducts/electricalProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function ElectricalsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_1}
                        productName="Transtec Smart LED Multi Color..."
                        productDesc='each'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_2}
                        productName="Transtec LED Luster Red (Pin)"
                        productDesc='each'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_3}
                        productName='Transtec LED Luster Blue (Scre...'
                        productDesc='each'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_4}
                        productName="Transtec E27 Pendant (Screw) H..."
                        productDesc='each'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_5}
                        productName='Transtec Ceiling Rose'
                        productDesc='each'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_6}
                        productName='Transtec Bright CDL LED Bulb (...'
                        productDesc='each'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_7}
                        productName='Transtec Backup CDL LED Bulb (...'
                        productDesc='each'
                        productPrice='675'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_8}
                        productName='Transtec 3 Pin Travel Adapter...'
                        productDesc='each'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={electricalProduct_9}
                        productName='BSM Lotus Energy Light (Screw)...'
                        productDesc='each'
                        productPrice='397'
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
