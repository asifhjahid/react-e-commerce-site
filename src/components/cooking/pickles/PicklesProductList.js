import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import picklesProduct_1 from '../../../images/cookingProducts/picklesProducts/picklesProduct_1.jpg'
import picklesProduct_10 from '../../../images/cookingProducts/picklesProducts/picklesProduct_10.jpg'
import picklesProduct_11 from '../../../images/cookingProducts/picklesProducts/picklesProduct_11.jpg'
import picklesProduct_12 from '../../../images/cookingProducts/picklesProducts/picklesProduct_12.jpg'
import picklesProduct_13 from '../../../images/cookingProducts/picklesProducts/picklesProduct_13.jpg'
import picklesProduct_14 from '../../../images/cookingProducts/picklesProducts/picklesProduct_14.jpg'
import picklesProduct_15 from '../../../images/cookingProducts/picklesProducts/picklesProduct_15.jpg'
import picklesProduct_16 from '../../../images/cookingProducts/picklesProducts/picklesProduct_16.jpg'
import picklesProduct_17 from '../../../images/cookingProducts/picklesProducts/picklesProduct_17.jpg'
import picklesProduct_18 from '../../../images/cookingProducts/picklesProducts/picklesProduct_18.jpg'
import picklesProduct_19 from '../../../images/cookingProducts/picklesProducts/picklesProduct_19.jpg'
import picklesProduct_2 from '../../../images/cookingProducts/picklesProducts/picklesProduct_2.jpg'
import picklesProduct_20 from '../../../images/cookingProducts/picklesProducts/picklesProduct_20.jpg'
import picklesProduct_21 from '../../../images/cookingProducts/picklesProducts/picklesProduct_21.jpg'
import picklesProduct_22 from '../../../images/cookingProducts/picklesProducts/picklesProduct_22.jpg'
import picklesProduct_23 from '../../../images/cookingProducts/picklesProducts/picklesProduct_23.jpg'
import picklesProduct_24 from '../../../images/cookingProducts/picklesProducts/picklesProduct_24.jpg'
import picklesProduct_3 from '../../../images/cookingProducts/picklesProducts/picklesProduct_3.jpg'
import picklesProduct_4 from '../../../images/cookingProducts/picklesProducts/picklesProduct_4.jpg'
import picklesProduct_5 from '../../../images/cookingProducts/picklesProducts/picklesProduct_5.jpg'
import picklesProduct_6 from '../../../images/cookingProducts/picklesProducts/picklesProduct_6.jpg'
import picklesProduct_7 from '../../../images/cookingProducts/picklesProducts/picklesProduct_7.jpg'
import picklesProduct_8 from '../../../images/cookingProducts/picklesProducts/picklesProduct_8.jpg'
import picklesProduct_9 from '../../../images/cookingProducts/picklesProducts/picklesProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function PicklesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_1}
                        productName="Haldiram Lemon Pickel"
                        productDesc='350 gm'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_2}
                        productName="Pran Mango Pickle"
                        productDesc='400 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_3}
                        productName="Chuijhal Homemade Roshun Pickl..."
                        productDesc='420 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_4}
                        productName="Chuijhal Homemade Tetul Pickle"
                        productDesc='460 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_5}
                        productName='Haldiram Green Chilli Pickle'
                        productDesc='350 gm'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_6}
                        productName='Haldiram Mango Pickle'
                        productDesc='350 gm'
                        productPrice='295'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_7}
                        productName='Haldiram Red Chilli Pickle'
                        productDesc='350 gm'
                        productPrice='395'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_8}
                        productName='Kishwan Mango Pickle'
                        productDesc='400 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_9}
                        productName='Kishwan Olive Pickle'
                        productDesc='400 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_10}
                        productName="Ruchi Mango Pickle"
                        productDesc='200 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_11}
                        productName='Ruchi Alubukhara Pickle'
                        productDesc='400 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_12}
                        productName="Ruchi Chalta Pickle"
                        productDesc='400 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_13}
                        productName='Ruchi Garlic Pickle'
                        productDesc='200 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_14}
                        productName='Ahmed Tamarind Pickle'
                        productDesc='400 gm'
                        productPrice='155'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_15}
                        productName='Ruchi Mixed Pickle'
                        productDesc='400 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_16}
                        productName='Ruchi Olive Pickle'
                        productDesc='400 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_17}
                        productName='Ruchi Mixed Chutney Boroi Tama...'
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
                        productImage={picklesProduct_18}
                        productName='Ruchi Mango Pickle'
                        productDesc='1000'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_19}
                        productName='Ahmed Naga Pickle Morich Achar'
                        productDesc='160 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_20}
                        productName='Ahmed Mango Pickle'
                        productDesc='300 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_21}
                        productName='BD Food Tamarind Chutney'
                        productDesc='500'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_22}
                        productName='Nicobena Naga King Hot Pickle'
                        productDesc='120 gm'
                        productPrice='189'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_23}
                        productName='Nicobena Olive Hot Pickle'
                        productDesc='300 gm'
                        productPrice='159'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={picklesProduct_24}
                        productName='Nicobena Naga King Hot Pickle'
                        productDesc='300 gm'
                        productPrice='400'
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
