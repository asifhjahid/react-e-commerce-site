import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import nutProduct_1 from '../../../images/nutsProducts/nutProduct_1.webp'
import nutProduct_10 from '../../../images/nutsProducts/nutProduct_10.webp'
import nutProduct_11 from '../../../images/nutsProducts/nutProduct_11.webp'
import nutProduct_12 from '../../../images/nutsProducts/nutProduct_12.webp'
import nutProduct_13 from '../../../images/nutsProducts/nutProduct_13.webp'
import nutProduct_14 from '../../../images/nutsProducts/nutProduct_14.webp'
import nutProduct_15 from '../../../images/nutsProducts/nutProduct_15.webp'
import nutProduct_16 from '../../../images/nutsProducts/nutProduct_16.webp'
import nutProduct_17 from '../../../images/nutsProducts/nutProduct_17.webp'
import nutProduct_18 from '../../../images/nutsProducts/nutProduct_18.webp'
import nutProduct_19 from '../../../images/nutsProducts/nutProduct_19.webp'
import nutProduct_2 from '../../../images/nutsProducts/nutProduct_2.webp'
import nutProduct_20 from '../../../images/nutsProducts/nutProduct_20.webp'
import nutProduct_21 from '../../../images/nutsProducts/nutProduct_21.webp'
import nutProduct_22 from '../../../images/nutsProducts/nutProduct_22.webp'
import nutProduct_23 from '../../../images/nutsProducts/nutProduct_23.webp'
import nutProduct_24 from '../../../images/nutsProducts/nutProduct_24.webp'
import nutProduct_3 from '../../../images/nutsProducts/nutProduct_3.webp'
import nutProduct_4 from '../../../images/nutsProducts/nutProduct_4.webp'
import nutProduct_5 from '../../../images/nutsProducts/nutProduct_5.webp'
import nutProduct_6 from '../../../images/nutsProducts/nutProduct_6.webp'
import nutProduct_7 from '../../../images/nutsProducts/nutProduct_7.webp'
import nutProduct_8 from '../../../images/nutsProducts/nutProduct_8.webp'
import nutProduct_9 from '../../../images/nutsProducts/nutProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function NutProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_1}
                        productName="Crunchos Assorted Mix Nuts Tin"
                        productDesc='350 gm'
                        productPrice='1149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_2}
                        productName="Fit Food Spiced Mixed Nuts"
                        productDesc='100 gm'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_3}
                        productName="Golden Garden Mixed Fruits &amp; N..."
                        productDesc='190 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_4}
                        productName="Kaju Badam (Cashew Nut)"
                        productDesc='100 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_5}
                        productName='Nut Candy Salted Pistachios'
                        productDesc='140 gm'
                        productPrice='449'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_6}
                        productName='Nut Candy Salted Peanuts'
                        productDesc='150 gm'
                        productPrice='255'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_7}
                        productName='Nut Candy Salted Cashew Nuts'
                        productDesc='140 gm'
                        productPrice='525'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_8}
                        productName='Nutrivita Cashew Nuts'
                        productDesc='150 gm'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_9}
                        productName='Royal Farm Cashew Nut'
                        productDesc='100 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_10}
                        productName="Tong Garden Salted Cocktail Nu..."
                        productDesc='160 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_11}
                        productName='Tong Garden Salted Cocktail Nu...'
                        productDesc='40 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_12}
                        productName="Tong Garden Seaweed &amp; Wasabi C..."
                        productDesc='150 gm'
                        productPrice='495'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_13}
                        productName='Pure Almond (Kath Badam)'
                        productDesc='50 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_14}
                        productName='Pistachio-nut'
                        productDesc='150 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_15}
                        productName='Ridge-Almond'
                        productDesc='200'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_16}
                        productName='Ridge Almond'
                        productDesc='100'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_17}
                        productName='Nuttos Organic Mixed Nuts Vege...'
                        productDesc='400 gm'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_18}
                        productName="Crunchos Pistachio Nut Tin"
                        productDesc='350 gm'
                        productPrice='1179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_19}
                        productName='Nuttos Organic Mixed Nuts'
                        productDesc='400 gm'
                        productPrice='700'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_20}
                        productName="Oriental Roasted Salted Mixed"
                        productDesc='400'
                        productPrice='630'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_21}
                        productName="Cashew Nuts (Kaju Badam)"
                        productDesc='500 gm'
                        productPrice='635'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_22}
                        productName="Cashew Nut"
                        productDesc='1 kg'
                        productPrice='1200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_23}
                        productName="Premium Cashew Nut (Kaju Badam..."
                        productDesc='250 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={nutProduct_24}
                        productName="Roasted Cashew nut/kazu Badam..."
                        productDesc='1 kg'
                        productPrice='1300'
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
