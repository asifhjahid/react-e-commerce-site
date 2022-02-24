import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import powderMilkProduct_1 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_1.jpg'
import powderMilkProduct_10 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_10.jpg'
import powderMilkProduct_11 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_11.jpg'
import powderMilkProduct_12 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_12.jpg'
import powderMilkProduct_13 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_13.jpg'
import powderMilkProduct_14 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_14.jpg'
import powderMilkProduct_15 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_15.jpg'
import powderMilkProduct_16 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_16.jpg'
import powderMilkProduct_17 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_17.jpg'
import powderMilkProduct_18 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_18.jpg'
import powderMilkProduct_19 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_19.jpg'
import powderMilkProduct_2 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_2.jpg'
import powderMilkProduct_20 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_20.jpg'
import powderMilkProduct_21 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_21.jpg'
import powderMilkProduct_22 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_22.jpg'
import powderMilkProduct_23 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_23.jpg'
import powderMilkProduct_24 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_24.jpg'
import powderMilkProduct_25 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_25.jpg'
import powderMilkProduct_26 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_26.jpg'
import powderMilkProduct_27 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_27.jpg'
import powderMilkProduct_28 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_28.jpg'
import powderMilkProduct_29 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_29.jpg'
import powderMilkProduct_3 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_3.jpg'
import powderMilkProduct_30 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_30.jpg'
import powderMilkProduct_31 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_31.jpg'
import powderMilkProduct_32 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_32.jpg'
import powderMilkProduct_33 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_33.jpg'
import powderMilkProduct_34 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_34.jpg'
import powderMilkProduct_35 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_35.jpg'
import powderMilkProduct_36 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_36.jpg'
import powderMilkProduct_37 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_37.jpg'
import powderMilkProduct_38 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_38.jpg'
import powderMilkProduct_39 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_39.jpg'
import powderMilkProduct_4 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_4.jpg'
import powderMilkProduct_40 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_40.jpg'
import powderMilkProduct_5 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_5.jpg'
import powderMilkProduct_6 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_6.jpg'
import powderMilkProduct_7 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_7.jpg'
import powderMilkProduct_8 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_8.jpg'
import powderMilkProduct_9 from '../../../images/cookingProducts/powderMilkProducts/powderMilkProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function PowderMilkProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_1}
                        productName="Arla Dano Growth Shakti Powder..."
                        productDesc='200 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_2}
                        productName="Fresh Dessert Milk Powder"
                        productDesc='1 kg'
                        productPrice='690'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_3}
                        productName="Fresh Dessert Milk Powder"
                        productDesc='550 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_4}
                        productName="Marks Active School Milk Powde..."
                        productDesc='400 gm'
                        productPrice='340'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_5}
                        productName='Marks Milk Powder Poly'
                        productDesc='1 kg'
                        productPrice='690'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_6}
                        productName='Marks Diet Low Fat Milk Powder'
                        productDesc='400 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_7}
                        productName='Marks Young Star (16-40 years)'
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
                        productImage={powderMilkProduct_8}
                        productName='Marks Milk Based Diabetic Diet'
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
                        productImage={powderMilkProduct_9}
                        productName='Marks Active School 2 in 1 Cho...'
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
                        productImage={powderMilkProduct_10}
                        productName="Marks Milk Powder Tin"
                        productDesc='1 kg'
                        productPrice='890'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_11}
                        productName='Danish Condensed Filled Milk'
                        productDesc='397 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_12}
                        productName="No 1 Condensed Milk"
                        productDesc='400 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_13}
                        productName='Starship Condensed Milk'
                        productDesc='397'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_14}
                        productName='Marks Gold High Calcium Low Fa...'
                        productDesc='400 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_15}
                        productName='Arla Dano Growth Shakti Powder...'
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
                        productImage={powderMilkProduct_16}
                        productName='Dano Power Full Cream Instant...'
                        productDesc='1 kg'
                        productPrice='740'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_17}
                        productName="Mother's Smile Profom Milk Jar"
                        productDesc='400 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_18}
                        productName="Fresh Full Cream Milk Powder"
                        productDesc='400 gm'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_19}
                        productName='Diploma Instant Full Cream Mil...'
                        productDesc='200 ml'
                        productPrice='155'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_20}
                        productName="Dano Sterilized Cream"
                        productDesc='170 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_21}
                        productName="Dano Power Instant Full Cream..."
                        productDesc='500 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_22}
                        productName="Dano Dairy Pushti"
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
                        productImage={powderMilkProduct_23}
                        productName="Dano Daily Pushti"
                        productDesc='325 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_24}
                        productName="Dano Full Cream Milk Powder"
                        productDesc='400 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_25}
                        productName="Calci-Pro High Calcium Low Fat..."
                        productDesc='400 gm'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_26}
                        productName="Marks Milk Powder"
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_27}
                        productName="Marks Milk Powder Box Pack"
                        productDesc='400 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_28}
                        productName="Marks Milk Powder Poly"
                        productDesc='1 kg'
                        productPrice='690'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_29}
                        productName="Fresh Full Cream Milk Powder"
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_30}
                        productName="Marks Full Cream Milk Powder"
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_31}
                        productName="Dano Power Full Cream Milk Pow..."
                        productDesc='400 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_32}
                        productName="Diploma Instant Full Cream Mil..."
                        productDesc='1 kg'
                        productPrice='690'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_33}
                        productName="Diploma Instant Full Cream Mil..."
                        productDesc='500 gm'
                        productPrice='365'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_34}
                        productName="Diploma Instant Full Cream Milk"
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
                        productImage={powderMilkProduct_35}
                        productName="Diploma Instant Full Cream Mil..."
                        productDesc='50 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_36}
                        productName="Dano Power Instant Full Cream..."
                        productDesc='200 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_37}
                        productName="Dano Power Instant Full Cream..."
                        productDesc='1 kg'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_38}
                        productName="Arla Dano Daily Pushti Milk Po..."
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
                        productImage={powderMilkProduct_39}
                        productName="Farmland Full Cream Milk Powde..."
                        productDesc='500 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={powderMilkProduct_40}
                        productName="Anchor Fortified Full Cream Mi..."
                        productDesc='1 kg'
                        productPrice='630'
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
