import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import airFreshenerProduct_1 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_1.webp'
import airFreshenerProduct_10 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_10.webp'
import airFreshenerProduct_11 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_11.webp'
import airFreshenerProduct_12 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_12.webp'
import airFreshenerProduct_13 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_13.webp'
import airFreshenerProduct_14 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_14.webp'
import airFreshenerProduct_15 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_15.webp'
import airFreshenerProduct_16 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_16.webp'
import airFreshenerProduct_17 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_17.webp'
import airFreshenerProduct_18 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_18.webp'
import airFreshenerProduct_19 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_19.webp'
import airFreshenerProduct_2 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_2.webp'
import airFreshenerProduct_20 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_20.webp'
import airFreshenerProduct_21 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_21.webp'
import airFreshenerProduct_22 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_22.webp'
import airFreshenerProduct_23 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_23.webp'
import airFreshenerProduct_24 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_24.webp'
import airFreshenerProduct_25 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_25.webp'
import airFreshenerProduct_26 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_26.webp'
import airFreshenerProduct_27 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_27.webp'
import airFreshenerProduct_28 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_28.webp'
import airFreshenerProduct_29 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_29.webp'
import airFreshenerProduct_3 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_3.webp'
import airFreshenerProduct_30 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_30.webp'
import airFreshenerProduct_4 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_4.webp'
import airFreshenerProduct_5 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_5.webp'
import airFreshenerProduct_6 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_6.webp'
import airFreshenerProduct_7 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_7.webp'
import airFreshenerProduct_8 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_8.webp'
import airFreshenerProduct_9 from '../../../images/homeAndKitchenProducts/airFreshenerProducts/airFreshenerProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function AirFreshenerProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_1}
                        productName="Fay Air Freshener Sea Mineral"
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_2}
                        productName="Fay Air Freshener Peach"
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_3}
                        productName="Fay Air Freshener Oriental"
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_4}
                        productName="Fay Air Freshener Magnolia"
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_5}
                        productName='Fay Air Freshener Lime'
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_6}
                        productName='Fay Air Freshener Lemon Grass'
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_7}
                        productName='Fay Air Freshener Anti Tobaco'
                        productDesc='300 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_8}
                        productName='Fresh N Fresh Air Freshener Ro...'
                        productDesc='300 ml'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_9}
                        productName='Fresh N Fresh Air Freshener Ba...'
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_10}
                        productName="Spring Air Freshener Lemon Gra..."
                        productDesc='300 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_11}
                        productName='Spring Air Freshener Orange Fr...'
                        productDesc='300 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_12}
                        productName="Spring Air Freshener Anti Toba..."
                        productDesc='300 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_13}
                        productName='Spring Air Freshener Lemon Fre...'
                        productDesc='300 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_14}
                        productName='Godrej Aer Air Freshener Aer C...'
                        productDesc='240 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_15}
                        productName='Odonil Natural Air Freshener L...'
                        productDesc='1 pcs'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_16}
                        productName='Odonil Natural Air Freshener My...'
                        productDesc='1 pcs'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_17}
                        productName='Odonil Air Freshener Block Mys...'
                        productDesc='50 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_18}
                        productName='Sleek Anti-Tobacco Restores Fr...'
                        productDesc='300 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_19}
                        productName='Sleek Lavender Air Freshener'
                        productDesc='300 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_20}
                        productName='Sleek Lime Air Freshener'
                        productDesc='300 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_21}
                        productName='Spring Anti Tobacco Wild Pine...'
                        productDesc='300 ml'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_22}
                        productName='Lotion Admire Paris Air Freshe...'
                        productDesc='400 ml'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_23}
                        productName='Lotion Admire Paris Air Freshe...'
                        productDesc='500 ml'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_24}
                        productName='Ludao Air Freshener'
                        productDesc='320 ml'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_25}
                        productName='Summer Blossom Rose Air Freshe...'
                        productDesc='320 ml'
                        productPrice='155'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_26}
                        productName='Fay Air Freshener (Jasmine Fla...'
                        productDesc='300 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>                      

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_27}
                        productName='Fay Air Freshener Anti Tobacco'
                        productDesc='300 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_28}
                        productName='Fay Air Freshener Narcissus 3...'
                        productDesc='300 ml'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_29}
                        productName='Fay Air Freshener Rose'
                        productDesc='300 ml'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={airFreshenerProduct_30}
                        productName='New Fay Air Freshener Oriental'
                        productDesc='300 ml'
                        productPrice='230'
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
