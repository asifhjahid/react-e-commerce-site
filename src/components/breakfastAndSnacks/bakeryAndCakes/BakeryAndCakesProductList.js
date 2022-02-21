import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import bakeryAndCakeProduct_1 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_1.jpg'
import bakeryAndCakeProduct_10 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_10.jpg'
import bakeryAndCakeProduct_11 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_11.jpg'
import bakeryAndCakeProduct_12 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_12.jpg'
import bakeryAndCakeProduct_13 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_13.jpg'
import bakeryAndCakeProduct_14 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_14.jpg'
import bakeryAndCakeProduct_15 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_15.jpg'
import bakeryAndCakeProduct_16 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_16.jpg'
import bakeryAndCakeProduct_17 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_17.jpg'
import bakeryAndCakeProduct_18 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_18.jpg'
import bakeryAndCakeProduct_19 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_19.jpg'
import bakeryAndCakeProduct_2 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_2.jpg'
import bakeryAndCakeProduct_20 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_20.jpg'
import bakeryAndCakeProduct_21 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_21.jpg'
import bakeryAndCakeProduct_22 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_22.jpg'
import bakeryAndCakeProduct_23 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_23.jpg'
import bakeryAndCakeProduct_24 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_24.jpg'
import bakeryAndCakeProduct_25 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_25.jpg'
import bakeryAndCakeProduct_26 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_26.jpg'
import bakeryAndCakeProduct_27 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_27.jpg'
import bakeryAndCakeProduct_28 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_28.jpg'
import bakeryAndCakeProduct_29 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_29.jpg'
import bakeryAndCakeProduct_3 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_3.jpg'
import bakeryAndCakeProduct_4 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_4.jpg'
import bakeryAndCakeProduct_5 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_5.jpg'
import bakeryAndCakeProduct_6 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_6.jpg'
import bakeryAndCakeProduct_7 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_7.jpg'
import bakeryAndCakeProduct_8 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_8.jpg'
import bakeryAndCakeProduct_9 from '../../../images/breakfastProducts/bakeryAndCakesProducts/bakeryAndCakeProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function BakeryAndCakesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_1}
                        productName="Dan Cake Chocolate Muffin Cake..."
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
                        productImage={bakeryAndCakeProduct_2}
                        productName="Dan Cake Chocolate Layer Cake..."
                        productDesc='360 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_3}
                        productName="Dan Cake Chocolate Pound Cake"
                        productDesc='300 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_4}
                        productName="Danish Dry Cake Biscuit"
                        productDesc='350 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_5}
                        productName='Dan Cake Dry Cake'
                        productDesc='300'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_6}
                        productName='Wonder Muffin Cake'
                        productDesc='6 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_7}
                        productName='Kishwan Chocolate Muffin Cake'
                        productDesc='25 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_8}
                        productName='Dan Cake Vanilla Plain Cake'
                        productDesc='150 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_9}
                        productName="Wonder Fruit Cake"
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
                        productImage={bakeryAndCakeProduct_10}
                        productName="Dan Cake Chocolate Layer Cake..."
                        productDesc='30 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_11}
                        productName='Dan Cake Chocolate Muffin Cake...'
                        productDesc='30 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_12}
                        productName="Wonder Creamy Twinkie Cake"
                        productDesc='30 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_13}
                        productName='Dan Cake Vanilla Layer Cake Cr...'
                        productDesc='30 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_14}
                        productName='Dan Cake Chocolate Layer Cake'
                        productDesc='360 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_15}
                        productName='Dan Cake Vanilla Layer Cake 12...'
                        productDesc='360'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_16}
                        productName='Dan Cake Vanilla Muffin Cake'
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
                        productImage={bakeryAndCakeProduct_17}
                        productName='Dan Cake Vanilla Muffin'
                        productDesc='30 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_18}
                        productName="Olympic Mini Dry Cake"
                        productDesc='38 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_19}
                        productName='Dan Cake Strawberry Swiss Roll'
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
                        productImage={bakeryAndCakeProduct_20}
                        productName="Olympic Dry Cake Biscuit"
                        productDesc='325 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_21}
                        productName="Dekko Dry Cake Biscuit"
                        productDesc='300 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_22}
                        productName="Dan Cake Marble Dry Cake"
                        productDesc='280 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_23}
                        productName="Dan Cake Butter"
                        productDesc='160 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_24}
                        productName="Dan Cake Vanilla Pound Cake"
                        productDesc='300 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_25}
                        productName="All Time Mixed Fruit Family Ca..."
                        productDesc='250 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_26}
                        productName="Dan Cake- Classic Brownies"
                        productDesc='180 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_27}
                        productName="Dan Cake Vanilla Pound"
                        productDesc='90 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_28}
                        productName="Dan Cake Chocolate Plain Cake"
                        productDesc='150 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakeryAndCakeProduct_29}
                        productName="Cadbury Chocobakes Choc Layere..."
                        productDesc='21 gm'
                        productPrice='10'
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
