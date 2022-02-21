import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import juiceProduct_1 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_1.webp'
import juiceProduct_10 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_10.webp'
import juiceProduct_11 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_11.webp'
import juiceProduct_12 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_12.webp'
import juiceProduct_13 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_13.webp'
import juiceProduct_14 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_14.webp'
import juiceProduct_15 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_15.webp'
import juiceProduct_16 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_16.webp'
import juiceProduct_17 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_17.webp'
import juiceProduct_18 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_18.webp'
import juiceProduct_19 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_19.webp'
import juiceProduct_2 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_2.webp'
import juiceProduct_20 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_20.webp'
import juiceProduct_21 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_21.webp'
import juiceProduct_22 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_22.webp'
import juiceProduct_23 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_23.webp'
import juiceProduct_24 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_24.webp'
import juiceProduct_25 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_25.webp'
import juiceProduct_26 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_26.webp'
import juiceProduct_27 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_27.webp'
import juiceProduct_28 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_28.webp'
import juiceProduct_29 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_29.webp'
import juiceProduct_3 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_3.webp'
import juiceProduct_30 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_30.webp'
import juiceProduct_31 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_31.webp'
import juiceProduct_32 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_32.webp'
import juiceProduct_33 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_33.webp'
import juiceProduct_34 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_34.webp'
import juiceProduct_35 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_35.webp'
import juiceProduct_36 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_36.webp'
import juiceProduct_37 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_37.webp'
import juiceProduct_38 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_38.webp'
import juiceProduct_39 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_39.webp'
import juiceProduct_4 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_4.webp'
import juiceProduct_40 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_40.webp'
import juiceProduct_41 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_41.webp'
import juiceProduct_5 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_5.webp'
import juiceProduct_6 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_6.webp'
import juiceProduct_7 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_7.webp'
import juiceProduct_8 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_8.webp'
import juiceProduct_9 from '../../../images/breakfastProducts/juiceProducts/juiceProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function JuiceProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_1}
                        productName="Pran Drinko Pineapple Juice"
                        productDesc='250 ml'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_2}
                        productName="Frutika Mango Juice"
                        productDesc='500 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_3}
                        productName="Latina 100% Juice (Apple)"
                        productDesc='1 Itr'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_4}
                        productName="Latina 100% Juice (Orange)"
                        productDesc='1 Itr'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_5}
                        productName='Pran Frooto Mango Fruit Drink'
                        productDesc='1 Itr'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_6}
                        productName='Pran Litchi Drink'
                        productDesc='150 ml'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_7}
                        productName='Shezan Mango Fruit Drinks'
                        productDesc='1 Itr'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_8}
                        productName='Tropicana Twister Orange Juice'
                        productDesc='1.5 Itr'
                        productPrice='799'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_9}
                        productName="Stute Cranberry Juice"
                        productDesc='1.5 Itr'
                        productPrice='565'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_10}
                        productName="Starship Mango Juice"
                        productDesc='200 ml'
                        productPrice='16'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_11}
                        productName='Starship Mango Junior'
                        productDesc='125 ml'
                        productPrice='12'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_12}
                        productName="Pran Junior Fruit Drink"
                        productDesc='125 ml'
                        productPrice='12'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_13}
                        productName='Masafi Tropical Fruits Nectar'
                        productDesc='1 Itr'
                        productPrice='385'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_14}
                        productName='Masafi Orange Fruits Juice'
                        productDesc='2 Itr'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_15}
                        productName='Masafi Mango Nectar Juice'
                        productDesc='2 Itr'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_16}
                        productName='Masafi Apple Juice'
                        productDesc='2 Itr'
                        productPrice='720'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_17}
                        productName='Masafi Tropical Fruits Nectar'
                        productDesc='2 Itr'
                        productPrice='720'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_18}
                        productName="American Harvest Basil Seed Dr..."
                        productDesc='290 ml'
                        productPrice='185'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_19}
                        productName='American Harvest Basil Seed Dr...'
                        productDesc='290 ml'
                        productPrice='185'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_20}
                        productName="American Harvest Basil Seed Dr..."
                        productDesc='290 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_21}
                        productName="American Harvest Basil Seed Dr..."
                        productDesc='290 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_22}
                        productName="American Harvest Coconut Milk..."
                        productDesc='290 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_23}
                        productName="American Harvest Basil Seed Dr..."
                        productDesc='290 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_24}
                        productName="Pran Mango Fruit Drink"
                        productDesc='250 ml'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_25}
                        productName="American Harvest Basil Seed Dr..."
                        productDesc='290'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_26}
                        productName="Aarong Dairy UHT Mango Milk Dr..."
                        productDesc='200 ml'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_27}
                        productName="Dolphin Strawberry Drink"
                        productDesc='350 ml'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_28}
                        productName="Dolphin Nata De Coco Lychee Dr..."
                        productDesc='350 ml'
                        productPrice='139'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_29}
                        productName="Dolphin Nata Drink Pineapple"
                        productDesc='350 ml'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_30}
                        productName="Frutika Mango Juice"
                        productDesc='1 Itr'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_31}
                        productName="Mirinda Orange"
                        productDesc='600 ml'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_32}
                        productName="Farm Fresh Elachi Flavoured Mi..."
                        productDesc='250 ml'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_33}
                        productName="Shake Chocolate Milkshake"
                        productDesc='250 ml'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_34}
                        productName="Frutika Mango Fruit Drink Pet"
                        productDesc='250 ml'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_35}
                        productName="Frutika (Mango) SIG"
                        productDesc='250 ml'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_36}
                        productName="Pran Drinko Litchi Juice"
                        productDesc='250 ml'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_37}
                        productName="Nutrilife Apple Fruit Magic Ju..."
                        productDesc='1 Itr'
                        productPrice='245'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_38}
                        productName="Nutrilife Pomegranate Fruit Ma..."
                        productDesc='1 Itr'
                        productPrice='245'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_39}
                        productName="AI Rabic Orange Juice"
                        productDesc='1 Itr'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_40}
                        productName="AI Rabic Pineapple Juice"
                        productDesc='1 Itr'
                        productPrice='450'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={juiceProduct_41}
                        productName="Cappy 100% Juice"
                        productDesc='1 Itr'
                        productPrice='450'
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
