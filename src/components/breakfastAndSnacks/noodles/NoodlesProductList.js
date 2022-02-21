import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import noodleProduct_1 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_1.jpg'
import noodleProduct_10 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_10.jpg'
import noodleProduct_11 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_11.jpg'
import noodleProduct_12 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_12.jpg'
import noodleProduct_13 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_13.jpg'
import noodleProduct_14 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_14.jpg'
import noodleProduct_15 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_15.jpg'
import noodleProduct_16 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_16.jpg'
import noodleProduct_17 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_17.jpg'
import noodleProduct_18 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_18.jpg'
import noodleProduct_19 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_19.jpg'
import noodleProduct_2 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_2.jpg'
import noodleProduct_20 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_20.jpg'
import noodleProduct_21 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_21.jpg'
import noodleProduct_22 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_22.jpg'
import noodleProduct_23 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_23.jpg'
import noodleProduct_24 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_24.jpg'
import noodleProduct_25 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_25.jpg'
import noodleProduct_26 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_26.jpg'
import noodleProduct_27 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_27.jpg'
import noodleProduct_28 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_28.jpg'
import noodleProduct_29 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_29.jpg'
import noodleProduct_3 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_3.jpg'
import noodleProduct_30 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_30.jpg'
import noodleProduct_31 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_31.jpg'
import noodleProduct_32 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_32.jpg'
import noodleProduct_33 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_33.jpg'
import noodleProduct_34 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_34.jpg'
import noodleProduct_35 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_35.jpg'
import noodleProduct_36 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_36.jpg'
import noodleProduct_37 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_37.jpg'
import noodleProduct_38 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_38.jpg'
import noodleProduct_39 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_39.jpg'
import noodleProduct_4 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_4.jpg'
import noodleProduct_40 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_40.jpg'
import noodleProduct_41 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_41.jpg'
import noodleProduct_42 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_42.jpg'
import noodleProduct_43 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_43.jpg'
import noodleProduct_44 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_44.jpg'
import noodleProduct_45 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_45.jpg'
import noodleProduct_46 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_46.jpg'
import noodleProduct_47 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_47.jpg'
import noodleProduct_48 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_48.jpg'
import noodleProduct_49 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_49.jpg'
import noodleProduct_5 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_5.jpg'
import noodleProduct_50 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_50.jpg'
import noodleProduct_51 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_51.jpg'
import noodleProduct_52 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_52.jpg'
import noodleProduct_6 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_6.jpg'
import noodleProduct_7 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_7.jpg'
import noodleProduct_8 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_8.jpg'
import noodleProduct_9 from '../../../images/breakfastProducts/noodlesProducts/noodleProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function NoodlesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_1}
                        productName="Cocola Beef Bhuna Bowl Noodles"
                        productDesc='65 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_2}
                        productName="Cocola Cook Masala Noodles"
                        productDesc='400 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_3}
                        productName="Cocola Egg Noodles"
                        productDesc='180 gm'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_4}
                        productName="Nestle Maggi Fusian Bangkok Sw..."
                        productDesc='4 pack'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_5}
                        productName='Ifad Eggy Stick Noodles'
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_6}
                        productName='Doodles Masala Noodles'
                        productDesc='8 pcs'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_7}
                        productName='Ifad Eggy Instant Masala Noodl...'
                        productDesc='300 gm'
                        productPrice='68'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_8}
                        productName='Ifad Eggy Instant Masala Noodle...'
                        productDesc='480 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_9}
                        productName="Kishwan Noodles Mom's Magic Fa..."
                        productDesc='780 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_10}
                        productName="Nestle Maggi 2-Minute Masala I..."
                        productDesc='4 pack'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_11}
                        productName='Nestle Maggi Masala Blast Nood...'
                        productDesc='8 pack'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_12}
                        productName="Mama Cup Noodles Chicken"
                        productDesc='each'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_13}
                        productName='Mama Instant Noodles Hot &amp; Spi...'
                        productDesc='248 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_14}
                        productName='Mama Noodles Shrimp Flavour 4...'
                        productDesc='248 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_15}
                        productName='Panda Authentic Chinese Noodle...'
                        productDesc='300'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_16}
                        productName='Sajeeb Tandoori Chicken Noodle...'
                        productDesc='170'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_17}
                        productName='Dekko Egg Noodles'
                        productDesc='170 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_18}
                        productName="Ifad Eggy Instant Masala Noodl..."
                        productDesc='480 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_19}
                        productName='Arku Chicken Tandoori Noodles'
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_20}
                        productName="Arku Egg Noodles"
                        productDesc='180'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_21}
                        productName="Ifad Eggy Instant Chicken Nood..."
                        productDesc='480 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_22}
                        productName="ACI Pure Stick Noodles"
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_23}
                        productName="Cocola Chicken Tandury Noodles..."
                        productDesc='400 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_24}
                        productName="Kolson Egg Noodles"
                        productDesc='170 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_25}
                        productName="Foodie Masala Noodles 8 Pack 5..."
                        productDesc='8 pack'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_26}
                        productName="Fresh Stick Noodles Chicken Ma..."
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_27}
                        productName="Fresh Stick Noodles Egg Masala..."
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_28}
                        productName="Leung Hung Chinese Egg Dragon..."
                        productDesc='300 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_29}
                        productName="Dragon Brand Noodles"
                        productDesc='300 gm'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_30}
                        productName="ACI Pure Thai Noodles"
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_31}
                        productName="ACI Pure Oriental Thai"
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_32}
                        productName="Doodles Stick Noodles"
                        productDesc='180 gm'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_33}
                        productName="Sajeeb Noodles Thai Flavor"
                        productDesc='170 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_34}
                        productName="Sajeeb Egg Noodles"
                        productDesc='170 gm'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_35}
                        productName="Cocola Chicken Masala Noodles..."
                        productDesc='715 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_36}
                        productName="Bashundhara Stick Noodles Masa..."
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_37}
                        productName="ACI Pure Stick Noodles Chicken..."
                        productDesc='180 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_38}
                        productName="Cocola Bowl Noodles Egg &amp; Chic..."
                        productDesc='70 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_39}
                        productName="Samyang Jiajang Hot Chicken No..."
                        productDesc='600 gm'
                        productPrice='549'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_40}
                        productName="Mama Os Instant Noodles Chicke..."
                        productDesc='60 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_41}
                        productName="Mama Oriental Style Instant No..."
                        productDesc='60 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_42}
                        productName="Mama Os Instant Noodles Shrimp..."
                        productDesc='60 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_43}
                        productName="Mama Ok Instant Noodle Fried S..."
                        productDesc='85 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_44}
                        productName="Chopstick Yummy Masala Instant..."
                        productDesc='248 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_45}
                        productName="Mr. Noodles Magic Masala Easy I..."
                        productDesc='8 packs'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_46}
                        productName="Nestle Maggi 2-Minute Noodles"
                        productDesc='12 pack'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_47}
                        productName="Mama Oriental Style Instant No..."
                        productDesc='8 pack'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_48}
                        productName="Mama Oriental Style Instant No..."
                        productDesc='8 pack'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_49}
                        productName="Mama Oriental Style Instant No..."
                        productDesc='496 gm'
                        productPrice='128'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_50}
                        productName="Mama Chicken Flavour Noodles"
                        productDesc='8 pack'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_51}
                        productName="Nestle Maggi Masala blast"
                        productDesc='4 pack'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={noodleProduct_52}
                        productName="Nestle Maggi 2-Minute Noodles..."
                        productDesc='4 pack'
                        productPrice='70'
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
