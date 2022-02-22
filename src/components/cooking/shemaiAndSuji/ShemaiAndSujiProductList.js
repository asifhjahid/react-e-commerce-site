import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import shemaiSujiProduct_1 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_1.jpg'
import shemaiSujiProduct_10 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_10.jpg'
import shemaiSujiProduct_11 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_11.jpg'
import shemaiSujiProduct_12 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_12.jpg'
import shemaiSujiProduct_13 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_13.jpg'
import shemaiSujiProduct_14 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_14.jpg'
import shemaiSujiProduct_15 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_15.jpg'
import shemaiSujiProduct_16 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_16.jpg'
import shemaiSujiProduct_17 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_17.jpg'
import shemaiSujiProduct_18 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_18.jpg'
import shemaiSujiProduct_2 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_2.jpg'
import shemaiSujiProduct_3 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_3.jpg'
import shemaiSujiProduct_4 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_4.jpg'
import shemaiSujiProduct_5 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_5.jpg'
import shemaiSujiProduct_6 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_6.jpg'
import shemaiSujiProduct_7 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_7.jpg'
import shemaiSujiProduct_8 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_8.jpg'
import shemaiSujiProduct_9 from '../../../images/cookingProducts/shemaiSujiProducts/shemaiSujiProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function ShemaiAndSujiProductProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_1}
                        productName="Radhuni Shemai"
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_2}
                        productName="ACI Pure Suji"
                        productDesc='500 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_3}
                        productName="Banoful Laccha Shemai"
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
                        productImage={shemaiSujiProduct_4}
                        productName="Bashundhara Laccha Shemai"
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
                        productImage={shemaiSujiProduct_5}
                        productName='Cock Vermicelli (Shemai)'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_6}
                        productName='Dekko Vermicelli Shemai'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_7}
                        productName='Fresh Suji'
                        productDesc='500 gm'
                        productPrice='36'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_8}
                        productName='Khaas Food Premium Laccha Shemai...'
                        productDesc='200'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_9}
                        productName='Kolson Laccha Shemai'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_10}
                        productName="Dekko Laccha Shemai"
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
                        productImage={shemaiSujiProduct_11}
                        productName='Minar Laccha Shemai'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_12}
                        productName="Shaad Suji"
                        productDesc='500 gm'
                        productPrice='38'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_13}
                        productName='Teer Semolina Suji'
                        productDesc='500 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_14}
                        productName='Kolson Special Lascha Semai'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_15}
                        productName='Bombay Sweets Instant Laccha S...'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_16}
                        productName='Kishwan Lachcha Semai'
                        productDesc='350 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_17}
                        productName='Pran Lachcha Shemai'
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={shemaiSujiProduct_18}
                        productName='Kishwan Lascha Shemai'
                        productDesc='200'
                        productPrice='35'
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
