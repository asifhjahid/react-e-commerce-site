import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import homeCleanerProduct_1 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_1.jpg'
import homeCleanerProduct_10 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_10.jpg'
import homeCleanerProduct_11 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_11.jpg'
import homeCleanerProduct_12 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_12.jpg'
import homeCleanerProduct_13 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_13.jpg'
import homeCleanerProduct_14 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_14.jpg'
import homeCleanerProduct_15 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_15.jpg'
import homeCleanerProduct_16 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_16.jpg'
import homeCleanerProduct_17 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_17.jpg'
import homeCleanerProduct_18 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_18.jpg'
import homeCleanerProduct_19 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_19.jpg'
import homeCleanerProduct_2 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_2.jpg'
import homeCleanerProduct_20 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_20.jpg'
import homeCleanerProduct_21 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_21.jpg'
import homeCleanerProduct_22 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_22.jpg'
import homeCleanerProduct_23 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_23.jpg'
import homeCleanerProduct_24 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_24.jpg'
import homeCleanerProduct_25 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_25.jpg'
import homeCleanerProduct_26 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_26.jpg'
import homeCleanerProduct_27 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_27.jpg'
import homeCleanerProduct_28 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_28.jpg'
import homeCleanerProduct_29 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_29.jpg'
import homeCleanerProduct_3 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_3.jpg'
import homeCleanerProduct_30 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_30.jpg'
import homeCleanerProduct_31 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_31.jpg'
import homeCleanerProduct_32 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_32.jpg'
import homeCleanerProduct_33 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_33.jpg'
import homeCleanerProduct_4 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_4.jpg'
import homeCleanerProduct_5 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_5.jpg'
import homeCleanerProduct_6 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_6.jpg'
import homeCleanerProduct_7 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_7.jpg'
import homeCleanerProduct_8 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_8.jpg'
import homeCleanerProduct_9 from '../../../images/homeAndKitchenProducts/homeCleanerProducts/homeCleanerProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function HomeCleanerProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_1}
                        productName="Harpic Toilet Cleaning Liquid..."
                        productDesc='500 ml'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_2}
                        productName="Harpic Bathroom Cleaning Liqui..."
                        productDesc='500 ml'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_3}
                        productName="Harpic Toilet Cleaning Powder"
                        productDesc='400 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_4}
                        productName="Harpic Toilet Cleaning Liquid..."
                        productDesc='1 Itr'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_5}
                        productName='Harpic Toilet Cleaning Liquid...'
                        productDesc='500 ml'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_6}
                        productName='Harpic Platinum Active Shield...'
                        productDesc='500 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_7}
                        productName='Lizol Disinfectant Surface &amp; F...'
                        productDesc='500 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_8}
                        productName='Lizol Disinfectant Surface &amp; F...'
                        productDesc='500 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_9}
                        productName='Lizol Floor Cleaner Floral Dis...'
                        productDesc='500 ml'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_10}
                        productName="Lizol Floor Cleaner Citrus Dis..."
                        productDesc='975 ml'
                        productPrice='255'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_11}
                        productName='Lizol Floor Cleaner Citrus Dis...'
                        productDesc='500 ml'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_12}
                        productName="Mr. Brasso Glass &amp; Household Cl..."
                        productDesc='350 ml'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_13}
                        productName='Mr. Brasso Glass &amp; Household Cl...'
                        productDesc='350 ml'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_14}
                        productName='Rok Disifectant Bleaching Pow...'
                        productDesc='500 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_15}
                        productName='Rok Glazeo Scented Glass Clean...'
                        productDesc='350 ml'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_16}
                        productName='Rok Glazeo Scented Glass Clean...'
                        productDesc='750 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_17}
                        productName='Savlon Aloe Vera Antiseptic Ha...'
                        productDesc='5 Itr'
                        productPrice='1100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_18}
                        productName='Lizol Floor CLeaner Floral Dis...'
                        productDesc='975 ml'
                        productPrice='255'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_19}
                        productName='Shinex Floor Cleaner Floral'
                        productDesc='1 Itr'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_20}
                        productName='Shinex Floor Cleaner Floral'
                        productDesc='500 ml'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_21}
                        productName='Shinex Floor Cleaner Citrus'
                        productDesc='1 Itr'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_22}
                        productName='Shinex Floor Cleaner Fresh Mis...'
                        productDesc='1 Itr'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_23}
                        productName='Shinex Floor Cleaner Fresh Mis...'
                        productDesc='500 ml'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_24}
                        productName='Rok Lemon Disifectant Floor C...'
                        productDesc='500 ml'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_25}
                        productName='Finex Floor Cleaner (Pine Fres...'
                        productDesc='950 ml'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_26}
                        productName='Vixol White'
                        productDesc='900 gm'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>                      

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_27}
                        productName='Vixol White'
                        productDesc='450 ml'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_28}
                        productName='Clorox Tiles Cleaner'
                        productDesc='1 Itr'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_29}
                        productName='Clorox Tiles Cleaner'
                        productDesc='500 ml'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_30}
                        productName='Vixol Pink'
                        productDesc='900 ml'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_31}
                        productName='Vixol Pink'
                        productDesc='450 ml'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_32}
                        productName='Lizol Disinfectant Surface Cle...'
                        productDesc='975 ml'
                        productPrice='245'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={homeCleanerProduct_33}
                        productName='Dettol DIsinfectant Multipurpo...'
                        productDesc='500 ml'
                        productPrice='190'
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
