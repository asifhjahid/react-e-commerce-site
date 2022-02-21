import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import saucesProduct_1 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_1.webp'
import saucesProduct_10 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_10.webp'
import saucesProduct_11 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_11.webp'
import saucesProduct_12 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_12.webp'
import saucesProduct_13 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_13.webp'
import saucesProduct_14 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_14.webp'
import saucesProduct_15 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_15.webp'
import saucesProduct_16 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_16.webp'
import saucesProduct_17 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_17.webp'
import saucesProduct_18 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_18.webp'
import saucesProduct_19 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_19.webp'
import saucesProduct_2 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_2.webp'
import saucesProduct_20 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_20.webp'
import saucesProduct_21 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_21.webp'
import saucesProduct_22 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_22.webp'
import saucesProduct_23 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_23.webp'
import saucesProduct_24 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_24.webp'
import saucesProduct_25 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_25.webp'
import saucesProduct_26 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_26.webp'
import saucesProduct_27 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_27.webp'
import saucesProduct_28 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_28.webp'
import saucesProduct_29 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_29.webp'
import saucesProduct_3 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_3.webp'
import saucesProduct_30 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_30.webp'
import saucesProduct_31 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_31.webp'
import saucesProduct_32 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_32.webp'
import saucesProduct_33 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_33.webp'
import saucesProduct_34 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_34.webp'
import saucesProduct_35 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_35.webp'
import saucesProduct_36 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_36.webp'
import saucesProduct_37 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_37.webp'
import saucesProduct_38 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_38.webp'
import saucesProduct_39 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_39.webp'
import saucesProduct_4 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_4.webp'
import saucesProduct_40 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_40.webp'
import saucesProduct_41 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_41.webp'
import saucesProduct_42 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_42.webp'
import saucesProduct_43 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_43.webp'
import saucesProduct_44 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_44.webp'
import saucesProduct_45 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_45.webp'
import saucesProduct_46 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_46.webp'
import saucesProduct_47 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_47.webp'
import saucesProduct_48 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_48.webp'
import saucesProduct_49 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_49.webp'
import saucesProduct_5 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_5.webp'
import saucesProduct_50 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_50.webp'
import saucesProduct_51 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_51.webp'
import saucesProduct_52 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_52.webp'
import saucesProduct_53 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_53.webp'
import saucesProduct_54 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_54.webp'
import saucesProduct_55 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_55.webp'
import saucesProduct_56 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_56.webp'
import saucesProduct_6 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_6.webp'
import saucesProduct_7 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_7.webp'
import saucesProduct_8 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_8.webp'
import saucesProduct_9 from '../../../images/breakfastProducts/saucesProducts/saucesProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SaucesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_1}
                        productName="Ahmed Chilli Sauce"
                        productDesc='340 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_2}
                        productName="Ahmed Garlic Sauce"
                        productDesc='340 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_3}
                        productName="Ahmed Sweet Chilli Sauce"
                        productDesc='340 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_4}
                        productName="Ahmed Hot Tomato Sauce"
                        productDesc='340 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_5}
                        productName="Ahmed Soya Sauce"
                        productDesc='500 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_6}
                        productName='Ahmed Tomato Sauce'
                        productDesc='340 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_7}
                        productName='Discovery Original BBQ Sauce'
                        productDesc='290 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_8}
                        productName='Golden Harvest Tamarind Sauce'
                        productDesc='340 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_9}
                        productName="Nando's Extra Hot Peri P..."
                        productDesc='250 gm'
                        productPrice='599'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_10}
                        productName="Nando's Peri Lemon &amp; Herb..."
                        productDesc='250 gm'
                        productPrice='479'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_11}
                        productName='Pran Chilli Sauce'
                        productDesc='340 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_12}
                        productName="Pran Hot Tomato Sauce Mini"
                        productDesc='10 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_13}
                        productName='Pran Soya Sauce'
                        productDesc='300 ml'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_14}
                        productName='Pran Hot Tomato Sauce'
                        productDesc='340 gm'
                        productPrice='98'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_15}
                        productName='Reggia Napoletana Sauce'
                        productDesc='350 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_16}
                        productName='Remia Garlic Sauce'
                        productDesc='250 gm'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_17}
                        productName='Ruchi Tamarind Sauce'
                        productDesc='370 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_18}
                        productName="Ruchi Tomato Ketchup"
                        productDesc='350 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_19}
                        productName='Sajeeb Hot Tomato Sauce'
                        productDesc='340 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_20}
                        productName="Sajeeb Soya Sauce"
                        productDesc='300 ml'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_21}
                        productName="Shezan Hot Tomato Sauce"
                        productDesc='340 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_22}
                        productName="Shezan Tomato Ketchup"
                        productDesc='1 kg'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_23}
                        productName="Ahmed Green Chilli Sauce"
                        productDesc='340 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_24}
                        productName="Best Chili &amp; Garlic Sauce"
                        productDesc='320 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_25}
                        productName="Tomato Hot Sauce Ahmed"
                        productDesc='1000 gm'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_26}
                        productName="Umai BBQ Sauce"
                        productDesc='300 ml'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_27}
                        productName="Nandos Peri Sauce Medium"
                        productDesc='250 gm'
                        productPrice='475'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_28}
                        productName="Nandos Peri Sauce Hot"
                        productDesc='250 gm'
                        productPrice='505'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_29}
                        productName="Ahmed Tamarind Sauce"
                        productDesc='340 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_30}
                        productName="Pran Tomato Ketchup"
                        productDesc='340 gm'
                        productPrice='98'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_31}
                        productName="Heinz Tomato Ketchup"
                        productDesc='300 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_32}
                        productName="Heinz Tomato Ketchup"
                        productDesc='300 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_33}
                        productName="Heinz Tomato Ketchup"
                        productDesc='300 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_34}
                        productName="Heinz Chili Ketchup"
                        productDesc='300 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_35}
                        productName="Best's Chili Sauce"
                        productDesc='340 gm'
                        productPrice='127'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_36}
                        productName="Barchun Oyster Sauce"
                        productDesc='350 gm'
                        productPrice='329'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_37}
                        productName="Ahmerican Garden BBQ Sauce"
                        productDesc='510 ml'
                        productPrice='429'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_38}
                        productName="Ahmed Soya Sauce"
                        productDesc='250 ml'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_39}
                        productName="Ruchi Hot Tomato Sauce"
                        productDesc='350 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_40}
                        productName="Ruchi Red Chili Sauce"
                        productDesc='360 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_41}
                        productName="BD Food Hot Chili Sauce"
                        productDesc='1000 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_42}
                        productName="BD Chili Sauce"
                        productDesc='340 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_43}
                        productName="BD Food Hot Chili Sauce"
                        productDesc='360 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_44}
                        productName="BD Green Chili Sauce"
                        productDesc='360 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_45}
                        productName="Ahmed Tomato Sauce"
                        productDesc='550 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_46}
                        productName="Ruchi Tomato Ketchup"
                        productDesc='1000 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_47}
                        productName="Ahmed Tomato Sauce"
                        productDesc='290 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_48}
                        productName="Ahmed Tomato Ketchup"
                        productDesc='340 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_49}
                        productName="Suree Fish Sauce"
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
                        productImage={saucesProduct_50}
                        productName="Ahmed Chilli Sauce"
                        productDesc='1000 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_51}
                        productName="Pran Hot Tomato Sauce"
                        productDesc='550 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_52}
                        productName="Pran Hot Tomato Sauce"
                        productDesc='1000 gm'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_53}
                        productName="Pran Hot Tomato Sauce"
                        productDesc='750 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_54}
                        productName="Pran Hot Tomato Sauce"
                        productDesc='630 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_55}
                        productName="Sajeeb Soya Sauce"
                        productDesc='215 ml'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saucesProduct_56}
                        productName="Haiko Super Seasoning Soya Sau..."
                        productDesc='250 gm'
                        productPrice='65'
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
