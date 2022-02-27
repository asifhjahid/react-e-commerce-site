import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import babyFoodProduct_1 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_1.webp'
import babyFoodProduct_10 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_10.webp'
import babyFoodProduct_11 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_11.webp'
import babyFoodProduct_12 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_12.webp'
import babyFoodProduct_13 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_13.webp'
import babyFoodProduct_14 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_14.webp'
import babyFoodProduct_15 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_15.webp'
import babyFoodProduct_16 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_16.webp'
import babyFoodProduct_17 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_17.webp'
import babyFoodProduct_18 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_18.webp'
import babyFoodProduct_19 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_19.webp'
import babyFoodProduct_2 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_2.webp'
import babyFoodProduct_20 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_20.webp'
import babyFoodProduct_21 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_21.webp'
import babyFoodProduct_22 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_22.webp'
import babyFoodProduct_23 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_23.webp'
import babyFoodProduct_24 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_24.webp'
import babyFoodProduct_25 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_25.webp'
import babyFoodProduct_26 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_26.webp'
import babyFoodProduct_27 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_27.webp'
import babyFoodProduct_28 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_28.webp'
import babyFoodProduct_29 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_29.webp'
import babyFoodProduct_3 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_3.webp'
import babyFoodProduct_30 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_30.webp'
import babyFoodProduct_31 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_31.webp'
import babyFoodProduct_32 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_32.webp'
import babyFoodProduct_33 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_33.webp'
import babyFoodProduct_34 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_34.webp'
import babyFoodProduct_35 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_35.webp'
import babyFoodProduct_36 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_36.webp'
import babyFoodProduct_37 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_37.webp'
import babyFoodProduct_38 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_38.webp'
import babyFoodProduct_39 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_39.webp'
import babyFoodProduct_4 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_4.webp'
import babyFoodProduct_40 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_40.webp'
import babyFoodProduct_41 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_41.webp'
import babyFoodProduct_42 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_42.webp'
import babyFoodProduct_43 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_43.webp'
import babyFoodProduct_44 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_44.webp'
import babyFoodProduct_45 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_45.webp'
import babyFoodProduct_46 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_46.webp'
import babyFoodProduct_47 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_47.webp'
import babyFoodProduct_48 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_48.webp'
import babyFoodProduct_49 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_49.webp'
import babyFoodProduct_5 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_5.webp'
import babyFoodProduct_50 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_50.webp'
import babyFoodProduct_51 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_51.webp'
import babyFoodProduct_52 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_52.webp'
import babyFoodProduct_53 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_53.webp'
import babyFoodProduct_6 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_6.webp'
import babyFoodProduct_7 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_7.webp'
import babyFoodProduct_8 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_8.webp'
import babyFoodProduct_9 from '../../../images/kidsCareProducts/babyFoodProducts/babyFoodProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function BabyFoodProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_1}
                        productName="Baby Meal Infant Milk Wheat &amp;..."
                        productDesc='400 gm'
                        productPrice='410'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_2}
                        productName="Gerber Rice Cereal"
                        productDesc='227 gm'
                        productPrice='700'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_3}
                        productName="Mother's Smile Cereal Wheat Mi..."
                        productDesc='400 gm'
                        productPrice='385'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_4}
                        productName="Mother's Smile Grow Up 2+ Milk..."
                        productDesc='400 gm'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_5}
                        productName="Nestle Cerelac 1 Rice With Mil..."
                        productDesc='400 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_6}
                        productName='Nestle Cerelac 3 Five Fruits B...'
                        productDesc='350 gm'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_7}
                        productName='Nestle Cerelac 4 Potato &amp; Chic...'
                        productDesc='400 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_8}
                        productName='Nestle Cerelac Honey &amp; Wheat W...'
                        productDesc='1 kg'
                        productPrice='1499'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_9}
                        productName="Nestle Nodo 1+ Growing Up Milk..."
                        productDesc='350 gm'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_10}
                        productName="Nestle Nido Fortigrow Full Cre..."
                        productDesc='900 gm'
                        productPrice='925'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_11}
                        productName='Pedia Sure Complete Classic Van...'
                        productDesc='400 gm'
                        productPrice='1180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_12}
                        productName="Pedia Sure Vanilla Delight"
                        productDesc='1 kg'
                        productPrice='1716'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_13}
                        productName='Biomil 1 Milk Powder (0-6 mont...'
                        productDesc='350 gm'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_14}
                        productName='Biomil 2 Milk Powder (6-12 Mon...'
                        productDesc='180 gm'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_15}
                        productName='ELDOBABY 2 Follow Up BIB (6-12...'
                        productDesc='350 gm'
                        productPrice='510'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_16}
                        productName='Nestle Cerelac 1 Wheat &amp; Three...'
                        productDesc='400 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_17}
                        productName='Nestle Lactogen 2 Formula With...'
                        productDesc='350 gm'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_18}
                        productName="Nestle Lactogen 3 Formula Milk..."
                        productDesc='350 gm'
                        productPrice='490'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_19}
                        productName="Nestle Lactogen 4 Infant Formu..."
                        productDesc='350 gm'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_20}
                        productName="Nestle Lactogrow 3 Milk Powder..."
                        productDesc='1.8 kg'
                        productPrice='3399'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_21}
                        productName="Nestle NAN Al 110 Formula Milk..."
                        productDesc='400 gm'
                        productPrice='780'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_22}
                        productName="Nestle Nan Optipro 1 Formula M..."
                        productDesc='400 gm'
                        productPrice='860'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_23}
                        productName="Nestle NAN Optipro 4 Infant Fo..."
                        productDesc='350 gm'
                        productPrice='635'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_24}
                        productName="Nestle Cerelac Stage 3 Four Fr..."
                        productDesc='180 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_25}
                        productName="Nestle Lactogen 1 Infant Formu..."
                        productDesc='400 gm'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_26}
                        productName="Biomil 1 Formula 0-6 Months"
                        productDesc='350 gm'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_27}
                        productName="Biomil-3-Follow Up Formula Mi..."
                        productDesc='350 gm'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_28}
                        productName="Nestle Lactogen 1 Infant Formu..."
                        productDesc='400 gm'
                        productPrice='630'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_29}
                        productName="ELDOBABY 1 TIN Infant Formula..."
                        productDesc='1 tin'
                        productPrice='620'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_30}
                        productName="ELDOBABY 2 Follow Up Tin (6-12..."
                        productDesc='400 gm'
                        productPrice='640'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_31}
                        productName="Arla Deelac Infant Formula 1 (..."
                        productDesc='400 gm'
                        productPrice='580'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_32}
                        productName="Mother's Smile Prima 1 Milk Ti..."
                        productDesc='400 gm'
                        productPrice='620'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_33}
                        productName="Nestle Lactogen 3 Follow Up Fo..."
                        productDesc='400 gm'
                        productPrice='620'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_34}
                        productName="Biomil 2 Formula Milk Powder"
                        productDesc='400 gm'
                        productPrice='580'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_35}
                        productName="Arla Deelac 2 Follow On Formul..."
                        productDesc='400 gm'
                        productPrice='580'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_36}
                        productName="Mother's Smile Prima 2 Milk Ti..."
                        productDesc='400 gm'
                        productPrice='620'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_37}
                        productName="Biomil 1 Infant Milk Formula T..."
                        productDesc='400 gm'
                        productPrice='580'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_38}
                        productName="Mother's Smile Cerelac 4 Fruits..."
                        productDesc='400 gm'
                        productPrice='475'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_39}
                        productName="Biomil 3 Follow-Up Milk Formul..."
                        productDesc='400 gm'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_40}
                        productName="Nestle MILO Active-Go (Chocolat..."
                        productDesc='400 gm'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_41}
                        productName="Biomil 3 Follow Up Formula Mil..."
                        productDesc='350 gm'
                        productPrice='470'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_42}
                        productName="Biomil 3 Follow Up Formula Mil..."
                        productDesc='400 gm'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_43}
                        productName="Nestle Lactogen 2 Follow-Up Fo..."
                        productDesc='400 gm'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_44}
                        productName="Biomil 1 Infant Milk Formula T..."
                        productDesc='400 gm'
                        productPrice='580'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_45}
                        productName="Biomil 3 Follow-Up-Milk Formul..."
                        productDesc='180 gm'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_46}
                        productName="Nestle Cerelac With Milk, Whea..."
                        productDesc='300 gm'
                        productPrice='245'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_47}
                        productName="Nestle Nido 3+ Growing Up Milk..."
                        productDesc='350 gm'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_48}
                        productName="Nestle NAN Optipro 3 Infant Fo..."
                        productDesc='350 gm'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_49}
                        productName="Nestle Lactogen 1 Infant Formu..."
                        productDesc='180 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_50}
                        productName="Nestle Nido 1+ Growing Up Milk..."
                        productDesc='185 gm'
                        productPrice='185'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_51}
                        productName="Nestle Cerelac 4 Wheat &amp; Apple..."
                        productDesc='400 gm'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_52}
                        productName="Nestle Cerelac 1 Wheat &amp; Milk..."
                        productDesc='400 gm'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={babyFoodProduct_53}
                        productName="Nestle Cerelac 4 Rice, Potato..."
                        productDesc='180 gm'
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
