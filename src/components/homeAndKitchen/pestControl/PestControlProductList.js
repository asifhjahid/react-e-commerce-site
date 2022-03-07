import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import pestControlProduct_1 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_1.webp'
import pestControlProduct_10 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_10.webp'
import pestControlProduct_11 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_11.webp'
import pestControlProduct_12 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_12.webp'
import pestControlProduct_13 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_13.webp'
import pestControlProduct_14 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_14.webp'
import pestControlProduct_15 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_15.webp'
import pestControlProduct_16 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_16.webp'
import pestControlProduct_17 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_17.webp'
import pestControlProduct_18 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_18.webp'
import pestControlProduct_19 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_19.webp'
import pestControlProduct_2 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_2.webp'
import pestControlProduct_20 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_20.webp'
import pestControlProduct_21 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_21.webp'
import pestControlProduct_22 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_22.webp'
import pestControlProduct_23 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_23.webp'
import pestControlProduct_24 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_24.webp'
import pestControlProduct_3 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_3.webp'
import pestControlProduct_4 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_4.webp'
import pestControlProduct_5 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_5.webp'
import pestControlProduct_6 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_6.webp'
import pestControlProduct_7 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_7.webp'
import pestControlProduct_8 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_8.webp'
import pestControlProduct_9 from '../../../images/homeAndKitchenProducts/pestControlProducts/pestControlProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function PestControlProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_1}
                        productName="Xtreme Mosquito Coil"
                        productDesc='10 pcs'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_2}
                        productName="Xpel Aerosol"
                        productDesc='250 ml'
                        productPrice='185'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_3}
                        productName="Super Action Booster Mosquito..."
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
                        productImage={pestControlProduct_4}
                        productName="Odomos Mosquito Repellent Crea..."
                        productDesc='100 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_5}
                        productName='Godrej New Hit Mosquitoes Spra...'
                        productDesc='400 ml'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_6}
                        productName='Godrej New Hit Cocokroaches Spr...'
                        productDesc='400 ml'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_7}
                        productName='Godrej Hit Lime Mosquitoes &amp; F...'
                        productDesc='400 ml'
                        productPrice='301'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_8}
                        productName='Godrej Good Knight Power Activ...'
                        productDesc='each'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_9}
                        productName='Godrej Good Knight Power Activ...'
                        productDesc='45 ml'
                        productPrice='99'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_10}
                        productName="Godrej Good Knight Mosquito Fa..."
                        productDesc='8 ml'
                        productPrice='99'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_11}
                        productName='Finis Jumboo Mosquito Coil'
                        productDesc='10 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_12}
                        productName="Elephant King Jumbo Voilet Mos..."
                        productDesc='10 pcs'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_13}
                        productName='Joom Mosquito Coil'
                        productDesc='10 pcs'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_14}
                        productName='Baoma Mosquito Coil'
                        productDesc='10 pcs'
                        productPrice='74'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_15}
                        productName='Eagle-Max-Jumbo-Mosquito-Coil'
                        productDesc='10 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_16}
                        productName='Finis Insect Powder'
                        productDesc='40 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_17}
                        productName='Diamond Fresh Naphthalene Ball...'
                        productDesc='1 pack'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_18}
                        productName='Scotch (Majoni)'
                        productDesc='1 pcs'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_19}
                        productName='Godrej Hit Insect Spray'
                        productDesc='400 ml'
                        productPrice='276'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_20}
                        productName='Baoma Insect Killer Micro Smok...'
                        productDesc='10 pieces'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_21}
                        productName='Godrej Good Knight Advanced Xp...'
                        productDesc='10 pcs'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_22}
                        productName='Godrej Kala Hit Lime Fragrance...'
                        productDesc='400 ml'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_23}
                        productName='Godrej Good Knight Turbo Machi...'
                        productDesc='each'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pestControlProduct_24}
                        productName='ACI Aerosol'
                        productDesc='800 ml'
                        productPrice='470'
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
