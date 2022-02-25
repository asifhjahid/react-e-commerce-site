import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import fruitsProduct_1 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_1.webp'
import fruitsProduct_10 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_10.webp'
import fruitsProduct_11 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_11.webp'
import fruitsProduct_12 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_12.webp'
import fruitsProduct_13 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_13.webp'
import fruitsProduct_14 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_14.webp'
import fruitsProduct_15 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_15.webp'
import fruitsProduct_16 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_16.webp'
import fruitsProduct_17 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_17.webp'
import fruitsProduct_18 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_18.webp'
import fruitsProduct_19 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_19.webp'
import fruitsProduct_2 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_2.webp'
import fruitsProduct_20 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_20.webp'
import fruitsProduct_21 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_21.webp'
import fruitsProduct_22 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_22.webp'
import fruitsProduct_23 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_23.webp'
import fruitsProduct_24 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_24.webp'
import fruitsProduct_25 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_25.webp'
import fruitsProduct_26 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_26.webp'
import fruitsProduct_27 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_27.webp'
import fruitsProduct_28 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_28.webp'
import fruitsProduct_29 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_29.webp'
import fruitsProduct_3 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_3.webp'
import fruitsProduct_30 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_30.webp'
import fruitsProduct_31 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_31.webp'
import fruitsProduct_32 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_32.webp'
import fruitsProduct_33 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_33.webp'
import fruitsProduct_34 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_34.webp'
import fruitsProduct_35 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_35.webp'
import fruitsProduct_36 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_36.webp'
import fruitsProduct_37 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_37.webp'
import fruitsProduct_38 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_38.webp'
import fruitsProduct_39 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_39.webp'
import fruitsProduct_4 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_4.webp'
import fruitsProduct_40 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_40.webp'
import fruitsProduct_41 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_41.webp'
import fruitsProduct_42 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_42.webp'
import fruitsProduct_43 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_43.webp'
import fruitsProduct_44 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_44.webp'
import fruitsProduct_45 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_45.webp'
import fruitsProduct_46 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_46.webp'
import fruitsProduct_47 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_47.webp'
import fruitsProduct_5 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_5.webp'
import fruitsProduct_6 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_6.webp'
import fruitsProduct_7 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_7.webp'
import fruitsProduct_8 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_8.webp'
import fruitsProduct_9 from '../../../images/fruitsAndVegetablesProducts/fruitsProducts/fruitsProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FruitsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_1}
                        productName="Al Dharfa Dates"
                        productDesc='400 gm'
                        productPrice='159'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_2}
                        productName="Banana Chompa"
                        productDesc='12 pcs'
                        productPrice='58'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_3}
                        productName="Banana Sagor"
                        productDesc='12 pcs'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_4}
                        productName="Bangla Kola"
                        productDesc='12 pcs'
                        productPrice='86'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_5}
                        productName="Barari Dates"
                        productDesc='500 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_6}
                        productName='Black Kalmi Safawi Dates'
                        productDesc='1 kg'
                        productPrice='850'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_7}
                        productName='Pineapple Medium'
                        productDesc='each'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_8}
                        productName='China Fuji Apple'
                        productDesc='1 kg'
                        productPrice='205'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_9}
                        productName="Coconut (Large)"
                        productDesc='each'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_10}
                        productName="Crown Dabbas Dates"
                        productDesc='1 kg'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_11}
                        productName='Dragon Fruit Imported'
                        productDesc='1 kg (+/- 100 gm)'
                        productPrice='480'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_12}
                        productName="Gala Apple"
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_13}
                        productName='Green Apple'
                        productDesc='1 kg'
                        productPrice='238'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_14}
                        productName='Green Coconut (Daab)'
                        productDesc='each'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_15}
                        productName='Green Grapes'
                        productDesc='500 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_16}
                        productName='Guava Thai'
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_17}
                        productName='Hog Plum (Aamra)'
                        productDesc='1 kg (+/- 50gm)'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_18}
                        productName="Mabroom Al Madina Premium Date..."
                        productDesc='1 kg'
                        productPrice='1200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_19}
                        productName="Malta (Imported)"
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_20}
                        productName="Mariam Al Madina Premium Dates"
                        productDesc='1 kg'
                        productPrice='1100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_21}
                        productName="Orange (South Africa)"
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_22}
                        productName="Papaya"
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_23}
                        productName="Pear White (Nashpati Imported)"
                        productDesc='1 kg'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_24}
                        productName="Pineapple Large"
                        productDesc='each'
                        productPrice='62'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_25}
                        productName="Pomegranate (Anar/Dalim) Imported"
                        productDesc='1 kg'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_26}
                        productName="Red Grapes"
                        productDesc='500 gm'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_27}
                        productName="Olive (Jolpai)"
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
                        productImage={fruitsProduct_28}
                        productName="Sharifa"
                        productDesc='1 kg'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_29}
                        productName="Tamarind"
                        productDesc='500 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_30}
                        productName="Strawberry Imported"
                        productDesc='300 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_31}
                        productName="Apel Kul/ Boroi"
                        productDesc='1 kg'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_32}
                        productName="Banana Sagor"
                        productDesc='4 pcs / Hali'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_33}
                        productName="Banana Sobri"
                        productDesc='12 pcs / Dozn'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_34}
                        productName="Pear Green (Imported)"
                        productDesc='1 kg'
                        productPrice='379'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_35}
                        productName="Sapodilla (Sofeda)"
                        productDesc='1 kg'
                        productPrice='119'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_36}
                        productName="Coconut (Medium)"
                        productDesc='each'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_37}
                        productName="Watermelon Green Small"
                        productDesc='1 kg'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_38}
                        productName="Pomelo Fruit (Jambura)"
                        productDesc='1 pcs'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_39}
                        productName="Ajwa Dates"
                        productDesc='1 kg'
                        productPrice='1030'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_40}
                        productName="Orange (Chinese)"
                        productDesc='1 kg'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_41}
                        productName="Amla (Amloki)"
                        productDesc='250 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_42}
                        productName="Wood Apple -Bel"
                        productDesc='1 pcs'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_43}
                        productName="Wood Apple -Large (Kodbel)"
                        productDesc='1 pcs'
                        productPrice='78'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_44}
                        productName="Elephant Apple (Chalta)"
                        productDesc='1 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_45}
                        productName="Australian Apple"
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
                        productImage={fruitsProduct_46}
                        productName="Apple Honey"
                        productDesc='1 kg'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={fruitsProduct_47}
                        productName="Black Grapes"
                        productDesc='500 gm'
                        productPrice='155'
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
