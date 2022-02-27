import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import cannedProduct_1 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_1.webp'
import cannedProduct_10 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_10.webp'
import cannedProduct_11 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_11.webp'
import cannedProduct_12 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_12.webp'
import cannedProduct_13 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_13.webp'
import cannedProduct_14 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_14.webp'
import cannedProduct_15 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_15.webp'
import cannedProduct_16 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_16.webp'
import cannedProduct_17 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_17.webp'
import cannedProduct_18 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_18.webp'
import cannedProduct_19 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_19.webp'
import cannedProduct_2 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_2.webp'
import cannedProduct_20 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_20.webp'
import cannedProduct_21 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_21.webp'
import cannedProduct_22 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_22.webp'
import cannedProduct_23 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_23.webp'
import cannedProduct_24 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_24.webp'
import cannedProduct_25 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_25.webp'
import cannedProduct_26 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_26.webp'
import cannedProduct_27 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_27.webp'
import cannedProduct_28 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_28.webp'
import cannedProduct_29 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_29.webp'
import cannedProduct_3 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_3.webp'
import cannedProduct_30 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_30.webp'
import cannedProduct_31 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_31.webp'
import cannedProduct_32 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_32.webp'
import cannedProduct_33 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_33.webp'
import cannedProduct_34 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_34.webp'
import cannedProduct_35 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_35.webp'
import cannedProduct_36 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_36.webp'
import cannedProduct_4 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_4.webp'
import cannedProduct_5 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_5.webp'
import cannedProduct_6 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_6.webp'
import cannedProduct_7 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_7.webp'
import cannedProduct_8 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_8.webp'
import cannedProduct_9 from '../../../images/frozenAndCannedProducts/cannedProducts/cannedProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function CannedProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_1}
                        productName="RS Pitted Green Olives"
                        productDesc='370 ml'
                        productPrice='185'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_2}
                        productName="Welcome Light Meat Tuna In Veg..."
                        productDesc='170 gm'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_3}
                        productName="Tinsels Sardin In Tomato Sauce"
                        productDesc='155 gm'
                        productPrice='129'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_4}
                        productName="Nautilus Sandwich Tuna In Soyb..."
                        productDesc='165 gm'
                        productPrice='209'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_5}
                        productName="Nautilus Lite Sandwich Tuna in..."
                        productDesc='165 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_6}
                        productName='Mazzan Red Kidney Beans'
                        productDesc='400 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_7}
                        productName='Mazza Chick Peas Can'
                        productDesc='400 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_8}
                        productName='Hosen Lychee'
                        productDesc='565 gm'
                        productPrice='249'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_9}
                        productName="Hosen Whole Peeled Tomato Pela..."
                        productDesc='400 gm'
                        productPrice='139'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_10}
                        productName="Hosen Select Gherkins Original..."
                        productDesc='680 gm'
                        productPrice='420'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_11}
                        productName='Hosen Quality Fruit Cocotail'
                        productDesc='836 gm'
                        productPrice='349'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_12}
                        productName="Hosen Pitted Green Olives"
                        productDesc='345 gm'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_13}
                        productName='Hosen Pineapple Slice'
                        productDesc='565 gm'
                        productPrice='249'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_14}
                        productName='Hosen Mushroom Choice Whole Ca...'
                        productDesc='425 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_15}
                        productName='Hosen Evaporated Filled Milk C...'
                        productDesc='390 gm'
                        productPrice='139'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_16}
                        productName='Hosen Chick Peas Can'
                        productDesc='400 gm'
                        productPrice='185'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_17}
                        productName='Garden Fresh Green Peas'
                        productDesc='425 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_18}
                        productName="Garden Fresh Red Kidney Bean"
                        productDesc='425 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_19}
                        productName="Golden Champ Mushroom (can)"
                        productDesc='425 gm'
                        productPrice='109'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_20}
                        productName="Green Park Mushroom Whole Can"
                        productDesc='425 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_21}
                        productName="Heizn Baked Beans (can)"
                        productDesc='415 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_22}
                        productName="Heinz Rice Pudding"
                        productDesc='120 gm'
                        productPrice='189'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_23}
                        productName="Hosen Whole Green Olives"
                        productDesc='350 gm'
                        productPrice='277'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_24}
                        productName="Hosen Asparagus"
                        productDesc='430 gm'
                        productPrice='319'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_25}
                        productName="Hosen Baked Beans In Tomato Sa..."
                        productDesc='425 gm'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_26}
                        productName="Hosen Bamboo Shoot"
                        productDesc='552 gm'
                        productPrice='299'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_27}
                        productName="Welcome Light Meat Tuna In Veg..."
                        productDesc='170 gm'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_28}
                        productName="Hosen Mushroom Choice Whole Ca..."
                        productDesc='425 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_29}
                        productName="Champion Mushrooms (Choice Who..."
                        productDesc='400 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_30}
                        productName="Blossoms Baby Corn"
                        productDesc='425 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_31}
                        productName="Figaro Green Olives"
                        productDesc='340 gm'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_32}
                        productName="Figaro Pitted Black Olive"
                        productDesc='340 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_33}
                        productName="Welcome Red Kidney Beans In Br..."
                        productDesc='425 gm'
                        productPrice='119'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_34}
                        productName="Hosen Chick Peas Can"
                        productDesc='425 gm'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_35}
                        productName="Best's Baby Corn"
                        productDesc='425 gm'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cannedProduct_36}
                        productName="Hosen Fruit Cocktail Premium i..."
                        productDesc='825 gm'
                        productPrice='300'
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
