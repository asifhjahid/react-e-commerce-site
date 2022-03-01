import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import hairCareProduct_1 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_1.jpg'
import hairCareProduct_10 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_10.jpg'
import hairCareProduct_11 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_11.jpg'
import hairCareProduct_12 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_12.jpg'
import hairCareProduct_13 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_13.jpg'
import hairCareProduct_14 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_14.jpg'
import hairCareProduct_15 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_15.jpg'
import hairCareProduct_16 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_16.jpg'
import hairCareProduct_17 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_17.jpg'
import hairCareProduct_18 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_18.jpg'
import hairCareProduct_19 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_19.jpg'
import hairCareProduct_2 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_2.jpg'
import hairCareProduct_20 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_20.jpg'
import hairCareProduct_21 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_21.jpg'
import hairCareProduct_22 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_22.jpg'
import hairCareProduct_23 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_23.jpg'
import hairCareProduct_24 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_24.jpg'
import hairCareProduct_25 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_25.jpg'
import hairCareProduct_26 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_26.jpg'
import hairCareProduct_27 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_27.jpg'
import hairCareProduct_28 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_28.jpg'
import hairCareProduct_29 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_29.jpg'
import hairCareProduct_3 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_3.jpg'
import hairCareProduct_30 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_30.jpg'
import hairCareProduct_31 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_31.jpg'
import hairCareProduct_32 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_32.jpg'
import hairCareProduct_4 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_4.jpg'
import hairCareProduct_5 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_5.jpg'
import hairCareProduct_6 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_6.jpg'
import hairCareProduct_7 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_7.jpg'
import hairCareProduct_8 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_8.jpg'
import hairCareProduct_9 from '../../../images/personalCareProducts/hairCareProducts/hairCareProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function HairCareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_1}
                        productName="Himalaya Anti Hair Loss Cream"
                        productDesc='50 ml'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_2}
                        productName="Clariss Castor Oil"
                        productDesc='100 ml'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_3}
                        productName="Cute Egg Shampoo"
                        productDesc='300 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_4}
                        productName="Cute Lime Shampoo"
                        productDesc='300 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_5}
                        productName="Dabur Almond Hair Oil"
                        productDesc='100 ml'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_6}
                        productName='Dove Conditioner Hairfall Resc...'
                        productDesc='180 ml'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_7}
                        productName='Dove Conditioner Oxygen Moistu...'
                        productDesc='180 ml'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_8}
                        productName='Dove Shampoo Intense Repair Co...'
                        productDesc='345 ml'
                        productPrice='480'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_9}
                        productName="Emami 7 Oils In One Non Sticky..."
                        productDesc='300 ml'
                        productPrice='285'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_10}
                        productName="Himalaya Anti Dandruff Hair Cr..."
                        productDesc='175 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_11}
                        productName='Himalaya Softness &amp; Shine 2 In...'
                        productDesc='400 ml'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_12}
                        productName="Jui Coconut Oil Plastic"
                        productDesc='200 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_13}
                        productName='Jui Coconut Oil'
                        productDesc='350 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_14}
                        productName='Jui Coconut Oil Can'
                        productDesc='200 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_15}
                        productName='Livon Hair Serum'
                        productDesc='100 ml'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_16}
                        productName='Nihar Anti Hairfall 5 Seeds Ha...'
                        productDesc='100 ml'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_17}
                        productName="Nihar Lovely Coconut Castor Ha..."
                        productDesc='75 ml'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_18}
                        productName="Parachute Advansed Aloe Vera H..."
                        productDesc='75 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_19}
                        productName="Parachute Coconut Oil"
                        productDesc='200 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_20}
                        productName="Parachute Hair Oil Anti Hairfa..."
                        productDesc='150 ml'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_21}
                        productName="Sunsilk Shampoo Perfect Straig..."
                        productDesc='180 ml'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_22}
                        productName="Ravlon Medium Redish Brown"
                        productDesc='40 ml'
                        productPrice='455'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_23}
                        productName="Red Hunt Shine Hair Wax"
                        productDesc='75 gm'
                        productPrice='295'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_24}
                        productName="Tresemme Shampoo Hair Fall Def..."
                        productDesc='580 ml'
                        productPrice='630'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_25}
                        productName="Tresemme Conditioner Keratin S..."
                        productDesc='190 ml'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_26}
                        productName="Well's Castor Oil"
                        productDesc='70 ml'
                        productPrice='159'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_27}
                        productName="Parachute Coconut Oil"
                        productDesc='200 ml'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_28}
                        productName="Parachute Coconut Oil"
                        productDesc='130 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_29}
                        productName="Parachute Coconut Oil"
                        productDesc='240 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_30}
                        productName="Parachute Coconut Oil"
                        productDesc='350 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_31}
                        productName="Parachute Coconut Oil"
                        productDesc='575 ml'
                        productPrice='305'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hairCareProduct_32}
                        productName="Parachute Aloe Vera Hair Oil"
                        productDesc='150 ml'
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
