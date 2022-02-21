import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import LocalBreakfast_1 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_1.jpg'
import LocalBreakfast_10 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_10.jpg'
import LocalBreakfast_11 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_11.jpg'
import LocalBreakfast_12 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_12.jpg'
import LocalBreakfast_13 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_13.jpg'
import LocalBreakfast_14 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_14.jpg'
import LocalBreakfast_15 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_15.jpg'
import LocalBreakfast_16 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_16.jpg'
import LocalBreakfast_17 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_17.jpg'
import LocalBreakfast_18 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_18.jpg'
import LocalBreakfast_19 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_19.jpg'
import LocalBreakfast_2 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_2.jpg'
import LocalBreakfast_20 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_20.jpg'
import LocalBreakfast_21 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_21.jpg'
import LocalBreakfast_22 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_22.jpg'
import LocalBreakfast_23 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_23.jpg'
import LocalBreakfast_24 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_24.jpg'
import LocalBreakfast_25 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_25.jpg'
import LocalBreakfast_26 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_26.jpg'
import LocalBreakfast_27 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_27.jpg'
import LocalBreakfast_28 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_28.jpg'
import LocalBreakfast_29 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_29.jpg'
import LocalBreakfast_3 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_3.jpg'
import LocalBreakfast_4 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_4.jpg'
import LocalBreakfast_5 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_5.jpg'
import LocalBreakfast_6 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_6.jpg'
import LocalBreakfast_7 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_7.jpg'
import LocalBreakfast_8 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_8.jpg'
import LocalBreakfast_9 from '../../../images/breakfastProducts/localBreakfastProducts/localBreakfast_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function RegularProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_1}
                        productName='Bashundara Puffed Rice'
                        productDesc='250 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_2}
                        productName='Golden Harvest Frozen Paratha...'
                        productDesc='1300 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_3}
                        productName='Ispahani Bakery Fresh Dry Cake'
                        productDesc='330 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_4}
                        productName='Prab Flattened Rice(Chira)'
                        productDesc='500 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_5}
                        productName='Pran Puffed Rice (Muri)'
                        productDesc='500 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_6}
                        productName="Tiffany Crunch 'n' Cream Orang..."
                        productDesc='76 gm'
                        productPrice='109'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_7}
                        productName='Jhatpot Plain Paratha'
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
                        productImage={LocalBreakfast_8}
                        productName='Jhatpot Deshi Paratha Premium...'
                        productDesc='1300 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_9}
                        productName='Jhatpat French Fry'
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
                        productImage={LocalBreakfast_10}
                        productName='Jhatpat Chicken Strips'
                        productDesc='250 gm'
                        productPrice='210'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_11}
                        productName='Jhatpat Chicken Momo'
                        productDesc='10 pcs'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_12}
                        productName='Jhatpot Vegetable Spring Roll'
                        productDesc='9 pcs'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_13}
                        productName='Jhatpot Chicken Sausages'
                        productDesc='340 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_14}
                        productName='All Time Sandwich Bread'
                        productDesc='700 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_15}
                        productName='All Time Butter Bun'
                        productDesc='each'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_16}
                        productName='All Time Chocolate Bun'
                        productDesc='each'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_17}
                        productName='All Time Milk Bread'
                        productDesc='325 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_18}
                        productName='Well Food Sandwich Bread'
                        productDesc='500 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_19}
                        productName='All Time Honeycomb'
                        productDesc='60 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_20}
                        productName='Well Food Milk Bread'
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
                        productImage={LocalBreakfast_21}
                        productName='Hamdard Ispaghol (Husk)'
                        productDesc='25 sachets'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_22}
                        productName='Sajeeb Isobgul Bhushi'
                        productDesc='45 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_23}
                        productName='Isobgul Bhushi'
                        productDesc='100'
                        productPrice='129'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_24}
                        productName='Pran Flattened Rice (Chira)'
                        productDesc='250 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_25}
                        productName='Chira Seeds'
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
                        productImage={LocalBreakfast_26}
                        productName='BPM Chira Seed'
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
                        productImage={LocalBreakfast_27}
                        productName='Memory Papar'
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
                        productImage={LocalBreakfast_28}
                        productName='Home Made Ring Papor Chips Kac...'
                        productDesc='200 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={LocalBreakfast_29}
                        productName='Chui Pitha'
                        productDesc='1 kg'
                        productPrice='130'
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
