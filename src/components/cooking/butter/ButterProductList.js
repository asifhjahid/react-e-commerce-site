import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import butterProduct_1 from '../../../images/cookingProducts/butterProducts/butterProduct_1.webp'
import butterProduct_10 from '../../../images/cookingProducts/butterProducts/butterProduct_10.webp'
import butterProduct_11 from '../../../images/cookingProducts/butterProducts/butterProduct_11.webp'
import butterProduct_12 from '../../../images/cookingProducts/butterProducts/butterProduct_12.webp'
import butterProduct_13 from '../../../images/cookingProducts/butterProducts/butterProduct_13.webp'
import butterProduct_14 from '../../../images/cookingProducts/butterProducts/butterProduct_14.webp'
import butterProduct_15 from '../../../images/cookingProducts/butterProducts/butterProduct_15.webp'
import butterProduct_16 from '../../../images/cookingProducts/butterProducts/butterProduct_16.webp'
import butterProduct_17 from '../../../images/cookingProducts/butterProducts/butterProduct_17.webp'
import butterProduct_18 from '../../../images/cookingProducts/butterProducts/butterProduct_18.webp'
import butterProduct_19 from '../../../images/cookingProducts/butterProducts/butterProduct_19.webp'
import butterProduct_2 from '../../../images/cookingProducts/butterProducts/butterProduct_2.webp'
import butterProduct_20 from '../../../images/cookingProducts/butterProducts/butterProduct_20.webp'
import butterProduct_21 from '../../../images/cookingProducts/butterProducts/butterProduct_21.webp'
import butterProduct_22 from '../../../images/cookingProducts/butterProducts/butterProduct_22.webp'
import butterProduct_23 from '../../../images/cookingProducts/butterProducts/butterProduct_23.webp'
import butterProduct_3 from '../../../images/cookingProducts/butterProducts/butterProduct_3.webp'
import butterProduct_4 from '../../../images/cookingProducts/butterProducts/butterProduct_4.webp'
import butterProduct_5 from '../../../images/cookingProducts/butterProducts/butterProduct_5.webp'
import butterProduct_6 from '../../../images/cookingProducts/butterProducts/butterProduct_6.webp'
import butterProduct_7 from '../../../images/cookingProducts/butterProducts/butterProduct_7.webp'
import butterProduct_8 from '../../../images/cookingProducts/butterProducts/butterProduct_8.webp'
import butterProduct_9 from '../../../images/cookingProducts/butterProducts/butterProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function ButterProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_1}
                        productName="Aarong Dairy Butter"
                        productDesc='200 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_2}
                        productName="Amul Butter"
                        productDesc='200 gm'
                        productPrice='349'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_3}
                        productName="Pran Premium Butter"
                        productDesc='100 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_4}
                        productName="Amul Pasteurized Butter"
                        productDesc='200 gm'
                        productPrice='349'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_5}
                        productName='Lurpak Butter Salted'
                        productDesc='200 gm'
                        productPrice='365'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_6}
                        productName='Lurpak Butter Unsalted'
                        productDesc='200 gm'
                        productPrice='365'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_7}
                        productName='Lurpak Salted Spreadable Butte...'
                        productDesc='250 gm'
                        productPrice='639'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_8}
                        productName='Sundrop Peanut Butter Crunchy'
                        productDesc='462 gm'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_9}
                        productName='Fine Dine Peanut Butter'
                        productDesc='340 gm'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_10}
                        productName="Highway Creamy Peanut Butter"
                        productDesc='510 gm'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_11}
                        productName='Crown Peanut Butter Chunky'
                        productDesc='510 gm'
                        productPrice='599'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_12}
                        productName="Red Cow Butter Oil"
                        productDesc='900 gm'
                        productPrice='1300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_13}
                        productName='Red Cow Butter Oil'
                        productDesc='200 gm'
                        productPrice='285'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_14}
                        productName='Red Cow Butter Oil'
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
                        productImage={butterProduct_15}
                        productName='Pran Premium Ghee'
                        productDesc='200 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_16}
                        productName='Pran Premium Ghee'
                        productDesc='100 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_17}
                        productName='Pran Premium Ghee'
                        productDesc='400 gm'
                        productPrice='565'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_18}
                        productName='Aarong Dairy Pure Ghee'
                        productDesc='400'
                        productPrice='565'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_19}
                        productName='Aarong Dairy Pure Ghee'
                        productDesc='200 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_20}
                        productName='Ghee Baghabari (Onil Ghosh)'
                        productDesc='100 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_21}
                        productName='Ghee Baghabari (Onil Ghosh)'
                        productDesc='900'
                        productPrice='1060'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_22}
                        productName='Aarong Dairy Butter'
                        productDesc='100 gm'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={butterProduct_23}
                        productName='Nawar Trans Fat Free Butter'
                        productDesc='250 gm'
                        productPrice='250'
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
