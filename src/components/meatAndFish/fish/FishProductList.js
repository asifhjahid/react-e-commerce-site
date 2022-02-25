import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import fishProduct_1 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_1.webp'
import fishProduct_10 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_10.webp'
import fishProduct_11 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_11.webp'
import fishProduct_12 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_12.webp'
import fishProduct_13 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_13.webp'
import fishProduct_14 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_14.webp'
import fishProduct_15 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_15.webp'
import fishProduct_16 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_16.webp'
import fishProduct_17 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_17.webp'
import fishProduct_18 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_18.webp'
import fishProduct_19 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_19.webp'
import fishProduct_2 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_2.webp'
import fishProduct_20 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_20.webp'
import fishProduct_21 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_21.webp'
import fishProduct_22 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_22.webp'
import fishProduct_23 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_23.webp'
import fishProduct_24 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_24.webp'
import fishProduct_25 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_25.webp'
import fishProduct_26 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_26.webp'
import fishProduct_27 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_27.webp'
import fishProduct_28 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_28.webp'
import fishProduct_29 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_29.webp'
import fishProduct_3 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_3.webp'
import fishProduct_30 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_30.webp'
import fishProduct_31 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_31.webp'
import fishProduct_32 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_32.webp'
import fishProduct_33 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_33.webp'
import fishProduct_34 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_34.webp'
import fishProduct_35 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_35.webp'
import fishProduct_36 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_36.webp'
import fishProduct_37 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_37.webp'
import fishProduct_38 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_38.webp'
import fishProduct_39 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_39.webp'
import fishProduct_4 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_4.webp'
import fishProduct_40 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_40.webp'
import fishProduct_41 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_41.webp'
import fishProduct_42 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_42.webp'
import fishProduct_5 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_5.webp'
import fishProduct_6 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_6.webp'
import fishProduct_7 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_7.webp'
import fishProduct_8 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_8.webp'
import fishProduct_9 from '../../../images/meatAndFishProducts/fishProducts/fishProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FishProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_1}
                        productName="Tengra Fish Deshi"
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
                        productImage={fishProduct_2}
                        productName="Shrimp Horina"
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
                        productImage={fishProduct_3}
                        productName="Shrimp Bagda"
                        productDesc='500 gm'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_4}
                        productName="Shing Fish Processed"
                        productDesc='500 gm'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_5}
                        productName="Rupchanda Fish Medium"
                        productDesc='500 gm (3 pcs)'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_6}
                        productName='Rui Fish'
                        productDesc='1 kg (Gross Fish Wei...'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_7}
                        productName='Puti Fish'
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
                        productImage={fishProduct_8}
                        productName='Pangas Fish'
                        productDesc='1 kg'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_9}
                        productName="Pabda Fish Small"
                        productDesc='500 gm (30-32 pcs)'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_10}
                        productName="Koi Fish"
                        productDesc='1 kg (Gross Fish Wei...'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_11}
                        productName='Baila Fish Medium'
                        productDesc='500 gm'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_12}
                        productName="Rui Fish Processed"
                        productDesc='2 kg (Gross Fish Wei...'
                        productPrice='780'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_13}
                        productName='Rui Fish Processed'
                        productDesc='4 kg (Gross Fish Wei...'
                        productPrice='1780'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_14}
                        productName='Pabda Fish Medium'
                        productDesc='500 gm (18-22 pcs)'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_15}
                        productName='Telapiya Fish Big Processed'
                        productDesc='1 kg (Gross Fish Wei...'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_16}
                        productName='Telapiya Fish Medium'
                        productDesc='1 kg (Gross Fish Wei...'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_17}
                        productName='Kachki Fish'
                        productDesc='500 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_18}
                        productName="Hilsha Fish"
                        productDesc='1.5 kg'
                        productPrice='1800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_19}
                        productName="Mola Fish Deshi"
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_20}
                        productName="Catla / Katla Fish 1.5 kg (Net.."
                        productDesc='1.5 kg'
                        productPrice='496'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_21}
                        productName="Shing Fish Processed Deshi"
                        productDesc='500 gm'
                        productPrice='475'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_22}
                        productName="Deshi Chapila Fish (River)"
                        productDesc='1 kg'
                        productPrice='624'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_23}
                        productName="Baim Fish"
                        productDesc='1 kg'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_24}
                        productName="Golda Chingri (6-8 Large Pcs P..."
                        productDesc='500 gm'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_25}
                        productName="Ayer Fish"
                        productDesc='1 kg'
                        productPrice='630'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_26}
                        productName="Gulsha Fish Medium"
                        productDesc='500 gm'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_27}
                        productName="Sor Puti Fish Processed"
                        productDesc='1 kg'
                        productPrice='209'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_28}
                        productName="Carfu Fish After Cutting"
                        productDesc='1 kg'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_29}
                        productName="Shol Fish Deshi Processed"
                        productDesc='1.5 kg +'
                        productPrice='1200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_30}
                        productName="Taki Fish"
                        productDesc='500 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_31}
                        productName="Chotal Fish Processed"
                        productDesc='1 kg'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_32}
                        productName="Boal Fish Big Processed"
                        productDesc='3 kg'
                        productPrice='2000'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_33}
                        productName="Boal Fish Processed"
                        productDesc='1 kg'
                        productPrice='509'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_34}
                        productName="Koral Fish Processed"
                        productDesc='1 kg'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_35}
                        productName="Magur Fish Deshi"
                        productDesc='500 gm'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_36}
                        productName="Sea Kaika Fish"
                        productDesc='500 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_37}
                        productName="Mrigal Fish Processed"
                        productDesc='1 kg'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_38}
                        productName="Gura Chingri Deshi"
                        productDesc='1 kg'
                        productPrice='610'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_39}
                        productName="Deshi Koi"
                        productDesc='1 kg'
                        productPrice='900'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_40}
                        productName="Tilpaia Small"
                        productDesc='500 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_41}
                        productName="Poa Fish"
                        productDesc='1 kg'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fishProduct_42}
                        productName="Tatkini Fish"
                        productDesc='500 gm'
                        productPrice='110'
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
