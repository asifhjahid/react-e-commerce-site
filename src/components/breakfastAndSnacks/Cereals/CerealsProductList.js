import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import cerealsProduct_1 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_1.jpg'
import cerealsProduct_10 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_10.jpg'
import cerealsProduct_11 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_11.jpg'
import cerealsProduct_12 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_12.jpg'
import cerealsProduct_13 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_13.jpg'
import cerealsProduct_14 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_14.jpg'
import cerealsProduct_15 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_15.jpg'
import cerealsProduct_16 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_16.jpg'
import cerealsProduct_17 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_17.jpg'
import cerealsProduct_18 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_18.jpg'
import cerealsProduct_19 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_19.jpg'
import cerealsProduct_2 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_2.jpg'
import cerealsProduct_20 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_20.jpg'
import cerealsProduct_21 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_21.jpg'
import cerealsProduct_3 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_3.jpg'
import cerealsProduct_4 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_4.jpg'
import cerealsProduct_5 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_5.jpg'
import cerealsProduct_6 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_6.jpg'
import cerealsProduct_7 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_7.jpg'
import cerealsProduct_8 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_8.jpg'
import cerealsProduct_9 from '../../../images/breakfastProducts/cerealsProducts/cerealsProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function CerealsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_1}
                        productName="Kellogg's Chocos Chocolate Bre..."
                        productDesc='26 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_2}
                        productName="Kellogg's Chocos Fills Chocola..."
                        productDesc='250 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_3}
                        productName="Kellogg's Corn Flakes with Alm..."
                        productDesc='300 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_4}
                        productName="Kellogg's Corn Flakes Original..."
                        productDesc='475 gm'
                        productPrice='385'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_5}
                        productName='Nestle Gold Corn Flakes Breakf...'
                        productDesc='275 gm'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_6}
                        productName='Nestle Koko Krunch Chocolate C...'
                        productDesc='330 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_7}
                        productName='Quaker Oats Poly'
                        productDesc='450 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_8}
                        productName='Quaker Oats Jar'
                        productDesc='1 kg'
                        productPrice='599'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_9}
                        productName='Quaker White Oats'
                        productDesc='500 gm'
                        productPrice='289'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_10}
                        productName="Kellogg's Froot Loops"
                        productDesc='300 gm'
                        productPrice='629'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_11}
                        productName='Quaker White Oats'
                        productDesc='500 gm'
                        productPrice='289'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_12}
                        productName="Mother's Smile Cereal Rice &amp; M..."
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
                        productImage={cerealsProduct_13}
                        productName='Kelloggs Oats'
                        productDesc='1 kg'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_14}
                        productName='Kelloggs Oats'
                        productDesc='450 gm'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_15}
                        productName='Kelloggs Whole Oats'
                        productDesc='700'
                        productPrice='505'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_16}
                        productName='Nestle Gold Corn Flakes Cereal'
                        productDesc='500'
                        productPrice='683'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_17}
                        productName='Nestle Gold Corn Flakes Cereal'
                        productDesc='275 gm'
                        productPrice='340'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_18}
                        productName="Kellogg's Corn Flakes Original..."
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
                        productImage={cerealsProduct_19}
                        productName='Nestle Koko Krunch Breakfast C...'
                        productDesc='170 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_20}
                        productName="Kellogg's Chocos Chocolate Bre..."
                        productDesc='375'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={cerealsProduct_21}
                        productName="Kellogg's Chocos Chocolate Bre..."
                        productDesc='250 gm'
                        productPrice='245'
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
