import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import soapAndBodyWashProduct_1 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_1.jpg'
import soapAndBodyWashProduct_10 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_10.jpg'
import soapAndBodyWashProduct_11 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_11.jpg'
import soapAndBodyWashProduct_12 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_12.jpg'
import soapAndBodyWashProduct_13 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_13.jpg'
import soapAndBodyWashProduct_14 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_14.jpg'
import soapAndBodyWashProduct_15 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_15.jpg'
import soapAndBodyWashProduct_16 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_16.jpg'
import soapAndBodyWashProduct_17 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_17.jpg'
import soapAndBodyWashProduct_18 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_18.jpg'
import soapAndBodyWashProduct_19 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_19.jpg'
import soapAndBodyWashProduct_2 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_2.jpg'
import soapAndBodyWashProduct_20 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_20.jpg'
import soapAndBodyWashProduct_21 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_21.jpg'
import soapAndBodyWashProduct_22 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_22.jpg'
import soapAndBodyWashProduct_23 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_23.jpg'
import soapAndBodyWashProduct_24 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_24.jpg'
import soapAndBodyWashProduct_25 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_25.jpg'
import soapAndBodyWashProduct_26 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_26.jpg'
import soapAndBodyWashProduct_27 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_27.jpg'
import soapAndBodyWashProduct_28 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_28.jpg'
import soapAndBodyWashProduct_29 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_29.jpg'
import soapAndBodyWashProduct_3 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_3.jpg'
import soapAndBodyWashProduct_30 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_30.jpg'
import soapAndBodyWashProduct_31 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_31.jpg'
import soapAndBodyWashProduct_32 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_32.jpg'
import soapAndBodyWashProduct_4 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_4.jpg'
import soapAndBodyWashProduct_5 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_5.jpg'
import soapAndBodyWashProduct_6 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_6.jpg'
import soapAndBodyWashProduct_7 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_7.jpg'
import soapAndBodyWashProduct_8 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_8.jpg'
import soapAndBodyWashProduct_9 from '../../../images/personalCareProducts/soapsAndBodyWashProducts/soapAndBodyWashProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SoapAndBodyWashProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_1}
                        productName="ACI Neem Original Pure Neem So..."
                        productDesc='75 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_2}
                        productName="ACI Savlon Active Antiseptic S..."
                        productDesc='100 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_3}
                        productName="ACI Savlon Mild Antiseptic Soa..."
                        productDesc='75 gm'
                        productPrice='42'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_4}
                        productName="Boroplus Soap"
                        productDesc='100 gm'
                        productPrice='48'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_5}
                        productName="Cosco Transparent Glycerine So..."
                        productDesc='80 gm'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_6}
                        productName='Cussons Imperial Leather Class...'
                        productDesc='200 gm'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_7}
                        productName='Dettol Soap Aloe Vera Bathing...'
                        productDesc='75 gm'
                        productPrice='44'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_8}
                        productName='Dettol Body Wash Shower Gel Or...'
                        productDesc='250 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_9}
                        productName="ACI Savlon Fresh Soap"
                        productDesc='100 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_10}
                        productName="Dettol Soap Original"
                        productDesc='75 gm'
                        productPrice='44'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_11}
                        productName='SKincare Germ Protection Bathi...'
                        productDesc='75 gm'
                        productPrice='44'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_12}
                        productName="Gacotouch Antiseptic Soap"
                        productDesc='102 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_13}
                        productName='Keya Super Lemon Soap'
                        productDesc='100 gm'
                        productPrice='34'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_14}
                        productName='Tibet Luxury Soap Natural Glow'
                        productDesc='100 gm'
                        productPrice='36'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_15}
                        productName='Lifebuoy Cool Total Health Soa...'
                        productDesc='100 gm'
                        productPrice='38'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_16}
                        productName='Lux Soft Touch Soap'
                        productDesc='100 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_17}
                        productName="Jhonson's Baby Blossoms Soap"
                        productDesc='75 gm'
                        productPrice='104'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_18}
                        productName="Savlon Active Antiseptic Soap"
                        productDesc='100 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_19}
                        productName="Savlon Soap Mild"
                        productDesc='125 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_20}
                        productName="Olay Soap"
                        productDesc='106 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_21}
                        productName="Irish Spring Original Soap"
                        productDesc='104 gm'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_22}
                        productName="Dettol Skincare Soap"
                        productDesc='125 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_23}
                        productName="Meril Milk Soap Bar"
                        productDesc='100 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_24}
                        productName="Meril Milk &amp; Kiwi Soap"
                        productDesc='100 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_25}
                        productName="Margo Original Neem Soap"
                        productDesc='100 gm'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_26}
                        productName="Lux Soap Bar Velvet Glow"
                        productDesc='100 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_27}
                        productName="Lux Soap Bar Velvet Glow"
                        productDesc='150 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_28}
                        productName="Lux Soap Bar Soft Touch"
                        productDesc='35 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_29}
                        productName="Lux Soap Bar Soft Glow"
                        productDesc='150 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_30}
                        productName="Lux Soap Bar Sensuous Sandal"
                        productDesc='75 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_31}
                        productName="Lux Soap Bar Rose &amp; Vitamin"
                        productDesc='150 gm'
                        productPrice='52'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={soapAndBodyWashProduct_32}
                        productName="Lux Hypnotic Rose Soap Bar"
                        productDesc='75 gm'
                        productPrice='30'
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
