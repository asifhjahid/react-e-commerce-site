import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import waterProduct_1 from '../../../images/beveragesProducts/waterProducts/waterProduct_1.webp'
import waterProduct_10 from '../../../images/beveragesProducts/waterProducts/waterProduct_10.webp'
import waterProduct_11 from '../../../images/beveragesProducts/waterProducts/waterProduct_11.webp'
import waterProduct_12 from '../../../images/beveragesProducts/waterProducts/waterProduct_12.webp'
import waterProduct_13 from '../../../images/beveragesProducts/waterProducts/waterProduct_13.webp'
import waterProduct_14 from '../../../images/beveragesProducts/waterProducts/waterProduct_14.webp'
import waterProduct_15 from '../../../images/beveragesProducts/waterProducts/waterProduct_15.webp'
import waterProduct_16 from '../../../images/beveragesProducts/waterProducts/waterProduct_16.webp'
import waterProduct_17 from '../../../images/beveragesProducts/waterProducts/waterProduct_17.webp'
import waterProduct_18 from '../../../images/beveragesProducts/waterProducts/waterProduct_18.webp'
import waterProduct_2 from '../../../images/beveragesProducts/waterProducts/waterProduct_2.webp'
import waterProduct_3 from '../../../images/beveragesProducts/waterProducts/waterProduct_3.webp'
import waterProduct_4 from '../../../images/beveragesProducts/waterProducts/waterProduct_4.webp'
import waterProduct_5 from '../../../images/beveragesProducts/waterProducts/waterProduct_5.webp'
import waterProduct_6 from '../../../images/beveragesProducts/waterProducts/waterProduct_6.webp'
import waterProduct_7 from '../../../images/beveragesProducts/waterProducts/waterProduct_7.webp'
import waterProduct_8 from '../../../images/beveragesProducts/waterProducts/waterProduct_8.webp'
import waterProduct_9 from '../../../images/beveragesProducts/waterProducts/waterProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function WaterProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_1}
                        productName="Mum Drinking Water"
                        productDesc='2 Itr'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_2}
                        productName="Aquafina Drinking Water"
                        productDesc='500 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_3}
                        productName="Aquafina Drinking Water 1.5 Li..."
                        productDesc='1.5 Itr'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_4}
                        productName="Super Fresh Drinking Water"
                        productDesc='5 Itr'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_5}
                        productName="Super Fresh Drinking Water"
                        productDesc='5 Itr'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_6}
                        productName='Super Fresh Drinking Water'
                        productDesc='5 Itr'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_7}
                        productName='Mum Drinking Water'
                        productDesc='2 Itr'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_8}
                        productName='Super Fresh Drinking Water'
                        productDesc='8 Itr'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_9}
                        productName="Super Fresh Drinking Water"
                        productDesc='2 Itr'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_10}
                        productName="Super Fresh Drinking Water"
                        productDesc='500 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_11}
                        productName='Mum Drinking Water'
                        productDesc='4.5 Itr'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_12}
                        productName="Mum Drinking Water"
                        productDesc='500 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_13}
                        productName='Pure Evian'
                        productDesc='1.5 Itr'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_14}
                        productName='Pure Evian'
                        productDesc='500 ml'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_15}
                        productName='Mum Drinking Water'
                        productDesc='300 ml'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_16}
                        productName='Kinley Drinking Water'
                        productDesc='2 Itr'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_17}
                        productName='Kinley Drinking Water'
                        productDesc='500 ml'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={waterProduct_18}
                        productName="Mum Drinking Water"
                        productDesc='5 Itr'
                        productPrice='75'
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
