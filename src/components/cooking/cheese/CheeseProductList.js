import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import cheeseProduct_1 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_1.webp'
import cheeseProduct_10 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_10.webp'
import cheeseProduct_11 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_11.webp'
import cheeseProduct_12 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_12.webp'
import cheeseProduct_13 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_13.webp'
import cheeseProduct_14 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_14.webp'
import cheeseProduct_15 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_15.webp'
import cheeseProduct_16 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_16.webp'
import cheeseProduct_17 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_17.webp'
import cheeseProduct_18 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_18.webp'
import cheeseProduct_19 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_19.webp'
import cheeseProduct_2 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_2.webp'
import cheeseProduct_20 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_20.webp'
import cheeseProduct_21 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_21.webp'
import cheeseProduct_22 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_22.webp'
import cheeseProduct_23 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_23.webp'
import cheeseProduct_24 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_24.webp'
import cheeseProduct_25 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_25.webp'
import cheeseProduct_26 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_26.webp'
import cheeseProduct_27 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_27.webp'
import cheeseProduct_28 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_28.webp'
import cheeseProduct_29 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_29.webp'
import cheeseProduct_3 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_3.webp'
import cheeseProduct_30 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_30.webp'
import cheeseProduct_31 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_31.webp'
import cheeseProduct_32 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_32.webp'
import cheeseProduct_33 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_33.webp'
import cheeseProduct_34 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_34.webp'
import cheeseProduct_4 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_4.webp'
import cheeseProduct_5 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_5.webp'
import cheeseProduct_6 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_6.webp'
import cheeseProduct_7 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_7.webp'
import cheeseProduct_8 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_8.webp'
import cheeseProduct_9 from '../../../images/cookingProducts/cheeseProducts/cheeseProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function CheeseProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_1}
                        productName="Pran Dhaka Cheese"
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
                        productImage={cheeseProduct_2}
                        productName="Aarong Austogram Cheese 200 gm"
                        productDesc='200 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_3}
                        productName="Alamari Processed Cream Chees..."
                        productDesc='50 gm'
                        productPrice='699'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_4}
                        productName="Aarong Classic Sliced Cheese 2..."
                        productDesc='204 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_5}
                        productName='Melbourne Sandwich Sliced Chee...'
                        productDesc='12 slices'
                        productPrice='248'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_6}
                        productName='Almarai Triangles Cheese ( 8 SI...'
                        productDesc='120 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_7}
                        productName='Almarai Feta Cheese 400 gm'
                        productDesc='400 gm'
                        productPrice='598'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_8}
                        productName='Almarai Cheese Slices Burger (...'
                        productDesc='(10 slices) 200 gm'
                        productPrice='359'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_9}
                        productName='American Garden Popcorn Cheese...'
                        productDesc='273 gm'
                        productPrice='369'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_10}
                        productName="Bega Gourmet Slices Cheese 200"
                        productDesc='200 gm'
                        productPrice='319'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_11}
                        productName='Almarai Spreadable Cream Chees...'
                        productDesc='200 gm'
                        productPrice='338'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_12}
                        productName="German White Combi Cheese 500..."
                        productDesc='500 gm'
                        productPrice='595'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_13}
                        productName='Aarong Austogram Cheese 200 gm'
                        productDesc='200 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_14}
                        productName='Alamarai Processed Cream Chees...'
                        productDesc='50 gm'
                        productPrice='699'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_15}
                        productName='Aarong Classic Sliced Cheese 2...'
                        productDesc='204 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_16}
                        productName='Melbourne Sandwich Sliced Chee...'
                        productDesc='12 slices'
                        productPrice='248'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_17}
                        productName='Almarai Triangles Cheese ( 8 SI...'
                        productDesc='120 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_18}
                        productName="Almarai Feta Cheese 400 gm"
                        productDesc='400 gm'
                        productPrice='598'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_19}
                        productName='Almarai Cheese Slices Burger (...'
                        productDesc='(10 slices) 200 gm'
                        productPrice='359'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_20}
                        productName="American Garden Popcorn Cheese..."
                        productDesc='273 gm'
                        productPrice='369'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_21}
                        productName="Bega Gourmet Slices Cheese 200..."
                        productDesc='200 gm'
                        productPrice='319'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_22}
                        productName="Almarai Spreadable Cream Chees..."
                        productDesc='200 gm'
                        productPrice='338'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_23}
                        productName="German White Combi Cheese 500..."
                        productDesc='500 gm'
                        productPrice='595'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_24}
                        productName="Kraft Original Cheddar Cheese..."
                        productDesc='190 gm'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_25}
                        productName="Aarong Pizza Spread Cheese"
                        productDesc='180 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_26}
                        productName="Almarai Cheese Slices Burger (..."
                        productDesc='200 gm'
                        productPrice='359'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_27}
                        productName="Mozzarella Cheese"
                        productDesc='250 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_28}
                        productName="Aarong Dairy Shredded Mozzarel"
                        productDesc='200 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_29}
                        productName="Almarai Feta Cheese"
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
                        productImage={cheeseProduct_30}
                        productName="Kraft Processed Cheddar Cheese..."
                        productDesc='190 gm'
                        productPrice='299'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_31}
                        productName="Aarong Classic Sliced Cheese"
                        productDesc='200 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_32}
                        productName="Aarong Classic Spread Cheese"
                        productDesc='180 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_33}
                        productName="Aarong Garlic Spread Cheese"
                        productDesc='180 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cheeseProduct_34}
                        productName="Kissan Processed Cheese"
                        productDesc='200 gm'
                        productPrice='259'
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
