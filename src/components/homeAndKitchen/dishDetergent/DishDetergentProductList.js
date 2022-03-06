import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import dishDetergentProduct_1 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_1.webp'
import dishDetergentProduct_10 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_10.webp'
import dishDetergentProduct_11 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_11.webp'
import dishDetergentProduct_12 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_12.webp'
import dishDetergentProduct_13 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_13.webp'
import dishDetergentProduct_14 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_14.webp'
import dishDetergentProduct_15 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_15.webp'
import dishDetergentProduct_16 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_16.webp'
import dishDetergentProduct_17 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_17.webp'
import dishDetergentProduct_2 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_2.webp'
import dishDetergentProduct_3 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_3.webp'
import dishDetergentProduct_4 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_4.webp'
import dishDetergentProduct_5 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_5.webp'
import dishDetergentProduct_6 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_6.webp'
import dishDetergentProduct_7 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_7.webp'
import dishDetergentProduct_8 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_8.webp'
import dishDetergentProduct_9 from '../../../images/homeAndKitchenProducts/dishDetergentProducts/dishDetergentProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function DishDetergentProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_1}
                        productName="ACI Wonder Dish Wash Bar"
                        productDesc='325 gm'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_2}
                        productName="Finis Labu Dish Washing Bar"
                        productDesc='100 gm'
                        productPrice='12'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_3}
                        productName="Maxclean Antibacterial Dishwas..."
                        productDesc='325 gm'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_4}
                        productName="Shiny Dishwashing Paste Lime"
                        productDesc='400 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_5}
                        productName='Sunlight Dishwash Liquid Lemon'
                        productDesc='400 gm'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_6}
                        productName='Trix Dishwashing Liquid Lemon...'
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
                        productImage={dishDetergentProduct_7}
                        productName='Trix Dishwashing Liquid Lemon ...'
                        productDesc='250 ml'
                        productPrice='57'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_8}
                        productName='Vim Dishwashing Bar'
                        productDesc='300 gm'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_9}
                        productName='Vim Dishwashing Liquid'
                        productDesc='1 Itr'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_10}
                        productName="Vim Dishwashing Liquid"
                        productDesc='250 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_11}
                        productName='Vim Dishwashing Liquid'
                        productDesc='500 ml'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_12}
                        productName="Vim Dishwashing Bar"
                        productDesc='125 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_13}
                        productName='Maxclean Dish Washing Liquid R...'
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
                        productImage={dishDetergentProduct_14}
                        productName='Maxclean Dish Washing Liquid'
                        productDesc='500 ml'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_15}
                        productName='Vim Dish Wash Liquid'
                        productDesc='500 ml'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_16}
                        productName='Vim Dishwashing Liquid Refill...'
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dishDetergentProduct_17}
                        productName='Vim Dish Washing Powder'
                        productDesc='500 gm'
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
