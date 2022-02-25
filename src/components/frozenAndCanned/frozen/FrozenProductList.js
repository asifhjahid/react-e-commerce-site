import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import frozenProduct_1 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_1.webp'
import frozenProduct_10 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_10.webp'
import frozenProduct_11 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_11.webp'
import frozenProduct_12 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_12.webp'
import frozenProduct_13 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_13.webp'
import frozenProduct_14 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_14.webp'
import frozenProduct_15 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_15.webp'
import frozenProduct_16 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_16.webp'
import frozenProduct_17 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_17.webp'
import frozenProduct_18 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_18.webp'
import frozenProduct_19 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_19.webp'
import frozenProduct_2 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_2.webp'
import frozenProduct_20 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_20.webp'
import frozenProduct_21 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_21.webp'
import frozenProduct_22 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_22.webp'
import frozenProduct_23 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_23.webp'
import frozenProduct_24 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_24.webp'
import frozenProduct_25 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_25.webp'
import frozenProduct_26 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_26.webp'
import frozenProduct_27 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_27.webp'
import frozenProduct_28 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_28.webp'
import frozenProduct_29 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_29.webp'
import frozenProduct_3 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_3.webp'
import frozenProduct_4 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_4.webp'
import frozenProduct_5 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_5.webp'
import frozenProduct_6 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_6.webp'
import frozenProduct_7 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_7.webp'
import frozenProduct_8 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_8.webp'
import frozenProduct_9 from '../../../images/frozenAndCannedProducts/frozenProducts/frozenProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FrozenProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_1}
                        productName="Kazi Farms Kitchen Plain Parat..."
                        productDesc='1300 gm'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_2}
                        productName="Kazi Farms Kitchen Chicken Nug..."
                        productDesc='250 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_3}
                        productName="Kazi Farms Kitchen Chicken Sau..."
                        productDesc='340 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_4}
                        productName="Jhatpot Chicken Nuggets 20 pcs"
                        productDesc='300 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_5}
                        productName="Golden Harvest Mini Aloo Singa..."
                        productDesc='300 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_6}
                        productName='Golden Harvest Frozen Paratha...'
                        productDesc='1300'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_7}
                        productName='Golden Harvest Frozen Dal Puri...'
                        productDesc='454 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_8}
                        productName='Golden Harvest Atta Rooti 20 P...'
                        productDesc='1200 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_9}
                        productName="Golden Harvest Frozen Paratha..."
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
                        productImage={frozenProduct_10}
                        productName="Golden Harvest Frozen Chicken..."
                        productDesc='250 gm'
                        productPrice='155'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_11}
                        productName='Golden Harvest French Fries'
                        productDesc='500 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_12}
                        productName="Aftab Chicken Nuggets 10 pcs"
                        productDesc='250 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_13}
                        productName='Kazi Farms Kitchen Chicken Str...'
                        productDesc='250 gm'
                        productPrice='215'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_14}
                        productName='Kazi Farms Kitchen Original Ch...'
                        productDesc='250 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_15}
                        productName='Kazi Farms Kitchen Chicken Lol...'
                        productDesc='11-12 pcs'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_16}
                        productName='Kazi Farms Kitchen Chicken Cut...'
                        productDesc='200 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_17}
                        productName='Kazi Farms Kitchen Chicken Mea...'
                        productDesc='250 gm'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_18}
                        productName="Kazi Farms Kitchen Vegetable S..."
                        productDesc='300 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_19}
                        productName="Kazi Farms Kitchen Chicken Sau..."
                        productDesc='170 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_20}
                        productName="Kazi Farms Kitchen Aloo Puri"
                        productDesc='450 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_21}
                        productName="Kazi Farms Kitchen Paratha"
                        productDesc='10 pcs'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_22}
                        productName="Kazi Farms Kitchen Chicken Nug..."
                        productDesc='250 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_23}
                        productName="Kazi Farms Kitchen French Frie..."
                        productDesc='500 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_24}
                        productName="Delifrost Paratha"
                        productDesc='20 pcs'
                        productPrice='259'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_25}
                        productName="Jhatpot Vegetables Singara 10..."
                        productDesc='400 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_26}
                        productName="Jhatpot Plain Paratha 20 pcs"
                        productDesc='1600 gm'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_27}
                        productName="Jhatpot Paratha Low Fat 10 pcs"
                        productDesc='600 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_28}
                        productName="Jhatpot Deshi Paratha Family P..."
                        productDesc='1300 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={frozenProduct_29}
                        productName="Jhatpot Chicken Pizza"
                        productDesc='260 gm'
                        productPrice='195'
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
