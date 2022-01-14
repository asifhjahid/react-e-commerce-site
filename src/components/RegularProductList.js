import React from 'react'
import RegularProduct_1 from '../images/regularProducts/regularProduct_1.jpg'
import RegularProduct_2 from '../images/regularProducts/regularProduct_2.jpg'
import RegularProduct_3 from '../images/regularProducts/regularProduct_3.jpg'
import RegularProduct_4 from '../images/regularProducts/regularProduct_4.jpg'
import RegularProduct_5 from '../images/regularProducts/regularProduct_5.jpg'
import RegularProduct_6 from '../images/regularProducts/regularProduct_6.jpg'
import RegularProduct_7 from '../images/regularProducts/regularProduct_7.jpg'
import RegularProduct_8 from '../images/regularProducts/regularProduct_8.jpg'
import RegularProductListStyle from '../styles/RegularProductList.styles'
import AddToButton from './AddToButton'
import Product from './Product'
import ProductDelivery from './ProductDelivery'
import ProductDetailsButton from './ProductDetailsButton'

export default function RegularProductList() {
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_1}
                        productName='Miniket Rice Premium'
                        productDesc='5 kg'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_2}
                        productName='Chicken Eggs (Layer)'
                        productDesc='12 pcs'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_3}
                        productName='Chopstick Deshi Masala Instant Noodles ...'
                        productDesc='8 pack'
                        productPrice='134'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_4}
                        productName='Rupchanda Soyabean Oil'
                        productDesc='5 Itr'
                        productPrice='760'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_5}
                        productName='Quaker Oats Poly'
                        productDesc='450 gm'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_6}
                        productName='Bru Pure Instant Coffee Jar'
                        productDesc='100 gm'
                        productPrice='449'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_7}
                        productName='Horlicks Health And Nutrition Drink Jar'
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={RegularProduct_8}
                        productName='Nutella Hazelnut Cocoa Spread'
                        productDesc='350 gm'
                        productPrice='520'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>
                    
                    </div>
              
            </div>
        </RegularProductListStyle>
    )
}
