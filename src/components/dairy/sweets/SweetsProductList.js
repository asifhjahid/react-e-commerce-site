import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import sweetProduct_1 from '../../../images/dairyProducts/sweetsProducts/sweetProduct_1.webp'
import sweetProduct_2 from '../../../images/dairyProducts/sweetsProducts/sweetProduct_2.webp'
import sweetProduct_3 from '../../../images/dairyProducts/sweetsProducts/sweetProduct_3.webp'
import sweetProduct_4 from '../../../images/dairyProducts/sweetsProducts/sweetProduct_4.webp'
import sweetProduct_5 from '../../../images/dairyProducts/sweetsProducts/sweetProduct_5.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SweetsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={sweetProduct_1}
                        productName="Aarong Dairy Gulab Jamun"
                        productDesc='500 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={sweetProduct_2}
                        productName="Aarong Dairy Gulab Jamun"
                        productDesc='1000 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={sweetProduct_3}
                        productName="Aarong Dairy Kalojam"
                        productDesc='1000 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={sweetProduct_4}
                        productName="Aarong Dairy Rasgulla"
                        productDesc='1000 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={sweetProduct_5}
                        productName='Milk Vita Rasmalai'
                        productDesc='500 gm'
                        productPrice='150'
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
