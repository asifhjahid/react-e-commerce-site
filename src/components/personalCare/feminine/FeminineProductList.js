import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import feminineProduct_1 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_1.jpg'
import feminineProduct_10 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_10.jpg'
import feminineProduct_11 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_11.jpg'
import feminineProduct_12 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_12.jpg'
import feminineProduct_13 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_13.jpg'
import feminineProduct_14 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_14.jpg'
import feminineProduct_15 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_15.jpg'
import feminineProduct_16 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_16.jpg'
import feminineProduct_17 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_17.jpg'
import feminineProduct_18 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_18.jpg'
import feminineProduct_19 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_19.jpg'
import feminineProduct_2 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_2.jpg'
import feminineProduct_20 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_20.jpg'
import feminineProduct_21 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_21.jpg'
import feminineProduct_22 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_22.jpg'
import feminineProduct_23 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_23.jpg'
import feminineProduct_24 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_24.jpg'
import feminineProduct_25 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_25.jpg'
import feminineProduct_26 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_26.jpg'
import feminineProduct_27 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_27.jpg'
import feminineProduct_28 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_28.jpg'
import feminineProduct_29 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_29.jpg'
import feminineProduct_3 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_3.jpg'
import feminineProduct_30 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_30.jpg'
import feminineProduct_31 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_31.jpg'
import feminineProduct_32 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_32.jpg'
import feminineProduct_33 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_33.jpg'
import feminineProduct_34 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_34.jpg'
import feminineProduct_4 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_4.jpg'
import feminineProduct_5 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_5.jpg'
import feminineProduct_6 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_6.jpg'
import feminineProduct_7 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_7.jpg'
import feminineProduct_8 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_8.jpg'
import feminineProduct_9 from '../../../images/personalCareProducts/feminineProducts/feminineProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FeminineProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_1}
                        productName="Beauty Formulas Vitamin E Wax..."
                        productDesc='20 pcs'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_2}
                        productName="Beauty Formula Aloe Vera Wax..."
                        productDesc='36 pcs'
                        productPrice='189'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_3}
                        productName="A12 Freedom Ultra Wings Sanita..."
                        productDesc='each'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_4}
                        productName="A6 Freedom Regular Flow Popula..."
                        productDesc='each'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_5}
                        productName="A4 Freedom Panty System Sanita..."
                        productDesc='each'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_6}
                        productName='A5 Freedom Panty System Sanita...'
                        productDesc='each'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_7}
                        productName='A8 ACI Freedom Heavy Flow Wing...'
                        productDesc='each'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_8}
                        productName='A10 ACI Freedom Heavy Flow San...'
                        productDesc='each'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_9}
                        productName="All Freedom Belt System Sanita..."
                        productDesc='each'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_10}
                        productName="A7 Freedom Belt System Sanitar..."
                        productDesc='each'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_11}
                        productName="Freedom Sanitary Napkin Belt..."
                        productDesc='each'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_12}
                        productName="Freedom Sanitary Napkin Belt..."
                        productDesc='each'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_13}
                        productName='L9 Laurier Relax Night Wing Sa...'
                        productDesc='16 pcs'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_14}
                        productName='Senora Sanitary Napkin Regular...'
                        productDesc='10 pcs'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_15}
                        productName='Senora Confidence Regular Flow...'
                        productDesc='10 pcs'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_16}
                        productName='Senora Confidence Regular Flow...'
                        productDesc='16 pcs'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_17}
                        productName="SMC Joya Sanitary Napkin (Belt..."
                        productDesc='8 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_18}
                        productName="SMC Joya Regular Wings 8 pads"
                        productDesc='8 pcs'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_19}
                        productName="SMC Joya Extra Heavy Flow Wing..."
                        productDesc='8 pcs'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_20}
                        productName="SMC Joya All Night Wings"
                        productDesc='8 pcs'
                        productPrice='119'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_21}
                        productName="Veet Men Hair Removal Cream (N..."
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
                        productImage={feminineProduct_22}
                        productName="Veet Hair Removal Cream For Se..."
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
                        productImage={feminineProduct_23}
                        productName="Veet Hair Removal Cream For Dr..."
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
                        productImage={feminineProduct_24}
                        productName="Whisper Ultra Clean XL Wings"
                        productDesc='15 pads'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_25}
                        productName="Whisper Maxi Nights XL Wings"
                        productDesc='7 pads'
                        productPrice='133'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_26}
                        productName="Freedom Super Dry Regular Flow..."
                        productDesc='8 pcs'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_27}
                        productName="Freedom Ultra Wings 8 Pads"
                        productDesc='8 pcs'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_28}
                        productName="B3 Whisper Maxi Nights Wings S..."
                        productDesc='15 pcs'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_29}
                        productName="Whisper Maxi Nights Sanitary P..."
                        productDesc='15 pcs'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_30}
                        productName="Whisper Bindazz Nights Wings S..."
                        productDesc='15 pcs'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_31}
                        productName="Whisper Ultra Clean Sanitary N..."
                        productDesc='30 pcs'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_32}
                        productName="A14 Freedom Teens Ultra Chic S..."
                        productDesc='8 pcs'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_33}
                        productName="Freedom Sanitary Napkin Cotton..."
                        productDesc='10 pcs'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={feminineProduct_34}
                        productName="Veet Hair Removal Cream For Se..."
                        productDesc='100 gm'
                        productPrice='260'
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
