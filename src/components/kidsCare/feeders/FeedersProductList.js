import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import feederProduct_1 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_1.jpg'
import feederProduct_10 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_10.jpg'
import feederProduct_11 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_11.jpg'
import feederProduct_2 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_2.jpg'
import feederProduct_3 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_3.jpg'
import feederProduct_4 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_4.jpg'
import feederProduct_5 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_5.jpg'
import feederProduct_6 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_6.jpg'
import feederProduct_7 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_7.jpg'
import feederProduct_8 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_8.jpg'
import feederProduct_9 from '../../../images/kidsCareProducts/feedersProducts/feederProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FeederProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_1}
                        productName="Angel Silicon Nipple (6 Months..."
                        productDesc='each'
                        productPrice='54'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_2}
                        productName="Farlin Baby Silicone Nipple (9..."
                        productDesc='each'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_3}
                        productName="Mother Care Baby Wide Neck Bot..."
                        productDesc='250 ml'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_4}
                        productName="Mother Care Baby Wide Neck Bot..."
                        productDesc='250 ml'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_5}
                        productName="Mother Care Basic Standard Nec..."
                        productDesc='250 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_6}
                        productName="Mother Care Nipple (6m+)"
                        productDesc='each'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_7}
                        productName='SmartCare PP (Polypropylene) Bo...'
                        productDesc='240 ml'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_8}
                        productName='Smartcare Spoon Food Feeder'
                        productDesc='Smartcare-Spoon-Food...'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_9}
                        productName="Apple Bear Baby Pp Feeding Bot..."
                        productDesc='280 ml'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_10}
                        productName="Linco PP Feeding Bottle"
                        productDesc='120 ml'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feederProduct_11}
                        productName='Smile Bear BPA Free PP Feeding...'
                        productDesc='125 ml'
                        productPrice='200'
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
