import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import powderDrinksProduct_1 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_1.webp'
import powderDrinksProduct_10 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_10.webp'
import powderDrinksProduct_11 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_11.webp'
import powderDrinksProduct_12 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_12.webp'
import powderDrinksProduct_13 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_13.webp'
import powderDrinksProduct_14 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_14.webp'
import powderDrinksProduct_15 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_15.webp'
import powderDrinksProduct_16 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_16.webp'
import powderDrinksProduct_17 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_17.webp'
import powderDrinksProduct_18 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_18.webp'
import powderDrinksProduct_19 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_19.webp'
import powderDrinksProduct_2 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_2.webp'
import powderDrinksProduct_20 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_20.webp'
import powderDrinksProduct_21 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_21.webp'
import powderDrinksProduct_22 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_22.webp'
import powderDrinksProduct_23 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_23.webp'
import powderDrinksProduct_24 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_24.webp'
import powderDrinksProduct_25 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_25.webp'
import powderDrinksProduct_26 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_26.webp'
import powderDrinksProduct_27 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_27.webp'
import powderDrinksProduct_28 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_28.webp'
import powderDrinksProduct_29 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_29.webp'
import powderDrinksProduct_3 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_3.webp'
import powderDrinksProduct_30 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_30.webp'
import powderDrinksProduct_31 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_31.webp'
import powderDrinksProduct_32 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_32.webp'
import powderDrinksProduct_33 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_33.webp'
import powderDrinksProduct_4 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_4.webp'
import powderDrinksProduct_5 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_5.webp'
import powderDrinksProduct_6 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_6.webp'
import powderDrinksProduct_7 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_7.webp'
import powderDrinksProduct_8 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_8.webp'
import powderDrinksProduct_9 from '../../../images/beveragesProducts/powderDrinksProducts/powderDrinksProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function PowderDrinksProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_1}
                        productName="Ispi Mango"
                        productDesc='750 gm'
                        productPrice='410'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_2}
                        productName="Ispi Orange"
                        productDesc='750 gm'
                        productPrice='410'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_3}
                        productName="Rasna Mango Jar"
                        productDesc='750 gm'
                        productPrice='530'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_4}
                        productName="Rasna Orange Jar"
                        productDesc='750 gm'
                        productPrice='530'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_5}
                        productName="Foster Clarks Mango"
                        productDesc='750 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_6}
                        productName='Dekko Fruit Funda Mango'
                        productDesc='250 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_7}
                        productName='SMC Taste Me Mango Box'
                        productDesc='200 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_8}
                        productName='Ispi Instant Powder Drink (Ora...'
                        productDesc='500 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_9}
                        productName="Ispi Instant Powder Drink (Ora..."
                        productDesc='250 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_10}
                        productName="Ispi Soft Drinks Powder (Mango..."
                        productDesc='500 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_11}
                        productName='SMC Taste Me Orange Box'
                        productDesc='200 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_12}
                        productName="Tang Orange Powder"
                        productDesc='750 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_13}
                        productName='Tang Orange Flavoured Instant...'
                        productDesc='250 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_14}
                        productName='Tang Orange Powder'
                        productDesc='500 gm'
                        productPrice='315'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_15}
                        productName='Tang Mango Powder Drink Refill...'
                        productDesc='500 gm'
                        productPrice='315'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_16}
                        productName='Rooh Afza'
                        productDesc='750 ml'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_17}
                        productName='Tang Orange Flovoured Instant...'
                        productDesc='125 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_18}
                        productName="Tang Instant Drinking Powder O..."
                        productDesc='250 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_19}
                        productName="ISPI Mango Instant Powder Drin..."
                        productDesc='500 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_20}
                        productName="Tang Mango Drink"
                        productDesc='500 gm'
                        productPrice='315'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_21}
                        productName="Tang Orange Pouch"
                        productDesc='100 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_22}
                        productName="Foster Clarks Instant Flavoure..."
                        productDesc='750 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_23}
                        productName="Sajeeb Soft Drinks Powder Mang..."
                        productDesc='250 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_24}
                        productName="Sajeeb Soft Drinks Powder (Man..."
                        productDesc='500 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_25}
                        productName="Kishwan Fruitex Soft Drink Pow..."
                        productDesc='500 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_26}
                        productName="Foster Clark's Mango Drinking..."
                        productDesc='500'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_27}
                        productName="Kishwan Fruitex Soft Drink Pow..."
                        productDesc='250 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_28}
                        productName="Sajeeb Soft Drinks Powder Oran..."
                        productDesc='250 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_29}
                        productName="Glaxose D"
                        productDesc='400 gm'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_30}
                        productName="Foster Clarks Instant Flavoure..."
                        productDesc='750 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_31}
                        productName="Foster Clark's IFD Orange Jar"
                        productDesc='450 gm'
                        productPrice='340'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_32}
                        productName="Foster Clark's Mango Drinking..."
                        productDesc='250 gm'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderDrinksProduct_33}
                        productName="Tang Orange Powder Drink"
                        productDesc='2.5 kg'
                        productPrice='1500'
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
