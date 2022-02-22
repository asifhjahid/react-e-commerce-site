import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import flourProduct_1 from '../../../images/cookingProducts/flourProducts/flourProduct_1.webp'
import flourProduct_10 from '../../../images/cookingProducts/flourProducts/flourProduct_10.webp'
import flourProduct_11 from '../../../images/cookingProducts/flourProducts/flourProduct_11.webp'
import flourProduct_12 from '../../../images/cookingProducts/flourProducts/flourProduct_12.webp'
import flourProduct_13 from '../../../images/cookingProducts/flourProducts/flourProduct_13.webp'
import flourProduct_14 from '../../../images/cookingProducts/flourProducts/flourProduct_14.webp'
import flourProduct_15 from '../../../images/cookingProducts/flourProducts/flourProduct_15.webp'
import flourProduct_16 from '../../../images/cookingProducts/flourProducts/flourProduct_16.webp'
import flourProduct_2 from '../../../images/cookingProducts/flourProducts/flourProduct_2.webp'
import flourProduct_3 from '../../../images/cookingProducts/flourProducts/flourProduct_3.webp'
import flourProduct_4 from '../../../images/cookingProducts/flourProducts/flourProduct_4.webp'
import flourProduct_5 from '../../../images/cookingProducts/flourProducts/flourProduct_5.webp'
import flourProduct_6 from '../../../images/cookingProducts/flourProducts/flourProduct_6.webp'
import flourProduct_7 from '../../../images/cookingProducts/flourProducts/flourProduct_7.webp'
import flourProduct_8 from '../../../images/cookingProducts/flourProducts/flourProduct_8.webp'
import flourProduct_9 from '../../../images/cookingProducts/flourProducts/flourProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FlourProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_1}
                        productName="Shaad Atta"
                        productDesc='2 kg'
                        productPrice='94'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_2}
                        productName="Teer Whole Wheat Atta"
                        productDesc='2 kg'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_3}
                        productName="ACI Pure Atta"
                        productDesc='2 kg'
                        productPrice='92'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_4}
                        productName="ACI Pure Maida"
                        productDesc='2 kg'
                        productPrice='118'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_5}
                        productName='Bashundhara Maida'
                        productDesc='2 kg'
                        productPrice='105'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_6}
                        productName='Fresh Atta'
                        productDesc='2 kg'
                        productPrice='92'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_7}
                        productName='Fresh Atta'
                        productDesc='2 kg'
                        productPrice='92'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_8}
                        productName='Ifad Brown Atta'
                        productDesc='1 kg'
                        productPrice='48'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_9}
                        productName='Ifad Atta'
                        productDesc='2 kg'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_10}
                        productName="Ifad Maida"
                        productDesc='2 kg'
                        productPrice='98'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_11}
                        productName='Teer Atta'
                        productDesc='2 kg'
                        productPrice='92'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_12}
                        productName="Teer Maida Flour"
                        productDesc='2 kg'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_13}
                        productName='Bashundhara Atta'
                        productDesc='1 kg'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_14}
                        productName='Bashundhara Atta'
                        productDesc='2 kg'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_15}
                        productName='Bashundhara Moyda'
                        productDesc='1 kg'
                        productPrice='48'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={flourProduct_16}
                        productName='ACI Pure Brown Flour (Atta)'
                        productDesc='1 kg'
                        productPrice='51'
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
