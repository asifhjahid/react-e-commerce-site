import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import facialAndSkinCareProduct_1 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_1.jpg'
import facialAndSkinCareProduct_10 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_10.jpg'
import facialAndSkinCareProduct_11 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_11.jpg'
import facialAndSkinCareProduct_12 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_12.jpg'
import facialAndSkinCareProduct_13 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_13.jpg'
import facialAndSkinCareProduct_14 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_14.jpg'
import facialAndSkinCareProduct_15 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_15.jpg'
import facialAndSkinCareProduct_16 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_16.jpg'
import facialAndSkinCareProduct_17 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_17.jpg'
import facialAndSkinCareProduct_18 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_18.jpg'
import facialAndSkinCareProduct_19 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_19.jpg'
import facialAndSkinCareProduct_2 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_2.jpg'
import facialAndSkinCareProduct_20 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_20.jpg'
import facialAndSkinCareProduct_21 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_21.jpg'
import facialAndSkinCareProduct_22 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_22.jpg'
import facialAndSkinCareProduct_23 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_23.jpg'
import facialAndSkinCareProduct_24 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_24.jpg'
import facialAndSkinCareProduct_25 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_25.jpg'
import facialAndSkinCareProduct_26 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_26.jpg'
import facialAndSkinCareProduct_27 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_27.jpg'
import facialAndSkinCareProduct_28 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_28.jpg'
import facialAndSkinCareProduct_29 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_29.jpg'
import facialAndSkinCareProduct_3 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_3.jpg'
import facialAndSkinCareProduct_30 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_30.jpg'
import facialAndSkinCareProduct_31 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_31.jpg'
import facialAndSkinCareProduct_32 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_32.jpg'
import facialAndSkinCareProduct_4 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_4.jpg'
import facialAndSkinCareProduct_5 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_5.jpg'
import facialAndSkinCareProduct_6 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_6.jpg'
import facialAndSkinCareProduct_7 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_7.jpg'
import facialAndSkinCareProduct_8 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_8.jpg'
import facialAndSkinCareProduct_9 from '../../../images/personalCareProducts/facialAndSkinCareProducts/facialAndSkinCareProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FacialAndSkinCareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_1}
                        productName="Ponds Face Wash Scrub"
                        productDesc='100 gm'
                        productPrice='155'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_2}
                        productName="Pand's Face Wash Pure White"
                        productDesc='100 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_3}
                        productName="Himalaya Purifying Neem Face W..."
                        productDesc='150 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_4}
                        productName="Himalaya Fairness Kesar Face W..."
                        productDesc='100 ml'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_5}
                        productName="Fair And Lovely BB Cream"
                        productDesc='40 gm'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_6}
                        productName='Garnier Skin Naturals Sakura W...'
                        productDesc='100 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_7}
                        productName='Garnier Skin Naturals Light Co...'
                        productDesc='100 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_8}
                        productName='Dove Face Wash Beauty Moisture'
                        productDesc='50 ml'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_9}
                        productName="Neutrogena Visibly Clear Pore..."
                        productDesc='150 ml'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_10}
                        productName="Neutrogena Deep Clean Facial C..."
                        productDesc='200 ml'
                        productPrice='1039'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_11}
                        productName='Boots Cucumber Facial Wash'
                        productDesc='150 ml'
                        productPrice='480'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_12}
                        productName="Simple Refreshing Facial Wash"
                        productDesc='150 ml'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_13}
                        productName='Neutrogena Blackhead Eliminati...'
                        productDesc='150 ml'
                        productPrice='799'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_14}
                        productName='Ponds Flawless White Facial Wa...'
                        productDesc='100 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_15}
                        productName='Ponds Pure White Pollution Fre...'
                        productDesc='100 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_16}
                        productName='Ponds Clear Solutions Facial S...'
                        productDesc='100 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_17}
                        productName='Lakme Blush &amp; Glow Strawberry...'
                        productDesc='100 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_18}
                        productName="Gillette Series Shaving Gel Se..."
                        productDesc='75 ml'
                        productPrice='285'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_19}
                        productName="Nilvea Men Shaving Foam"
                        productDesc='200 ml'
                        productPrice='325'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_20}
                        productName="Nivea Men Shaving Gel"
                        productDesc='200 gm'
                        productPrice='425'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_21}
                        productName="Gillette Shaving Foam"
                        productDesc='418 gm'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_22}
                        productName="Gillette Shaving Foam"
                        productDesc='196 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_23}
                        productName="Garnier Light Complete Fairnes..."
                        productDesc='45 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_24}
                        productName="Due Whitening Night Cream"
                        productDesc='40 gm'
                        productPrice='538'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_25}
                        productName="Lady Diana Sunblock Cream"
                        productDesc='170 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_26}
                        productName="Fair &amp; Lovely Glow &amp; Handsome..."
                        productDesc='50 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_27}
                        productName="Fair &amp; Lovely Glow &amp; Handsome..."
                        productDesc='25 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_28}
                        productName="Fair &amp; Lovely Glow &amp; Handsome..."
                        productDesc='100 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_29}
                        productName="Selsun"
                        productDesc='150 ml'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_30}
                        productName="Kool After Shave Moisture Gel"
                        productDesc='50 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_31}
                        productName="Emami Fair And Handsome Fairne..."
                        productDesc='30 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={facialAndSkinCareProduct_32}
                        productName="Emami Fair And Handsome Fairne..."
                        productDesc='60 ml'
                        productPrice='170'
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
