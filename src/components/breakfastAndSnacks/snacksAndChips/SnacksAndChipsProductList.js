import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import snacksAndChipsProduct_1 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_1.jpg'
import snacksAndChipsProduct_10 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_10.jpg'
import snacksAndChipsProduct_11 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_11.jpg'
import snacksAndChipsProduct_12 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_12.jpg'
import snacksAndChipsProduct_13 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_13.jpg'
import snacksAndChipsProduct_14 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_14.jpg'
import snacksAndChipsProduct_15 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_15.jpg'
import snacksAndChipsProduct_16 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_16.jpg'
import snacksAndChipsProduct_17 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_17.jpg'
import snacksAndChipsProduct_18 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_18.jpg'
import snacksAndChipsProduct_19 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_19.jpg'
import snacksAndChipsProduct_2 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_2.jpg'
import snacksAndChipsProduct_20 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_20.jpg'
import snacksAndChipsProduct_21 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_21.jpg'
import snacksAndChipsProduct_22 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_22.jpg'
import snacksAndChipsProduct_23 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_23.jpg'
import snacksAndChipsProduct_24 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_24.jpg'
import snacksAndChipsProduct_25 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_25.jpg'
import snacksAndChipsProduct_26 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_26.jpg'
import snacksAndChipsProduct_27 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_27.jpg'
import snacksAndChipsProduct_28 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_28.jpg'
import snacksAndChipsProduct_29 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_29.jpg'
import snacksAndChipsProduct_3 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_3.jpg'
import snacksAndChipsProduct_30 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_30.jpg'
import snacksAndChipsProduct_31 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_31.jpg'
import snacksAndChipsProduct_32 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_32.jpg'
import snacksAndChipsProduct_33 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_33.jpg'
import snacksAndChipsProduct_34 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_34.jpg'
import snacksAndChipsProduct_35 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_35.jpg'
import snacksAndChipsProduct_36 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_36.jpg'
import snacksAndChipsProduct_37 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_37.jpg'
import snacksAndChipsProduct_38 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_38.jpg'
import snacksAndChipsProduct_39 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_39.jpg'
import snacksAndChipsProduct_4 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_4.jpg'
import snacksAndChipsProduct_40 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_40.jpg'
import snacksAndChipsProduct_5 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_5.jpg'
import snacksAndChipsProduct_6 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_6.jpg'
import snacksAndChipsProduct_7 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_7.jpg'
import snacksAndChipsProduct_8 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_8.jpg'
import snacksAndChipsProduct_9 from '../../../images/snacksAndChipsProducts/snacksAndChipsProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SnacksAndChipsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_1}
                        productName="Meridian Real Thai Shrimp Chip..."
                        productDesc='15 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_2}
                        productName="Sun Chips Salt &amp; Pepper"
                        productDesc='22 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_3}
                        productName="Pringles Original Potato Chips"
                        productDesc='147 gm'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_4}
                        productName="Pringles BBQ Potato Chips"
                        productDesc='158 gm'
                        productPrice='259'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_5}
                        productName="Pringles Cheddar Cheese"
                        productDesc='158 gm'
                        productPrice='249'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_6}
                        productName='Bombay Sweets Mr. Twist'
                        productDesc='22 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_7}
                        productName='Kurkure Masala Manch Chips'
                        productDesc='45 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_8}
                        productName='Ifad Wavy Chips (Bar-B-Q)'
                        productDesc='30 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_9}
                        productName="Sun Chips Mix Masala"
                        productDesc='38'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_10}
                        productName="Kurkure Chilli Chatka Chips"
                        productDesc='45 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_11}
                        productName='Sun Chips Wasabi'
                        productDesc='38 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_12}
                        productName="Detos Chicken Wings Chips"
                        productDesc='30 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_13}
                        productName='Bombay Sweets Alooz Spanish To...'
                        productDesc='22 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_14}
                        productName='Kurkure American Style Cream &amp; ...'
                        productDesc='45 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_15}
                        productName='Pringles Potato Chips Sour Cre...'
                        productDesc='158 gm'
                        productPrice='259'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_16}
                        productName='Cheese puff'
                        productDesc='each'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_17}
                        productName='Bombay Sweets Potato Crackers'
                        productDesc='22 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_18}
                        productName="Bombay Sweets Ring Chips"
                        productDesc='20 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_19}
                        productName="Ruchi BBQ Chanachur"
                        productDesc='500 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_20}
                        productName="Ruchi BBQ Chanachur"
                        productDesc='30 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_21}
                        productName="Ruchi BBQ Chanachur"
                        productDesc='300 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_22}
                        productName="Ruchi Premium Mix Chanachur"
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
                        productImage={snacksAndChipsProduct_23}
                        productName="Bombay Sweets Chanachur"
                        productDesc='300'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_24}
                        productName="Bombay Sweets Chanachur"
                        productDesc='150 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_25}
                        productName="Bombay Sweets Chanachur Tandoo..."
                        productDesc='300 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_26}
                        productName="Bombay Sweets Dalmoth Chanachu..."
                        productDesc='150 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_27}
                        productName="Bombay Sweets Dalmoth Chanachur..."
                        productDesc='300 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_28}
                        productName="Meridian Nimki"
                        productDesc='18 gm'
                        productPrice='5'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_29}
                        productName="Bombay Sweets Aha Muri"
                        productDesc='250 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_30}
                        productName="Ruchi Muri"
                        productDesc='250 gm'
                        productPrice='36'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_31}
                        productName="Ruchi Puffed Rice (Muri)"
                        productDesc='500 gm'
                        productPrice='63'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_32}
                        productName="Muri"
                        productDesc='250 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_33}
                        productName="Muri"
                        productDesc='500 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_34}
                        productName="Dan Cake Swiss Roll Chocolate"
                        productDesc='200 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_35}
                        productName="Hajmola Imli 100 Tablets"
                        productDesc='74 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_36}
                        productName="Hajmola Regular 100 Tablets"
                        productDesc='74 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_37}
                        productName="Sun Chips Tomato Tango"
                        productDesc='80 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_38}
                        productName="Sun Chips Mix Masala"
                        productDesc='80 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_39}
                        productName="Lay's American Style Cream &amp; O..."
                        productDesc='30 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={snacksAndChipsProduct_40}
                        productName="Fox's Crystal Clear Fruits Can..."
                        productDesc='90 gm'
                        productPrice='140'
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
