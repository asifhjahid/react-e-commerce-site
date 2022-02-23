import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import readyMixProduct_1 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_1.webp'
import readyMixProduct_10 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_10.webp'
import readyMixProduct_11 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_11.webp'
import readyMixProduct_12 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_12.webp'
import readyMixProduct_13 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_13.webp'
import readyMixProduct_14 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_14.webp'
import readyMixProduct_15 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_15.webp'
import readyMixProduct_16 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_16.webp'
import readyMixProduct_17 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_17.webp'
import readyMixProduct_18 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_18.webp'
import readyMixProduct_19 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_19.webp'
import readyMixProduct_2 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_2.webp'
import readyMixProduct_20 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_20.webp'
import readyMixProduct_21 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_21.webp'
import readyMixProduct_22 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_22.webp'
import readyMixProduct_23 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_23.webp'
import readyMixProduct_24 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_24.webp'
import readyMixProduct_25 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_25.webp'
import readyMixProduct_26 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_26.webp'
import readyMixProduct_27 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_27.webp'
import readyMixProduct_28 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_28.webp'
import readyMixProduct_29 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_29.webp'
import readyMixProduct_3 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_3.webp'
import readyMixProduct_30 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_30.webp'
import readyMixProduct_31 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_31.webp'
import readyMixProduct_32 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_32.webp'
import readyMixProduct_33 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_33.webp'
import readyMixProduct_34 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_34.webp'
import readyMixProduct_35 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_35.webp'
import readyMixProduct_36 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_36.webp'
import readyMixProduct_37 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_37.webp'
import readyMixProduct_38 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_38.webp'
import readyMixProduct_39 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_39.webp'
import readyMixProduct_4 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_4.webp'
import readyMixProduct_40 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_40.webp'
import readyMixProduct_5 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_5.webp'
import readyMixProduct_6 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_6.webp'
import readyMixProduct_7 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_7.webp'
import readyMixProduct_8 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_8.webp'
import readyMixProduct_9 from '../../../images/cookingProducts/readyMixProducts/readyMixProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function ReadyMixProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_1}
                        productName="Shan Karachi Beef Biriyani"
                        productDesc='60 gm'
                        productPrice='98'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_2}
                        productName="Shan Tandoori Masala"
                        productDesc='50 gm'
                        productPrice='98'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_3}
                        productName="Radhuni Tehari Masala"
                        productDesc='40 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_4}
                        productName="Radhuni Ready Mix Meat Curry M..."
                        productDesc='100 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_5}
                        productName="Radhuni Kala Bhuna Masala"
                        productDesc='80 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_6}
                        productName='Radhuni Jorda Mix'
                        productDesc='400 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_7}
                        productName='Radhuni Hyderabadi Biryani Mas...'
                        productDesc='45 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_8}
                        productName='Radhuni Fish Curry Masala'
                        productDesc='100 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_9}
                        productName="Radhuni Falooda Mix (Mango)"
                        productDesc='250 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_10}
                        productName="Radhuni Chicken Tandoori Masal..."
                        productDesc='50 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_11}
                        productName='Radhuni Chatpoti Masala'
                        productDesc='50 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_12}
                        productName="Radhuni Biryani Masala"
                        productDesc='40 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_13}
                        productName='Radhuni Borhani Masala'
                        productDesc='50 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_14}
                        productName='Pran Fish Masala'
                        productDesc='100 gm'
                        productPrice='58'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_15}
                        productName='Nestle Maggi Shaad-e Magic Sea...'
                        productDesc='4 gm'
                        productPrice='5'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_16}
                        productName='Mama Instant Fried Rice Thai R...'
                        productDesc='80 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_17}
                        productName='Knorr Krispy Fried Chicken Mix'
                        productDesc='75 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_18}
                        productName="Ahmed Meat Masala"
                        productDesc='100 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_19}
                        productName="Ahmed Chicken Masala"
                        productDesc='100 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_20}
                        productName="Ahmed Chatpoti Masala"
                        productDesc='50 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_21}
                        productName="Ahmed Khichuri Mixed"
                        productDesc='500 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_22}
                        productName="Ahmed Firni Mix"
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
                        productImage={readyMixProduct_23}
                        productName="ACI Pure Shahi Biryani Masala"
                        productDesc='40 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_24}
                        productName="ACI Pure Kheer Mix"
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
                        productImage={readyMixProduct_25}
                        productName="Radhuni Turmeric Powder"
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
                        productImage={readyMixProduct_26}
                        productName="Radhuni Khichuri Mix"
                        productDesc='500 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_27}
                        productName="Radhuni Halim Mix"
                        productDesc='200 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_28}
                        productName="Radhuni BBQ Masala"
                        productDesc='50 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_29}
                        productName="Radhuni Biryani Masala"
                        productDesc='40 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_30}
                        productName="Radhuni Ready Mix Chicken Curr..."
                        productDesc='100 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_31}
                        productName="Radhuni Mezbani Beef Curry Mas..."
                        productDesc='68 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_32}
                        productName="Radhuni Firni Mix"
                        productDesc='150 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_33}
                        productName="Radhuni Kheer Mix"
                        productDesc='150 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_34}
                        productName="Radhuni Kacchi Biriyani Masala"
                        productDesc='40 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_35}
                        productName="Radhuni Korma Masala"
                        productDesc='30 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_36}
                        productName="Radhuni Jira Gura"
                        productDesc='100 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_37}
                        productName="Radhuni Cumin Pow..."
                        productDesc='50 gm'
                        productPrice='48'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_38}
                        productName="Radhuni Coriander Po..."
                        productDesc='200 gm'
                        productPrice='63'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_39}
                        productName="Radhuni Coriander Po..."
                        productDesc='50 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={readyMixProduct_40}
                        productName="Radhuni Coriander Po..."
                        productDesc='280 gm'
                        productPrice='100'
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
