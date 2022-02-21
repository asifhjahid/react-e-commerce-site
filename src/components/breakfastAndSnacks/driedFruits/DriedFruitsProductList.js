import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import driedFruitProduct_1 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_1.webp'
import driedFruitProduct_10 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_10.webp'
import driedFruitProduct_11 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_11.webp'
import driedFruitProduct_2 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_2.webp'
import driedFruitProduct_3 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_3.webp'
import driedFruitProduct_4 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_4.webp'
import driedFruitProduct_5 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_5.webp'
import driedFruitProduct_6 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_6.webp'
import driedFruitProduct_7 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_7.webp'
import driedFruitProduct_8 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_8.webp'
import driedFruitProduct_9 from '../../../images/breakfastProducts/driedFruitsProducts/driedFruitProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function DriedFruitsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_1}
                        productName="Al Dharfa Dates"
                        productDesc='400 gm'
                        productPrice='159'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_2}
                        productName="Mabroom AI Madina Premium Date..."
                        productDesc='1 kg'
                        productPrice='1200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_3}
                        productName="Black Kalmi Safawi Dates"
                        productDesc='1 kg'
                        productPrice='850'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_4}
                        productName="Mariam AI Madina Premium Dates"
                        productDesc='1 Kg'
                        productPrice='1100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_5}
                        productName='Crown Dabbas Dates'
                        productDesc='1 kg'
                        productPrice='380'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_6}
                        productName='Barai Dates'
                        productDesc='500 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_7}
                        productName='Barari Tunisian Dates'
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_8}
                        productName='Dry Dates /breakfastProducts/Sukhna Chhuara Dry...'
                        productDesc='500'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_9}
                        productName='Khajoor Black (kalmi)'
                        productDesc='500 gm'
                        productPrice='340'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_10}
                        productName="Khajoor Black (kalmi)"
                        productDesc='1 kg'
                        productPrice='680'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFruitProduct_11}
                        productName='Black Dates Seeded'
                        productDesc='250 gm'
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
