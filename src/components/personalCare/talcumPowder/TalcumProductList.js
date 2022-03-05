import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import talcumPowderProduct_1 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_1.jpg'
import talcumPowderProduct_10 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_10.jpg'
import talcumPowderProduct_11 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_11.jpg'
import talcumPowderProduct_12 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_12.jpg'
import talcumPowderProduct_13 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_13.jpg'
import talcumPowderProduct_14 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_14.jpg'
import talcumPowderProduct_15 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_15.jpg'
import talcumPowderProduct_16 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_16.jpg'
import talcumPowderProduct_17 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_17.jpg'
import talcumPowderProduct_18 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_18.jpg'
import talcumPowderProduct_19 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_19.jpg'
import talcumPowderProduct_2 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_2.jpg'
import talcumPowderProduct_3 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_3.jpg'
import talcumPowderProduct_4 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_4.jpg'
import talcumPowderProduct_5 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_5.jpg'
import talcumPowderProduct_6 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_6.jpg'
import talcumPowderProduct_7 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_7.jpg'
import talcumPowderProduct_8 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_8.jpg'
import talcumPowderProduct_9 from '../../../images/personalCareProducts/talcumPowderProducts/talcumPowderProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function TalcumPowderProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_1}
                        productName="Cute French Perfumed Talc Powd..."
                        productDesc='225 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_2}
                        productName="Enchanteur Charming Perfumed T"
                        productDesc='125 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_3}
                        productName="Enchanteur Gorgeous Perfumed T..."
                        productDesc='125 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_4}
                        productName="Enchanteur Romantic Perfumed T..."
                        productDesc='125 gm'
                        productPrice='219'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_5}
                        productName="Ice Cool Prickly Heat Powder"
                        productDesc='100 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_6}
                        productName="Pond's Sandal Radiance Talc Na..."
                        productDesc='100 gm'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_7}
                        productName='Revive Active Sun Block Powder'
                        productDesc='200 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_8}
                        productName="Johnson's Baby Powder"
                        productDesc='500 gm'
                        productPrice='490'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_9}
                        productName="Johnson's Baby Powder"
                        productDesc='180 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_10}
                        productName="Johnson's Baby Powder"
                        productDesc='180 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_11}
                        productName="Enchanteur Romantic Perfumed T..."
                        productDesc='150 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_12}
                        productName="Tibet Luxury Talcum Powder"
                        productDesc='100 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_13}
                        productName='Tibet Prickly Heat Powder'
                        productDesc='100 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_14}
                        productName='Millat Prickly Heat Powder'
                        productDesc='150 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_15}
                        productName='Tibet Luxury Talcum Powder'
                        productDesc='200 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_16}
                        productName='Ponds Oil Control Talcum Powde...'
                        productDesc='100 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_17}
                        productName="Ponds Dream Flower Magic Talc"
                        productDesc='100 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_18}
                        productName="Ponds Dream Flower Talcum Powder..."
                        productDesc='200 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={talcumPowderProduct_19}
                        productName="Pond's Sandal Talcum Powder"
                        productDesc='100 gm'
                        productPrice='140'
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
