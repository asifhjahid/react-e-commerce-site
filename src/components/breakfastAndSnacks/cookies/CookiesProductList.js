import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import cookieProduct_1 from '../../../images/cookiesProducts/cookieProduct_1.jpg'
import cookieProduct_10 from '../../../images/cookiesProducts/cookieProduct_10.jpg'
import cookieProduct_11 from '../../../images/cookiesProducts/cookieProduct_11.jpg'
import cookieProduct_12 from '../../../images/cookiesProducts/cookieProduct_12.jpg'
import cookieProduct_13 from '../../../images/cookiesProducts/cookieProduct_13.jpg'
import cookieProduct_14 from '../../../images/cookiesProducts/cookieProduct_14.jpg'
import cookieProduct_15 from '../../../images/cookiesProducts/cookieProduct_15.jpg'
import cookieProduct_16 from '../../../images/cookiesProducts/cookieProduct_16.jpg'
import cookieProduct_17 from '../../../images/cookiesProducts/cookieProduct_17.jpg'
import cookieProduct_18 from '../../../images/cookiesProducts/cookieProduct_18.jpg'
import cookieProduct_19 from '../../../images/cookiesProducts/cookieProduct_19.jpg'
import cookieProduct_2 from '../../../images/cookiesProducts/cookieProduct_2.jpg'
import cookieProduct_20 from '../../../images/cookiesProducts/cookieProduct_20.jpg'
import cookieProduct_21 from '../../../images/cookiesProducts/cookieProduct_21.jpg'
import cookieProduct_22 from '../../../images/cookiesProducts/cookieProduct_22.jpg'
import cookieProduct_23 from '../../../images/cookiesProducts/cookieProduct_23.jpg'
import cookieProduct_24 from '../../../images/cookiesProducts/cookieProduct_24.jpg'
import cookieProduct_25 from '../../../images/cookiesProducts/cookieProduct_25.jpg'
import cookieProduct_26 from '../../../images/cookiesProducts/cookieProduct_26.jpg'
import cookieProduct_27 from '../../../images/cookiesProducts/cookieProduct_27.jpg'
import cookieProduct_28 from '../../../images/cookiesProducts/cookieProduct_28.jpg'
import cookieProduct_29 from '../../../images/cookiesProducts/cookieProduct_29.jpg'
import cookieProduct_3 from '../../../images/cookiesProducts/cookieProduct_3.jpg'
import cookieProduct_30 from '../../../images/cookiesProducts/cookieProduct_30.jpg'
import cookieProduct_31 from '../../../images/cookiesProducts/cookieProduct_31.jpg'
import cookieProduct_32 from '../../../images/cookiesProducts/cookieProduct_32.jpg'
import cookieProduct_33 from '../../../images/cookiesProducts/cookieProduct_33.jpg'
import cookieProduct_34 from '../../../images/cookiesProducts/cookieProduct_34.jpg'
import cookieProduct_35 from '../../../images/cookiesProducts/cookieProduct_35.jpg'
import cookieProduct_36 from '../../../images/cookiesProducts/cookieProduct_36.jpg'
import cookieProduct_37 from '../../../images/cookiesProducts/cookieProduct_37.jpg'
import cookieProduct_38 from '../../../images/cookiesProducts/cookieProduct_38.jpg'
import cookieProduct_39 from '../../../images/cookiesProducts/cookieProduct_39.jpg'
import cookieProduct_4 from '../../../images/cookiesProducts/cookieProduct_4.jpg'
import cookieProduct_40 from '../../../images/cookiesProducts/cookieProduct_40.jpg'
import cookieProduct_41 from '../../../images/cookiesProducts/cookieProduct_41.jpg'
import cookieProduct_42 from '../../../images/cookiesProducts/cookieProduct_42.jpg'
import cookieProduct_43 from '../../../images/cookiesProducts/cookieProduct_43.jpg'
import cookieProduct_44 from '../../../images/cookiesProducts/cookieProduct_44.jpg'
import cookieProduct_5 from '../../../images/cookiesProducts/cookieProduct_5.jpg'
import cookieProduct_6 from '../../../images/cookiesProducts/cookieProduct_6.jpg'
import cookieProduct_7 from '../../../images/cookiesProducts/cookieProduct_7.jpg'
import cookieProduct_8 from '../../../images/cookiesProducts/cookieProduct_8.jpg'
import cookieProduct_9 from '../../../images/cookiesProducts/cookieProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function CcookiesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_1}
                        productName="Ispahani Butterful Biscuits"
                        productDesc='300 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_2}
                        productName="Danish Sweet Toast Biscuits"
                        productDesc='350 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_3}
                        productName="Pran Special Toast"
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_4}
                        productName="Olympic Nutty Real Peanut Bisc..."
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_5}
                        productName="Olympic First Choice Salted Bi..."
                        productDesc='100 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_6}
                        productName='Olympic Digestive Fiber B...'
                        productDesc='125 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_7}
                        productName='Bisk Club Potata Spicy Flavore'
                        productDesc='100 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_8}
                        productName='Dekko Horlicks Cookies Biscuit'
                        productDesc='330 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_9}
                        productName="Ifad Cheesy Bites Family Pack"
                        productDesc='300 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_10}
                        productName="Haque Sor Malai Milk &amp; Butter..."
                        productDesc='210 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_11}
                        productName='Haques Mr. Cookie Biscuit'
                        productDesc='50 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_12}
                        productName="Haque Milk Chocolate Digestive..."
                        productDesc='145 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_13}
                        productName='Haque Dark Chocolate Digestive...'
                        productDesc='125 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_14}
                        productName='Danish Toast Biscuits'
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_15}
                        productName='Danish Doreo Black Chocolate S...'
                        productDesc='320 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_16}
                        productName='CBL Munchee Chocolate Fingers'
                        productDesc='90 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_17}
                        productName='Kishwan Magica Choco Filled'
                        productDesc='180 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_18}
                        productName="Cadbury Oreo Original Sandwich..."
                        productDesc='120 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_19}
                        productName="Tiffany Sugar Free Chocolate C..."
                        productDesc='162 gm'
                        productPrice='259'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_20}
                        productName="Fit Crackers Milk Flavour"
                        productDesc='60 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_21}
                        productName="Cocola Champion Chocolate Crea..."
                        productDesc='75 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_22}
                        productName="Haque Mr. Cookie Biscuit"
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_23}
                        productName="Black &amp; Brown Cookies"
                        productDesc='each'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_24}
                        productName="Orion Custrad Pie"
                        productDesc='138 gm'
                        productPrice='295'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_25}
                        productName="Orion Choco Pie"
                        productDesc='260 gm'
                        productPrice='512'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_26}
                        productName="Orion choco Pie"
                        productDesc='180 gm'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_27}
                        productName="Biscuits Kishwan Sugar Free Co..."
                        productDesc='300 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_28}
                        productName="Haque Butter Nutty Biscuits"
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_29}
                        productName="Kishwan Saltine Salted Cookies"
                        productDesc='300 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_30}
                        productName="Kishwan Ovaltine Biscuit"
                        productDesc='325 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_31}
                        productName="Kishwan Rio Cashew and Peanut..."
                        productDesc='230 gm'
                        productPrice='62'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_32}
                        productName="Kishwan Horlicks Biscuit"
                        productDesc='350 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_33}
                        productName="Kishwan Grisbi Chocolate Biscui..."
                        productDesc='300 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_34}
                        productName="Kishwan Butter Cookies"
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_35}
                        productName="Haque Mr. Salty Cookie"
                        productDesc='230 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_36}
                        productName="Olympic Tim Tim Pineapple Bisc..."
                        productDesc='272 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_37}
                        productName="Olympic Salted Biscuit"
                        productDesc='205 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_38}
                        productName="Olympic Biscotti Cookies"
                        productDesc='240 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_39}
                        productName="Romania Lexus Zero Crackers"
                        productDesc='228 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_40}
                        productName="Olympic Multi Grain Cookies"
                        productDesc='150 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_41}
                        productName="CBL Munchee Chocolate Fingers"
                        productDesc='90 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_42}
                        productName="CBL Munchee Wafer Stix Ultra C..."
                        productDesc='200 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_43}
                        productName="CBL Munchee Stix Strawberry FI..."
                        productDesc='200 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cookieProduct_44}
                        productName="Julie's Love Letters Chocolate..."
                        productDesc='100 gm'
                        productPrice='325'
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
