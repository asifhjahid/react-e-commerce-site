import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import vegetablesProduct_1 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_1.webp'
import vegetablesProduct_10 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_10.webp'
import vegetablesProduct_11 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_11.webp'
import vegetablesProduct_12 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_12.webp'
import vegetablesProduct_13 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_13.webp'
import vegetablesProduct_14 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_14.webp'
import vegetablesProduct_15 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_15.webp'
import vegetablesProduct_16 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_16.webp'
import vegetablesProduct_17 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_17.webp'
import vegetablesProduct_18 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_18.webp'
import vegetablesProduct_19 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_19.webp'
import vegetablesProduct_2 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_2.webp'
import vegetablesProduct_20 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_20.webp'
import vegetablesProduct_21 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_21.webp'
import vegetablesProduct_22 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_22.webp'
import vegetablesProduct_23 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_23.webp'
import vegetablesProduct_24 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_24.webp'
import vegetablesProduct_25 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_25.webp'
import vegetablesProduct_26 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_26.webp'
import vegetablesProduct_27 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_27.webp'
import vegetablesProduct_28 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_28.webp'
import vegetablesProduct_29 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_29.webp'
import vegetablesProduct_3 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_3.webp'
import vegetablesProduct_30 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_30.webp'
import vegetablesProduct_31 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_31.webp'
import vegetablesProduct_32 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_32.webp'
import vegetablesProduct_33 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_33.webp'
import vegetablesProduct_34 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_34.webp'
import vegetablesProduct_35 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_35.webp'
import vegetablesProduct_36 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_36.webp'
import vegetablesProduct_37 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_37.webp'
import vegetablesProduct_38 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_38.webp'
import vegetablesProduct_39 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_39.webp'
import vegetablesProduct_4 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_4.webp'
import vegetablesProduct_40 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_40.webp'
import vegetablesProduct_5 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_5.webp'
import vegetablesProduct_6 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_6.webp'
import vegetablesProduct_7 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_7.webp'
import vegetablesProduct_8 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_8.webp'
import vegetablesProduct_9 from '../../../images/fruitsAndVegetablesProducts/vegetablesProducts/vegetablesProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function VegetablesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_1}
                        productName="Water Spinach (Kolmi Shak)"
                        productDesc='2 bundle'
                        productPrice='22'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_2}
                        productName="Sweet Pumpkin"
                        productDesc='each (3kg+)'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_3}
                        productName="Snake Gourd"
                        productDesc='500 gm'
                        productPrice='34'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_4}
                        productName="Red Tomato"
                        productDesc='500 gm'
                        productPrice='19'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_5}
                        productName="Red Spinach"
                        productDesc='2 bundle'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_6}
                        productName='Pui Shak'
                        productDesc='1 bundle'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_7}
                        productName='Potato White Diamond'
                        productDesc='1 kg'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_8}
                        productName='Onion Red (Imported)'
                        productDesc='1 kg'
                        productPrice='58'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_9}
                        productName="Mint Leaves"
                        productDesc='100 gm'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_10}
                        productName="Long Brinjal"
                        productDesc='500 gm'
                        productPrice='34'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_11}
                        productName='Lettuce Leaves'
                        productDesc='100 gm'
                        productPrice='19'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_12}
                        productName="Ladies Finger"
                        productDesc='500 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_13}
                        productName='Gourd'
                        productDesc='each'
                        productPrice='78'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_14}
                        productName='Coriander Leaves (Dhonia Pata)'
                        productDesc='100 gm'
                        productPrice='8'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_15}
                        productName='Carrot Deshi'
                        productDesc='500 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_16}
                        productName='Banana Green'
                        productDesc='4 pcs'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_17}
                        productName='Lao Shak'
                        productDesc='1 bundle'
                        productPrice='38'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_18}
                        productName="Kochu Shak"
                        productDesc='1 bundle'
                        productPrice='19'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_19}
                        productName="Data Shak"
                        productDesc='1 bundle'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_20}
                        productName="Taro Red (Kochu)"
                        productDesc='1 pcs'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_21}
                        productName="Jhinga"
                        productDesc='500 gm'
                        productPrice='49'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_22}
                        productName="Dhundul"
                        productDesc='500 gm'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_23}
                        productName="Water Pumpkin (Jali Kumra )"
                        productDesc='1 pcs'
                        productPrice='58'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_24}
                        productName="Round Brinjal"
                        productDesc='500 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_25}
                        productName="Brinjal Green"
                        productDesc='500 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_26}
                        productName="Capsicum Yellow"
                        productDesc='500 gm'
                        productPrice='255'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_27}
                        productName="Capsicum Red"
                        productDesc='500 gm'
                        productPrice='255'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_28}
                        productName="Green Papaya"
                        productDesc='1 kg'
                        productPrice='27'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_29}
                        productName="Lemon Round"
                        productDesc='4 pcs'
                        productPrice='29'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_30}
                        productName="Lemon Lomba"
                        productDesc='4 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_31}
                        productName="Lemon Kagozi"
                        productDesc='4 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_32}
                        productName="Cucumber Hybrid"
                        productDesc='500 gm'
                        productPrice='36'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_33}
                        productName="Ginger Imported"
                        productDesc='500 gm'
                        productPrice='58'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_34}
                        productName="Green Chili"
                        productDesc='250 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_35}
                        productName="Potato Red Round"
                        productDesc='1 kg'
                        productPrice='28'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_36}
                        productName="Garlic Imported"
                        productDesc='500 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_37}
                        productName="Sweet Potato (Misti Alu)"
                        productDesc='1 kg'
                        productPrice='37'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_38}
                        productName="Green Tomato"
                        productDesc='1 kg'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_39}
                        productName="Flat Bean"
                        productDesc='500 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={vegetablesProduct_40}
                        productName="Broccoli"
                        productDesc='each'
                        productPrice='28'
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
