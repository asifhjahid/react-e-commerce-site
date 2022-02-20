import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import teaProduct_1 from '../../../images/teaProducts/teaProduct_1.webp'
import teaProduct_10 from '../../../images/teaProducts/teaProduct_10.webp'
import teaProduct_11 from '../../../images/teaProducts/teaProduct_11.webp'
import teaProduct_12 from '../../../images/teaProducts/teaProduct_12.webp'
import teaProduct_13 from '../../../images/teaProducts/teaProduct_13.webp'
import teaProduct_14 from '../../../images/teaProducts/teaProduct_14.webp'
import teaProduct_15 from '../../../images/teaProducts/teaProduct_15.webp'
import teaProduct_16 from '../../../images/teaProducts/teaProduct_16.webp'
import teaProduct_17 from '../../../images/teaProducts/teaProduct_17.webp'
import teaProduct_18 from '../../../images/teaProducts/teaProduct_18.webp'
import teaProduct_19 from '../../../images/teaProducts/teaProduct_19.webp'
import teaProduct_2 from '../../../images/teaProducts/teaProduct_2.webp'
import teaProduct_20 from '../../../images/teaProducts/teaProduct_20.webp'
import teaProduct_21 from '../../../images/teaProducts/teaProduct_21.webp'
import teaProduct_22 from '../../../images/teaProducts/teaProduct_22.webp'
import teaProduct_23 from '../../../images/teaProducts/teaProduct_23.webp'
import teaProduct_24 from '../../../images/teaProducts/teaProduct_24.webp'
import teaProduct_25 from '../../../images/teaProducts/teaProduct_25.webp'
import teaProduct_26 from '../../../images/teaProducts/teaProduct_26.webp'
import teaProduct_27 from '../../../images/teaProducts/teaProduct_27.webp'
import teaProduct_28 from '../../../images/teaProducts/teaProduct_28.webp'
import teaProduct_29 from '../../../images/teaProducts/teaProduct_29.webp'
import teaProduct_3 from '../../../images/teaProducts/teaProduct_3.webp'
import teaProduct_30 from '../../../images/teaProducts/teaProduct_30.webp'
import teaProduct_31 from '../../../images/teaProducts/teaProduct_31.webp'
import teaProduct_32 from '../../../images/teaProducts/teaProduct_32.webp'
import teaProduct_33 from '../../../images/teaProducts/teaProduct_33.webp'
import teaProduct_34 from '../../../images/teaProducts/teaProduct_34.webp'
import teaProduct_35 from '../../../images/teaProducts/teaProduct_35.webp'
import teaProduct_36 from '../../../images/teaProducts/teaProduct_36.webp'
import teaProduct_37 from '../../../images/teaProducts/teaProduct_37.webp'
import teaProduct_38 from '../../../images/teaProducts/teaProduct_38.webp'
import teaProduct_39 from '../../../images/teaProducts/teaProduct_39.webp'
import teaProduct_4 from '../../../images/teaProducts/teaProduct_4.webp'
import teaProduct_40 from '../../../images/teaProducts/teaProduct_40.webp'
import teaProduct_41 from '../../../images/teaProducts/teaProduct_41.webp'
import teaProduct_42 from '../../../images/teaProducts/teaProduct_42.webp'
import teaProduct_43 from '../../../images/teaProducts/teaProduct_43.webp'
import teaProduct_44 from '../../../images/teaProducts/teaProduct_44.webp'
import teaProduct_45 from '../../../images/teaProducts/teaProduct_45.webp'
import teaProduct_46 from '../../../images/teaProducts/teaProduct_46.webp'
import teaProduct_47 from '../../../images/teaProducts/teaProduct_47.webp'
import teaProduct_48 from '../../../images/teaProducts/teaProduct_48.webp'
import teaProduct_49 from '../../../images/teaProducts/teaProduct_49.webp'
import teaProduct_5 from '../../../images/teaProducts/teaProduct_5.webp'
import teaProduct_50 from '../../../images/teaProducts/teaProduct_50.webp'
import teaProduct_51 from '../../../images/teaProducts/teaProduct_51.webp'
import teaProduct_52 from '../../../images/teaProducts/teaProduct_52.webp'
import teaProduct_53 from '../../../images/teaProducts/teaProduct_53.webp'
import teaProduct_6 from '../../../images/teaProducts/teaProduct_6.webp'
import teaProduct_7 from '../../../images/teaProducts/teaProduct_7.webp'
import teaProduct_8 from '../../../images/teaProducts/teaProduct_8.webp'
import teaProduct_9 from '../../../images/teaProducts/teaProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function TeaProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_1}
                        productName="Brooke Bond Taaza Black Tea"
                        productDesc='400 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_2}
                        productName="Finlays Masala Tea 25 pcs"
                        productDesc='50 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_3}
                        productName="Ispahani Blender's Choice Prem..."
                        productDesc='400 gm'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_4}
                        productName="Ispahani Mirzapore Best Leaf T..."
                        productDesc='400 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_5}
                        productName="KK Green Mint Tea"
                        productDesc='37.5 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_6}
                        productName='Lipton Green Tea Bag Honey and...'
                        productDesc='70 gm'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_7}
                        productName='Nestea Iced Tea Lemon'
                        productDesc='500 gm'
                        productPrice='345'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_8}
                        productName='Red Label Black Tea'
                        productDesc='400 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_9}
                        productName="Seylon Gold Blend Tea Bag"
                        productDesc='100 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_10}
                        productName="KK Green Lemongrass Tea"
                        productDesc='60 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_11}
                        productName='Tata Tea Tetley Premium Leaf'
                        productDesc='200 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_12}
                        productName="Besulim Mild Laxative Herbal T..."
                        productDesc='35 pcs'
                        productPrice='295'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_13}
                        productName='Finlay Gold Tea'
                        productDesc='400 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_14}
                        productName='Finlay Premium Tea'
                        productDesc='200 gm'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_15}
                        productName='Finlay Premium Tea'
                        productDesc='500 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_16}
                        productName='Finlays Gold Tea Bag 100 gm'
                        productDesc='50 pcs'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_17}
                        productName='Fresh Premium Green Tea'
                        productDesc='37.5 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_18}
                        productName="Fresh Premium Masala Tea"
                        productDesc='50 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_19}
                        productName="Ispahani Blender's Choice Blac..."
                        productDesc='200 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_20}
                        productName="Ispahani Mirzapore Best Leaf T..."
                        productDesc='200 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_21}
                        productName="Ispahani Mirzapore BOP Tea"
                        productDesc='500 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_22}
                        productName="Ispahani Mirzapore Red Dust (R..."
                        productDesc='400 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_23}
                        productName="Ispahani Mirzapore Tea Bag"
                        productDesc='50 pcs'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_24}
                        productName="Jafflong Classic Tea"
                        productDesc='400 gm'
                        productPrice='206'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_25}
                        productName="Jafflong Gold Black Tea"
                        productDesc='500 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_26}
                        productName="Kazi &amp; Kazi Black Tea"
                        productDesc='80 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_27}
                        productName="Kazi &amp; Kazi Jasmine Tea"
                        productDesc='60 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_28}
                        productName="Lipton Green Tea Classic"
                        productDesc='100 gm'
                        productPrice='620'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_29}
                        productName="Kazi &amp; Kazi Tea Green (40 Sach..."
                        productDesc='60 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_30}
                        productName="Kazi &amp; Kazi Ginger Tea"
                        productDesc='60 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_31}
                        productName="Finlays Pure Green Tea Bags"
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
                        productImage={teaProduct_32}
                        productName="Kazi &amp; Kazi Lemon Grass Tea"
                        productDesc='60 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_33}
                        productName="Ispahani Mirzapore Best Leaf T..."
                        productDesc='200 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_34}
                        productName="Kazi &amp; Kazi Tulsi Tea"
                        productDesc='60 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_35}
                        productName="Brooke Bond Taaza Black Tea"
                        productDesc='200 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_36}
                        productName="Brooke Bond Taaza Tea"
                        productDesc='1 kg'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_37}
                        productName="Ispahani Mirzapore Best Leaf T..."
                        productDesc='100 gm'
                        productPrice='57'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_38}
                        productName="Seylon Family Blend Tea Poly"
                        productDesc='400 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_39}
                        productName="Seylon Gold Tea"
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
                        productImage={teaProduct_40}
                        productName="Seylon PD Tea"
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
                        productImage={teaProduct_41}
                        productName="Bengal Classic Tea"
                        productDesc='400 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_42}
                        productName="Tetley Premium Tea Bags (50 pc..."
                        productDesc='100 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_43}
                        productName="Ispahani Mirzapore Best Leaf T..."
                        productDesc='350 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_44}
                        productName="Danish Simla Premium Blend Tea..."
                        productDesc='400 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_45}
                        productName="Danish Simla Tea Bag"
                        productDesc='100 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_46}
                        productName="Kazi &amp; Kazi Tea Green Lemongra..."
                        productDesc='60 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_47}
                        productName="KK Orthodox Green Tea"
                        productDesc='100 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_48}
                        productName="Kazi &amp; Kazi Medley (40 Sac..."
                        productDesc='60 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_49}
                        productName="Kazi &amp; Kazi Jasmine Green Tea"
                        productDesc='60 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_50}
                        productName="Kazi &amp; Kazi Tea Green (20 Sach..."
                        productDesc='30 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_51}
                        productName="Seylon Gold Blend Tea Bags (50..."
                        productDesc='100 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_52}
                        productName="Ispahani Blender's Chocice Gree..."
                        productDesc='37.5 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={teaProduct_53}
                        productName="Bengal Classic Tea Bag"
                        productDesc='400 gm'
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
