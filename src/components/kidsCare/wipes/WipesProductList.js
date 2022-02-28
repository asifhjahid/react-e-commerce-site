import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import wipesProduct_1 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_1.png'
import wipesProduct_10 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_10.png'
import wipesProduct_11 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_11.png'
import wipesProduct_12 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_12.png'
import wipesProduct_13 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_13.png'
import wipesProduct_14 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_14.png'
import wipesProduct_15 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_15.png'
import wipesProduct_2 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_2.png'
import wipesProduct_3 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_3.png'
import wipesProduct_4 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_4.png'
import wipesProduct_5 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_5.png'
import wipesProduct_6 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_6.png'
import wipesProduct_7 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_7.png'
import wipesProduct_8 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_8.png'
import wipesProduct_9 from '../../../images/kidsCareProducts/wipesProducts/wipesProduct_9.png'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function WipesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_1}
                        productName="Bashundhara Baby Wipes"
                        productDesc='120 pcs'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_2}
                        productName="Clariss Baby Wipes (Sensitive)"
                        productDesc='120 pcs'
                        productPrice='295'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_3}
                        productName="Dettol Anti Bacterial Wet Wipe..."
                        productDesc='10 pcs'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_4}
                        productName="Farlin Baby Moisture Anti Rash..."
                        productDesc='85 pcs'
                        productPrice='449'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_5}
                        productName="Freshmarker Wet Wipes"
                        productDesc='120 pcs'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_6}
                        productName="Johnson's Extra Sensitive Baby..."
                        productDesc='72 pcs'
                        productPrice='325'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_7}
                        productName='Kidz Cotton Baby Wet Wipes'
                        productDesc='56 pcs'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_8}
                        productName='Lifebuoy Antibacterial Wet Wip...'
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
                        productImage={wipesProduct_9}
                        productName="Molfix Baby Lotion Wet Wipes"
                        productDesc='60 pcs'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_10}
                        productName="NeoCare Baby Wipes"
                        productDesc='120 pcs'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_11}
                        productName='Pozzy Baby Wet Towel Wipes'
                        productDesc='120 pcs'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_12}
                        productName="Savlon Antibacterial Wet Wipes"
                        productDesc='20 pcs'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_13}
                        productName='Savlon Twinkle Baby Wipes'
                        productDesc='120 pcs'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_14}
                        productName='SMC Smile Baby Wipes'
                        productDesc='80 pcs'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={wipesProduct_15}
                        productName='Supermom Mild Baby Wipes'
                        productDesc='80 pcs'
                        productPrice='210'
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
