import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import yogurtProduct_1 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_1.webp'
import yogurtProduct_10 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_10.webp'
import yogurtProduct_11 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_11.webp'
import yogurtProduct_12 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_12.webp'
import yogurtProduct_13 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_13.webp'
import yogurtProduct_14 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_14.webp'
import yogurtProduct_2 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_2.webp'
import yogurtProduct_3 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_3.webp'
import yogurtProduct_4 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_4.webp'
import yogurtProduct_5 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_5.webp'
import yogurtProduct_6 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_6.webp'
import yogurtProduct_7 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_7.webp'
import yogurtProduct_8 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_8.webp'
import yogurtProduct_9 from '../../../images/cookingProducts/yogurtProducts/yogurtProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function YogurtProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_1}
                        productName="Aarong Dairy Sour Yogurt"
                        productDesc='500 ml'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_2}
                        productName="Aarong Dairy Matha"
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
                        productImage={yogurtProduct_3}
                        productName="Aarong Dairy Sweetened Yogurt"
                        productDesc='500 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_4}
                        productName="Pran Lacchi"
                        productDesc='170 ml'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_5}
                        productName='Pran Matha Medium'
                        productDesc='500 ml'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_6}
                        productName='Pran Matha Small'
                        productDesc='250 ml'
                        productPrice='28'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_7}
                        productName='Pran Sour Curd'
                        productDesc='500 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_8}
                        productName='Pran Sweet Curd Small'
                        productDesc='100 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_9}
                        productName='Nada Fresh Laban'
                        productDesc='360 ml'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_10}
                        productName="Pran Labang"
                        productDesc='250 ml'
                        productPrice='28'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_11}
                        productName='Aarong Dairy Laban'
                        productDesc='500 ml'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_12}
                        productName="Milk Vita Sweet Yogurt"
                        productDesc='500 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_13}
                        productName='Milk Vita Sour Curd ( Tok Doi )'
                        productDesc='500 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={yogurtProduct_14}
                        productName='Pran Sour Curd Fresh &amp; Yummy'
                        productDesc='500 gm'
                        productPrice='90'
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
