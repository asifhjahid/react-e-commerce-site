import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import meatAndFishProduct_1 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_1.jpeg'
import meatAndFishProduct_10 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_10.jpeg'
import meatAndFishProduct_11 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_11.jpeg'
import meatAndFishProduct_12 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_12.jpeg'
import meatAndFishProduct_13 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_13.jpeg'
import meatAndFishProduct_14 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_14.jpeg'
import meatAndFishProduct_15 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_15.jpeg'
import meatAndFishProduct_2 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_2.jpeg'
import meatAndFishProduct_3 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_3.jpeg'
import meatAndFishProduct_4 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_4.jpeg'
import meatAndFishProduct_5 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_5.jpeg'
import meatAndFishProduct_6 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_6.jpeg'
import meatAndFishProduct_7 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_7.jpeg'
import meatAndFishProduct_8 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_8.jpeg'
import meatAndFishProduct_9 from '../../../images/meatAndFishProducts/meatProducts/meatProduct_9.jpeg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function MeatAndFishProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_1}
                        productName="Roast Chicken"
                        productDesc='250 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_2}
                        productName="Pigeon Medium"
                        productDesc='pair (200 gm + each)'
                        productPrice='296'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_3}
                        productName="Cock CHicken Skin Off"
                        productDesc='500 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_4}
                        productName="Beef With Bone"
                        productDesc='1 kg'
                        productPrice='625'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_5}
                        productName='Mutton'
                        productDesc='1 kg'
                        productPrice='900'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_6}
                        productName='Pigeon Small'
                        productDesc='pair (180 gm + each )'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_7}
                        productName='Duck With Skin'
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_8}
                        productName='Cock Skin On'
                        productDesc='500 gm (+/- 50 gm)'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_9}
                        productName='Deshi Chicken Without Skin (La...'
                        productDesc='750 gm (+/- 50 gm)'
                        productPrice='640'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_10}
                        productName="Deshi Chicken Without Skin"
                        productDesc='500 gm (+/- 50 gm)'
                        productPrice='440'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_11}
                        productName='Broilar Without Skin'
                        productDesc='1 kg (+/- 50gm)'
                        productPrice='248'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_12}
                        productName="Broilar With Skin"
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='238'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_13}
                        productName='Duck With Skin'
                        productDesc='1 kg (+/- 50 gm)'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_14}
                        productName='Beef Boneless'
                        productDesc='1 kg'
                        productPrice='800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={meatAndFishProduct_15}
                        productName='Swan / Raj Hash'
                        productDesc='3.5 kg (+/- 100 gm)'
                        productPrice='2000'
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
