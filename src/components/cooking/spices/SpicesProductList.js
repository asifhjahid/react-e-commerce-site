import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import spicesProduct_1 from '../../../images/cookingProducts/spicesProducts/spicesProduct_1.jpg'
import spicesProduct_10 from '../../../images/cookingProducts/spicesProducts/spicesProduct_10.jpg'
import spicesProduct_11 from '../../../images/cookingProducts/spicesProducts/spicesProduct_11.jpg'
import spicesProduct_12 from '../../../images/cookingProducts/spicesProducts/spicesProduct_12.jpg'
import spicesProduct_13 from '../../../images/cookingProducts/spicesProducts/spicesProduct_13.jpg'
import spicesProduct_14 from '../../../images/cookingProducts/spicesProducts/spicesProduct_14.jpg'
import spicesProduct_15 from '../../../images/cookingProducts/spicesProducts/spicesProduct_15.jpg'
import spicesProduct_16 from '../../../images/cookingProducts/spicesProducts/spicesProduct_16.jpg'
import spicesProduct_17 from '../../../images/cookingProducts/spicesProducts/spicesProduct_17.jpg'
import spicesProduct_18 from '../../../images/cookingProducts/spicesProducts/spicesProduct_18.jpg'
import spicesProduct_19 from '../../../images/cookingProducts/spicesProducts/spicesProduct_19.jpg'
import spicesProduct_2 from '../../../images/cookingProducts/spicesProducts/spicesProduct_2.jpg'
import spicesProduct_20 from '../../../images/cookingProducts/spicesProducts/spicesProduct_20.jpg'
import spicesProduct_21 from '../../../images/cookingProducts/spicesProducts/spicesProduct_21.jpg'
import spicesProduct_22 from '../../../images/cookingProducts/spicesProducts/spicesProduct_22.jpg'
import spicesProduct_23 from '../../../images/cookingProducts/spicesProducts/spicesProduct_23.jpg'
import spicesProduct_24 from '../../../images/cookingProducts/spicesProducts/spicesProduct_24.jpg'
import spicesProduct_25 from '../../../images/cookingProducts/spicesProducts/spicesProduct_25.jpg'
import spicesProduct_26 from '../../../images/cookingProducts/spicesProducts/spicesProduct_26.jpg'
import spicesProduct_27 from '../../../images/cookingProducts/spicesProducts/spicesProduct_27.jpg'
import spicesProduct_28 from '../../../images/cookingProducts/spicesProducts/spicesProduct_28.jpg'
import spicesProduct_29 from '../../../images/cookingProducts/spicesProducts/spicesProduct_29.jpg'
import spicesProduct_3 from '../../../images/cookingProducts/spicesProducts/spicesProduct_3.jpg'
import spicesProduct_30 from '../../../images/cookingProducts/spicesProducts/spicesProduct_30.jpg'
import spicesProduct_31 from '../../../images/cookingProducts/spicesProducts/spicesProduct_31.jpg'
import spicesProduct_32 from '../../../images/cookingProducts/spicesProducts/spicesProduct_32.jpg'
import spicesProduct_33 from '../../../images/cookingProducts/spicesProducts/spicesProduct_33.jpg'
import spicesProduct_34 from '../../../images/cookingProducts/spicesProducts/spicesProduct_34.jpg'
import spicesProduct_35 from '../../../images/cookingProducts/spicesProducts/spicesProduct_35.jpg'
import spicesProduct_36 from '../../../images/cookingProducts/spicesProducts/spicesProduct_36.jpg'
import spicesProduct_37 from '../../../images/cookingProducts/spicesProducts/spicesProduct_37.jpg'
import spicesProduct_38 from '../../../images/cookingProducts/spicesProducts/spicesProduct_38.jpg'
import spicesProduct_39 from '../../../images/cookingProducts/spicesProducts/spicesProduct_39.jpg'
import spicesProduct_4 from '../../../images/cookingProducts/spicesProducts/spicesProduct_4.jpg'
import spicesProduct_40 from '../../../images/cookingProducts/spicesProducts/spicesProduct_40.jpg'
import spicesProduct_41 from '../../../images/cookingProducts/spicesProducts/spicesProduct_41.jpg'
import spicesProduct_42 from '../../../images/cookingProducts/spicesProducts/spicesProduct_42.jpg'
import spicesProduct_43 from '../../../images/cookingProducts/spicesProducts/spicesProduct_43.jpg'
import spicesProduct_44 from '../../../images/cookingProducts/spicesProducts/spicesProduct_44.jpg'
import spicesProduct_45 from '../../../images/cookingProducts/spicesProducts/spicesProduct_45.jpg'
import spicesProduct_46 from '../../../images/cookingProducts/spicesProducts/spicesProduct_46.jpg'
import spicesProduct_47 from '../../../images/cookingProducts/spicesProducts/spicesProduct_47.jpg'
import spicesProduct_48 from '../../../images/cookingProducts/spicesProducts/spicesProduct_48.jpg'
import spicesProduct_49 from '../../../images/cookingProducts/spicesProducts/spicesProduct_49.jpg'
import spicesProduct_5 from '../../../images/cookingProducts/spicesProducts/spicesProduct_5.jpg'
import spicesProduct_50 from '../../../images/cookingProducts/spicesProducts/spicesProduct_50.jpg'
import spicesProduct_51 from '../../../images/cookingProducts/spicesProducts/spicesProduct_51.jpg'
import spicesProduct_52 from '../../../images/cookingProducts/spicesProducts/spicesProduct_52.jpg'
import spicesProduct_6 from '../../../images/cookingProducts/spicesProducts/spicesProduct_6.jpg'
import spicesProduct_7 from '../../../images/cookingProducts/spicesProducts/spicesProduct_7.jpg'
import spicesProduct_8 from '../../../images/cookingProducts/spicesProducts/spicesProduct_8.jpg'
import spicesProduct_9 from '../../../images/cookingProducts/spicesProducts/spicesProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SpicesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_1}
                        productName="Radhuni Turmeric Powder (Holud..."
                        productDesc='200 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_2}
                        productName="Radhuni Cumin (Jeera) Powder"
                        productDesc='100 gm'
                        productPrice='88'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_3}
                        productName="Radhuni Chilli (Morich) Powder"
                        productDesc='100 gm'
                        productPrice='53'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_4}
                        productName="Radhuni Chilli (Morich) Powder"
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
                        productImage={spicesProduct_5}
                        productName="Radhuni Coriander (Dhoniya) Po..."
                        productDesc='200 gm'
                        productPrice='63'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_6}
                        productName='Radhuni Garam Masala'
                        productDesc='40 gm'
                        productPrice='68'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_7}
                        productName='Dried Chillies (Shukna Morich)'
                        productDesc='100 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_8}
                        productName='Cloves (Lobongo)'
                        productDesc='50 gm'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_9}
                        productName="Cardamom (Elachi)"
                        productDesc='50 gm'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_10}
                        productName="Black Pepper Whole"
                        productDesc='50 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_11}
                        productName='Black Cumin (Kalo Jira)'
                        productDesc='100 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_12}
                        productName="Bay Leaves (Tejpata)"
                        productDesc='100 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_13}
                        productName='Shan Chaat Masala'
                        productDesc='100 gm'
                        productPrice='113'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_14}
                        productName='Memory Chat Masala 50 gm'
                        productDesc='50 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_15}
                        productName='Haiko Chat Masala'
                        productDesc='50 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_16}
                        productName='Radhuni Chilli (Morich) Powder'
                        productDesc='50 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_17}
                        productName='Radhuni Turmeric (Holud) Powde...'
                        productDesc='50 gm'
                        productPrice='26'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_18}
                        productName="Radhuni Cumin (Jeera) Powder"
                        productDesc='50 gm'
                        productPrice='48'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_19}
                        productName="Fresh Turmeric Powder"
                        productDesc='50 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_20}
                        productName="ACI Pure Meat Curry Masala"
                        productDesc='20 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_21}
                        productName="ACI Pure Beef Curry Masala"
                        productDesc='20 gm'
                        productPrice='17'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_22}
                        productName="ACI Pure Garam Masala"
                        productDesc='15 gm'
                        productPrice='26'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_23}
                        productName="ACI Pure Chili Powder"
                        productDesc='200 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_24}
                        productName="Fresh Chili Powder / Morich Gura..."
                        productDesc='200 gm'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_25}
                        productName="Danish Chili Powder"
                        productDesc='500 gm'
                        productPrice='208'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_26}
                        productName="Radhuni Coriander (Dhoniya) Po..."
                        productDesc='500 gm'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_27}
                        productName="Radhuni Coriander (Dhoniya) Po..."
                        productDesc='100 gm'
                        productPrice='33'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_28}
                        productName="Radhuni Cumin Powder"
                        productDesc='15 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_29}
                        productName="Pran Cumin"
                        productDesc='100 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_30}
                        productName="Pran Turmeric Powder"
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
                        productImage={spicesProduct_31}
                        productName="BD Food Cumin Powder (Jeera Gu..."
                        productDesc='50 gm'
                        productPrice='43'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_32}
                        productName="Radhuni Cumin Powder"
                        productDesc='200 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_33}
                        productName="ACI Pure Dhonia Powder"
                        productDesc='100 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_34}
                        productName="Arku Turmeric (Holud Powder)"
                        productDesc='200 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_35}
                        productName="Pran Cumin Powder Jar"
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
                        productImage={spicesProduct_36}
                        productName="Ahmed Garlic Powder Jar"
                        productDesc='140 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_37}
                        productName="Pran Spice Garlic Powder"
                        productDesc='150 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_38}
                        productName="Ahmed Ginger Paste"
                        productDesc='100 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_39}
                        productName="Ahmed Garlic Ginger Paste"
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
                        productImage={spicesProduct_40}
                        productName="Ahmed Ginger Paste (Jar)"
                        productDesc='280 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_41}
                        productName="Ahmed Garlic Paste"
                        productDesc='100 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_42}
                        productName="Cumin Seed (Jira)"
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
                        productImage={spicesProduct_43}
                        productName="Cinnamon (Darchini)"
                        productDesc='100 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_44}
                        productName="Cinnamon (Darchini)"
                        productDesc='50 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_45}
                        productName="Cloves (Lobongo)"
                        productDesc='50 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_46}
                        productName="Poppy Seed (Posto Dana)"
                        productDesc='50 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_47}
                        productName="Farmroots Whole White Pepper (G..."
                        productDesc='50 gm'
                        productPrice='99'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_48}
                        productName="White Pepper (Gol Morich) Powder"
                        productDesc='30 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_49}
                        productName="Shahi Jira (Black Cumin)"
                        productDesc='100 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_50}
                        productName="Shahi Jeera"
                        productDesc='50 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_51}
                        productName="White Sesame Seeds (Sada Teel/..."
                        productDesc='250 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={spicesProduct_52}
                        productName="Tokma Seeds"
                        productDesc='50 gm'
                        productPrice='20'
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
