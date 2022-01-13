import React from 'react'
import FreshProduct_1 from '../images/freshProducts/freshProduct_1.webp'
import FreshProduct_2 from '../images/freshProducts/freshProduct_2.webp'
import FreshProduct_3 from '../images/freshProducts/freshProduct_3.png'
import FreshProduct_4 from '../images/freshProducts/freshProduct_4.webp'
import FreshProduct_5 from '../images/freshProducts/freshProduct_5.webp'
import FreshProduct_6 from '../images/freshProducts/freshProduct_6.webp'
import FreshProduct_7 from '../images/freshProducts/freshProduct_7.jpeg'
import FreshProduct_8 from '../images/freshProducts/freshProduct_8.webp'
import FreshProductListStyle from '../styles/FreshProductList.styles'
import AddToButton from './AddToButton'
import Product from './Product'
import ProductDelivery from './ProductDelivery'
import ProductDetailsButton from './ProductDetailsButton'

export default function FreshProductList() {
    return (
        <FreshProductListStyle>
            <div class="productListArea">
                      <div class="productCart">
                        
                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_1}
                        productName='Pineapple Medium'
                        productDesc='each'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>
                       
                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_2}
                        productName='Banana Green'
                        productDesc='4 pcs'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_3}
                        productName='Gourd'
                        productDesc='each'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>
                        
                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_4}
                        productName='Round Brinjal'
                        productDesc='500 gm'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_5}
                        productName='Red Tomato'
                        productDesc='500 gm'
                        productPrice='19'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_6}
                        productName='Sweet Pumpkin'
                        productDesc='each (3kg+)'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_7}
                        productName='Roast Chicken'
                        productDesc='250 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>

                        <div>
                        <Product 
                        productType='Fresh'
                        productImage={FreshProduct_8}
                        productName='Cock Chicken Skin Off'
                        productDesc='250 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton />
                        </div>
                    
                    </div>
              
            </div>
        </FreshProductListStyle>
    )
}
