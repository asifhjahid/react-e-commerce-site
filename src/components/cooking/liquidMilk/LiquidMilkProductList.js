import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import liquidMilkProduct_1 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_1.webp'
import liquidMilkProduct_10 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_10.webp'
import liquidMilkProduct_11 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_11.webp'
import liquidMilkProduct_12 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_12.webp'
import liquidMilkProduct_13 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_13.webp'
import liquidMilkProduct_14 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_14.webp'
import liquidMilkProduct_15 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_15.webp'
import liquidMilkProduct_16 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_16.webp'
import liquidMilkProduct_17 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_17.webp'
import liquidMilkProduct_2 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_2.webp'
import liquidMilkProduct_3 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_3.webp'
import liquidMilkProduct_4 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_4.webp'
import liquidMilkProduct_5 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_5.webp'
import liquidMilkProduct_6 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_6.webp'
import liquidMilkProduct_7 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_7.webp'
import liquidMilkProduct_8 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_8.webp'
import liquidMilkProduct_9 from '../../../images/cookingProducts/liquidMilkProducts/liquidMilkProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function LiquidMilkProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_1}
                        productName="Pran UHT Milk"
                        productDesc='200 ml'
                        productPrice='22'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_2}
                        productName="Harvey Fresh UHT Full Cream Mi..."
                        productDesc='1 Itr'
                        productPrice='309'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_3}
                        productName="Harvey Fresh UHT Low Fat Milk"
                        productDesc='1 Itr'
                        productPrice='305'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_4}
                        productName="Marks Chocolate Milk"
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
                        productImage={liquidMilkProduct_5}
                        productName='Amul Taaza Full Cream UHT Milk'
                        productDesc='1 Itr'
                        productPrice='225'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_6}
                        productName='Pran Pasteruized Liquid Milk'
                        productDesc='1 Itr'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_7}
                        productName='Wichy Organic Coconut Milk'
                        productDesc='400 ml'
                        productPrice='190'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_8}
                        productName='Aarong Dairy UHT Strawberry Mi...'
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
                        productImage={liquidMilkProduct_9}
                        productName='Milk Vita Pasteurized Liquid'
                        productDesc='500 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_10}
                        productName="Milk Vita Liquid Milk"
                        productDesc='1 Itr'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_11}
                        productName='Aarong Dairy Pasteurized Milk'
                        productDesc='500 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_12}
                        productName="Aarong Dairy Pasteurized Full..."
                        productDesc='1 Itr'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_13}
                        productName='Aarong Dairy Chocolate Flavore...'
                        productDesc='200 ml'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_14}
                        productName='Farm Fresh UHT Milk'
                        productDesc='500 ml'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_15}
                        productName='Pran UHT Full Cream Liquid Mil...'
                        productDesc='1 Itr'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_16}
                        productName='Aroi Thai Lite Coconut Milk'
                        productDesc='400 ml'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={liquidMilkProduct_17}
                        productName='Fram Fresh Pasteurized Milk'
                        productDesc='1 Itr'
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
