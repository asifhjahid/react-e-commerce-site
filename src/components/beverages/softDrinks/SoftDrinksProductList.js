import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import softDrinksProduct_1 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_1.webp'
import softDrinksProduct_10 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_10.webp'
import softDrinksProduct_11 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_11.webp'
import softDrinksProduct_12 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_12.webp'
import softDrinksProduct_13 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_13.webp'
import softDrinksProduct_14 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_14.webp'
import softDrinksProduct_15 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_15.webp'
import softDrinksProduct_16 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_16.webp'
import softDrinksProduct_17 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_17.webp'
import softDrinksProduct_18 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_18.webp'
import softDrinksProduct_19 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_19.webp'
import softDrinksProduct_2 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_2.webp'
import softDrinksProduct_20 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_20.webp'
import softDrinksProduct_21 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_21.webp'
import softDrinksProduct_22 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_22.webp'
import softDrinksProduct_23 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_23.webp'
import softDrinksProduct_24 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_24.webp'
import softDrinksProduct_25 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_25.webp'
import softDrinksProduct_26 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_26.webp'
import softDrinksProduct_27 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_27.webp'
import softDrinksProduct_28 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_28.webp'
import softDrinksProduct_29 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_29.webp'
import softDrinksProduct_3 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_3.webp'
import softDrinksProduct_30 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_30.webp'
import softDrinksProduct_31 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_31.webp'
import softDrinksProduct_32 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_32.webp'
import softDrinksProduct_33 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_33.webp'
import softDrinksProduct_34 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_34.webp'
import softDrinksProduct_35 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_35.webp'
import softDrinksProduct_36 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_36.webp'
import softDrinksProduct_37 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_37.webp'
import softDrinksProduct_38 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_38.webp'
import softDrinksProduct_39 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_39.webp'
import softDrinksProduct_4 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_4.webp'
import softDrinksProduct_40 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_40.webp'
import softDrinksProduct_41 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_41.webp'
import softDrinksProduct_5 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_5.webp'
import softDrinksProduct_6 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_6.webp'
import softDrinksProduct_7 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_7.webp'
import softDrinksProduct_8 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_8.webp'
import softDrinksProduct_9 from '../../../images/beveragesProducts/softDrinksProducts/softDrinkProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SoftDrinksProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_1}
                        productName="7 Up Can"
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_2}
                        productName="7 Up"
                        productDesc='2.25 Itr'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_3}
                        productName="Coca-Cola"
                        productDesc='2.25 Itr'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_4}
                        productName="Fanta Can"
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_5}
                        productName="Fanta"
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
                        productImage={softDrinksProduct_6}
                        productName='Mountain Dew'
                        productDesc='1 Itr'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_7}
                        productName='Naga Mojo'
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
                        productImage={softDrinksProduct_8}
                        productName='Pepsi Pet'
                        productDesc='2.25 Itr'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_9}
                        productName="Sprite"
                        productDesc='600 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_10}
                        productName="Coca-Cola"
                        productDesc='600 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_11}
                        productName='Mountain Dew'
                        productDesc='250 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_12}
                        productName="Mountain Dew Can"
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_13}
                        productName='RC Jeera Pani'
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
                        productImage={softDrinksProduct_14}
                        productName='Mojo'
                        productDesc='250 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_15}
                        productName='Clemon Can'
                        productDesc='250 ml'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_16}
                        productName='Clemon Pet'
                        productDesc='250 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_17}
                        productName='Pepsi Can'
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_18}
                        productName="Pepsi"
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
                        productImage={softDrinksProduct_19}
                        productName="Mojo Pet"
                        productDesc='500 ml'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_20}
                        productName="Sprite Pet"
                        productDesc='2.25 Itr'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_21}
                        productName="Pepsi"
                        productDesc='1 Itr'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_22}
                        productName="Sprite Can"
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_23}
                        productName="Sprite Pet"
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
                        productImage={softDrinksProduct_24}
                        productName="Coca-Cola Pocket Pack"
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
                        productImage={softDrinksProduct_25}
                        productName="Coca-Cola Zero Pet"
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
                        productImage={softDrinksProduct_26}
                        productName="Sprite Zero Sugar"
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
                        productImage={softDrinksProduct_27}
                        productName="Coca-Cola"
                        productDesc='1.25 Itr'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_28}
                        productName="Sprite"
                        productDesc='1.25 Itr'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_29}
                        productName="Fanta"
                        productDesc='1.25 Itr'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_30}
                        productName="Royal Crown Club Soda"
                        productDesc='500 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_31}
                        productName="Fanta"
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
                        productImage={softDrinksProduct_32}
                        productName="Coca-Cola Zero Sugar"
                        productDesc='320 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_33}
                        productName="Coca-Cola Diet Can"
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_34}
                        productName="Coca Cola Pet"
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
                        productImage={softDrinksProduct_35}
                        productName="Coca Cola Can"
                        productDesc='250 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_36}
                        productName="Aloevine Aloe Vera Drink"
                        productDesc='1.5 Itr'
                        productPrice='750'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_37}
                        productName="7 Up"
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
                        productImage={softDrinksProduct_38}
                        productName="7 Up"
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
                        productImage={softDrinksProduct_39}
                        productName="7 Up"
                        productDesc='2.25 Itr'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_40}
                        productName="7 Up"
                        productDesc='1.25 Itr'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={softDrinksProduct_41}
                        productName="7 Up"
                        productDesc='1.25 Itr'
                        productPrice='65'
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
