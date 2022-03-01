import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import deodorantProduct_1 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_1.jpg'
import deodorantProduct_10 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_10.jpg'
import deodorantProduct_11 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_11.jpg'
import deodorantProduct_12 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_12.jpg'
import deodorantProduct_13 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_13.jpg'
import deodorantProduct_14 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_14.jpg'
import deodorantProduct_15 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_15.jpg'
import deodorantProduct_16 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_16.jpg'
import deodorantProduct_17 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_17.jpg'
import deodorantProduct_18 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_18.jpg'
import deodorantProduct_19 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_19.jpg'
import deodorantProduct_2 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_2.jpg'
import deodorantProduct_20 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_20.jpg'
import deodorantProduct_21 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_21.jpg'
import deodorantProduct_22 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_22.jpg'
import deodorantProduct_23 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_23.jpg'
import deodorantProduct_24 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_24.jpg'
import deodorantProduct_25 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_25.jpg'
import deodorantProduct_26 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_26.jpg'
import deodorantProduct_27 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_27.jpg'
import deodorantProduct_28 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_28.jpg'
import deodorantProduct_29 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_29.jpg'
import deodorantProduct_3 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_3.jpg'
import deodorantProduct_30 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_30.jpg'
import deodorantProduct_31 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_31.jpg'
import deodorantProduct_32 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_32.jpg'
import deodorantProduct_4 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_4.jpg'
import deodorantProduct_5 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_5.jpg'
import deodorantProduct_6 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_6.jpg'
import deodorantProduct_7 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_7.jpg'
import deodorantProduct_8 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_8.jpg'
import deodorantProduct_9 from '../../../images/personalCareProducts/deodorantProducts/deodorantProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function DeodorantProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_1}
                        productName="AXE Signature Intense Body Per..."
                        productDesc='17 ml'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_2}
                        productName="AXE Ticket Perfume Intense"
                        productDesc='17 ml'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_3}
                        productName="AXE Musk Deodorant Body Spray..."
                        productDesc='150 ml'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_4}
                        productName="AXE Dark Temptation Deodorant"
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
                        productImage={deodorantProduct_5}
                        productName="Colour Me Red Body Spray For W..."
                        productDesc='150 ml'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_6}
                        productName='Colour Me Pink Body Spray For...'
                        productDesc='150 ml'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_7}
                        productName='Colour Me Green Body Spray For...'
                        productDesc='150 ml'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_8}
                        productName='Dove Go Fresh Cucumber &amp; Green...'
                        productDesc='250 ml'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_9}
                        productName="Dove Invisible Dry Antiperspir..."
                        productDesc='40 ml'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_10}
                        productName="Engage Woman Body Spray"
                        productDesc='150 ml'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_11}
                        productName="Engage Men's Classic Woody Poc"
                        productDesc='18 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_12}
                        productName="Engage Body Spray For Women"
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
                        productImage={deodorantProduct_13}
                        productName='Fa Pink Passion Perfume For Wo...'
                        productDesc='200 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_14}
                        productName='Fogg Body Spray Victor'
                        productDesc='120 ml'
                        productPrice='325'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_15}
                        productName='Fogg Body Spray Napoleon'
                        productDesc='120 ml'
                        productPrice='325'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_16}
                        productName='Lafz Rhuz Khos Body Spray'
                        productDesc='100 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_17}
                        productName="Lafz Halal Body Spray Kismet"
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
                        productImage={deodorantProduct_18}
                        productName="Lafz Men Kayani Dastoor Body S..."
                        productDesc='100 ml'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_19}
                        productName="Rexona Men Roll On Quantum"
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
                        productImage={deodorantProduct_20}
                        productName="Rexona Men Roll On V8"
                        productDesc='50 ml'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_21}
                        productName="Nivea Pearl &amp; Beauty 48h Roll..."
                        productDesc='50 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_22}
                        productName="Nivea Pearl &amp; Beauty Body Spra..."
                        productDesc='150 ml'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_23}
                        productName="Nivea Men Fresh Actice Roll On"
                        productDesc='50 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_24}
                        productName="Nivea Men 48h Fresh Active Deo..."
                        productDesc='150 ml'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_25}
                        productName="Deodorant Roll On Fa Pink Pass"
                        productDesc='50 ml'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_26}
                        productName="Fogg Body Spray Paradise"
                        productDesc='120 ml'
                        productPrice='315'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_27}
                        productName="Wild Stone Legend Body Deodora..."
                        productDesc='150 ml'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_28}
                        productName="Wild Stone Red Body Deodorant"
                        productDesc='150 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_29}
                        productName="Nivea Pearl &amp; Beauty Deodorant"
                        productDesc='50 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_30}
                        productName="Nivea Protect &amp; Care Deodorant"
                        productDesc='50 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_31}
                        productName="Fa Invisible Power Deodorant"
                        productDesc='50 ml'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={deodorantProduct_32}
                        productName="Nivea Men Whitening Deodorant..."
                        productDesc='50 ml'
                        productPrice='270'
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
