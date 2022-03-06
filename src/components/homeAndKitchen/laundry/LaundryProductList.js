import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import laundryProduct_1 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_1.jpg'
import laundryProduct_10 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_10.jpg'
import laundryProduct_11 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_11.jpg'
import laundryProduct_12 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_12.jpg'
import laundryProduct_13 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_13.jpg'
import laundryProduct_14 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_14.jpg'
import laundryProduct_15 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_15.jpg'
import laundryProduct_16 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_16.jpg'
import laundryProduct_17 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_17.jpg'
import laundryProduct_18 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_18.jpg'
import laundryProduct_19 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_19.jpg'
import laundryProduct_2 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_2.jpg'
import laundryProduct_20 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_20.jpg'
import laundryProduct_21 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_21.jpg'
import laundryProduct_22 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_22.jpg'
import laundryProduct_23 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_23.jpg'
import laundryProduct_24 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_24.jpg'
import laundryProduct_25 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_25.jpg'
import laundryProduct_26 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_26.jpg'
import laundryProduct_27 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_27.jpg'
import laundryProduct_28 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_28.jpg'
import laundryProduct_29 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_29.jpg'
import laundryProduct_3 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_3.jpg'
import laundryProduct_30 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_30.jpg'
import laundryProduct_31 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_31.jpg'
import laundryProduct_32 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_32.jpg'
import laundryProduct_4 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_4.jpg'
import laundryProduct_5 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_5.jpg'
import laundryProduct_6 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_6.jpg'
import laundryProduct_7 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_7.jpg'
import laundryProduct_8 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_8.jpg'
import laundryProduct_9 from '../../../images/homeAndKitchenProducts/laundryProducts/laundryProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function LaundryProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_1}
                        productName="Jet Baby Liquid Detergent"
                        productDesc='1000 ml'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_2}
                        productName="Persil Fabric Intelligent Powd..."
                        productDesc='3 kg'
                        productPrice='990'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_3}
                        productName="Persil Grease Removal (Apple F..."
                        productDesc='500 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_4}
                        productName="Almer Fabric Refresher"
                        productDesc='450 gm'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_5}
                        productName='Chaka Super White Washing Powd...'
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
                        productImage={laundryProduct_6}
                        productName='Chaka Advanced Ball Soap'
                        productDesc='130 gm'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_7}
                        productName='Surf Excel Washing Powder'
                        productDesc='1 kg'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_8}
                        productName='Surf Excel Matic Liquid Deterg...'
                        productDesc='1020 ml'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_9}
                        productName='Surf Excel Matic Liquid Deterg...'
                        productDesc='1020 ml'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_10}
                        productName="ACI Smart Laundry Soap"
                        productDesc='130 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_11}
                        productName='Ariel Powder Gel'
                        productDesc='2 Itr'
                        productPrice='979'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_12}
                        productName="Attack Softener Detergent Powd..."
                        productDesc='1.4 kg'
                        productPrice='825'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_13}
                        productName='Breeze Detergent Liquid Colour...'
                        productDesc='2.6 kg'
                        productPrice='1709'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_14}
                        productName='Chamk Fabric Brightener'
                        productDesc='100 ml'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_15}
                        productName='Cocorex Bleach Colours Floral...'
                        productDesc='1 Itr'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_16}
                        productName='ACI Supreme Antibacterial Dete...'
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
                        productImage={laundryProduct_17}
                        productName='Comfort Fabric SOftner Pure Wh...'
                        productDesc='2 Itr'
                        productPrice='439'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_18}
                        productName='Fast Wash Detergent Powder'
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
                        productImage={laundryProduct_19}
                        productName='Godrej Ezee Liquid Detergent'
                        productDesc='1 kg'
                        productPrice='299'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_20}
                        productName='Hygiene Fresh Ocean Fabric Sof...'
                        productDesc='550 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_21}
                        productName='Rin Washing Liquid'
                        productDesc='800 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_22}
                        productName='Rin Washing Powder Power Brigh...'
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
                        productImage={laundryProduct_23}
                        productName='Rok Detergent Laundry Wash (Bu...'
                        productDesc='500 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_24}
                        productName='Ujala'
                        productDesc='100 ml'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_25}
                        productName='Wheel Washing Powder 2 in 1 Clea...'
                        productDesc='1 kg'
                        productPrice='96'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_26}
                        productName='Wheel Washing Laundry Bar'
                        productDesc='130 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>                      

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_27}
                        productName='Rin Washing Powder Power Brigh...'
                        productDesc='250 gm'
                        productPrice='38'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_28}
                        productName='Rin Washing Powder Power Brigh...'
                        productDesc='1 kg'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_29}
                        productName='Wheel Clean &amp; Rose Fresh Nile'
                        productDesc='200 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_30}
                        productName='Wheel Washing Powder 2 in 1 Cl...'
                        productDesc='200 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_31}
                        productName='Wheel Washing Powder 2 in 1'
                        productDesc='500 gm'
                        productPrice='42'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={laundryProduct_32}
                        productName='Wheel Washing Powder 2 in 1 Clea...'
                        productDesc='500 gm'
                        productPrice='52'
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
