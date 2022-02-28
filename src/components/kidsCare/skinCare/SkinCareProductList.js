import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import skinCareProduct_1 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_1.jpg'
import skinCareProduct_10 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_10.jpg'
import skinCareProduct_11 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_11.jpg'
import skinCareProduct_12 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_12.jpg'
import skinCareProduct_13 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_13.jpg'
import skinCareProduct_14 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_14.jpg'
import skinCareProduct_15 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_15.jpg'
import skinCareProduct_16 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_16.jpg'
import skinCareProduct_17 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_17.jpg'
import skinCareProduct_18 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_18.jpg'
import skinCareProduct_19 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_19.jpg'
import skinCareProduct_2 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_2.jpg'
import skinCareProduct_20 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_20.jpg'
import skinCareProduct_21 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_21.jpg'
import skinCareProduct_22 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_22.jpg'
import skinCareProduct_23 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_23.jpg'
import skinCareProduct_24 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_24.jpg'
import skinCareProduct_25 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_25.jpg'
import skinCareProduct_26 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_26.jpg'
import skinCareProduct_27 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_27.jpg'
import skinCareProduct_28 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_28.jpg'
import skinCareProduct_29 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_29.jpg'
import skinCareProduct_3 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_3.jpg'
import skinCareProduct_30 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_30.jpg'
import skinCareProduct_31 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_31.jpg'
import skinCareProduct_32 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_32.jpg'
import skinCareProduct_33 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_33.jpg'
import skinCareProduct_34 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_34.jpg'
import skinCareProduct_35 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_35.jpg'
import skinCareProduct_36 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_36.jpg'
import skinCareProduct_37 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_37.jpg'
import skinCareProduct_38 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_38.jpg'
import skinCareProduct_39 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_39.jpg'
import skinCareProduct_4 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_4.jpg'
import skinCareProduct_40 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_40.jpg'
import skinCareProduct_5 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_5.jpg'
import skinCareProduct_6 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_6.jpg'
import skinCareProduct_7 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_7.jpg'
import skinCareProduct_8 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_8.jpg'
import skinCareProduct_9 from '../../../images/kidsCareProducts/skinCareProducts/skinCareProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SkinCareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_1}
                        productName="Parachute Just For Baby -Baby..."
                        productDesc='200 ml'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_2}
                        productName="Parachute Just Baby -Baby..."
                        productDesc='100 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_3}
                        productName="Meril Baby Olive Oil"
                        productDesc='100 ml'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_4}
                        productName="Meril Baby Mild Honey Soap"
                        productDesc='75 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_5}
                        productName="Kodomo Baby Bath Moistuizing"
                        productDesc='1000 ml'
                        productPrice='955'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_6}
                        productName="Johnson's Baby Bath Milk + Ric..."
                        productDesc='200 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_7}
                        productName='Himalaya Baby Powder'
                        productDesc='200 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_8}
                        productName='Deep Fresh Baby Foam Pink Girl...'
                        productDesc='400 ml'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_9}
                        productName="Deep Fresh Baby Foam Blue Boy..."
                        productDesc='400 ml'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_10}
                        productName="Dove Beauty Cream"
                        productDesc='150 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_11}
                        productName='Dove Nourishing Body Care Beau...'
                        productDesc='75 ml'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_12}
                        productName="Meril Petroleum Jelly"
                        productDesc='100 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_13}
                        productName='Meril Petroleum Jelly'
                        productDesc='50 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_14}
                        productName="Pond's Light Moisturiser Non-O..."
                        productDesc='25 ml'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_15}
                        productName="Johnson's Baby Oil"
                        productDesc='500 ml'
                        productPrice='820'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_16}
                        productName="Johnson's Baby Oil"
                        productDesc='200 ml'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_17}
                        productName='Meril Rose Water Glycerine'
                        productDesc='120 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_18}
                        productName="Ligion Rose Water Glycerine"
                        productDesc='120 ml'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_19}
                        productName="Meril Glycerine"
                        productDesc='60 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_20}
                        productName="Meril Protective Care Glycerin..."
                        productDesc='120 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_21}
                        productName="Veet Hari Removal Cream 25 gm..."
                        productDesc='25 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_22}
                        productName="Olitalia Extra Virgin Olive Oi..."
                        productDesc='250 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_23}
                        productName="Olitalia Extra Virgin Olive Oi..."
                        productDesc='500 ml'
                        productPrice='675'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_24}
                        productName="Olitalia Extra Virgin Olive Oi..."
                        productDesc='1 Itr'
                        productPrice='1250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_25}
                        productName="Meril Revive Moisturiser Lotio..."
                        productDesc='100 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_26}
                        productName="Parachute Just For Baby -Baby..."
                        productDesc='200 ml'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_27}
                        productName="Johnson's Baby Milk+Rice Lotio..."
                        productDesc='100 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_28}
                        productName="Johnson's Baby Lotion"
                        productDesc='200 ml'
                        productPrice='315'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_29}
                        productName="Johnson's Baby Top-To-Toe Bath..."
                        productDesc='100 ml'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_30}
                        productName="Parachute Just For Baby Lotion..."
                        productDesc='100 ml'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_31}
                        productName="Meril Baby Lotion"
                        productDesc='50 ml'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_32}
                        productName="Meril Baby Lotion"
                        productDesc='200 ml'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_33}
                        productName="Meril Baby Lotion"
                        productDesc='100 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_34}
                        productName="Johnson's Baby Milk and Rice C..."
                        productDesc='50 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_35}
                        productName="Johnsons Baby Cream"
                        productDesc='50 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_36}
                        productName="Dabur Odomos Naturals Mosquito..."
                        productDesc='100 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_37}
                        productName="Dabur Odomos Naturals Mosquito..."
                        productDesc='120 ml'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_38}
                        productName="Johnson's Baby Milk and Rice C..."
                        productDesc='100 gm'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_39}
                        productName="Johnson's Baby Soap Blossoms"
                        productDesc='75 gm'
                        productPrice='104'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={skinCareProduct_40}
                        productName="Johnson's Baby Soap"
                        productDesc='75 gm'
                        productPrice='90'
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
