import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import energyDrinksProduct_1 from '../../../images/beveragesProducts/energyDrinksProducts/energyDrinkProduct_1.webp'
import energyDrinksProduct_2 from '../../../images/beveragesProducts/energyDrinksProducts/energyDrinkProduct_2.webp'
import energyDrinksProduct_3 from '../../../images/beveragesProducts/energyDrinksProducts/energyDrinkProduct_3.webp'
import energyDrinksProduct_4 from '../../../images/beveragesProducts/energyDrinksProducts/energyDrinkProduct_4.webp'
import energyDrinksProduct_5 from '../../../images/beveragesProducts/energyDrinksProducts/energyDrinkProduct_5.webp'
import energyDrinksProduct_6 from '../../../images/beveragesProducts/energyDrinksProducts/energyDrinkProduct_6.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function EnergyDrinksProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyDrinksProduct_1}
                        productName="Bolt Glucose Powder"
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
                        productImage={energyDrinksProduct_2}
                        productName="Glaxose D"
                        productDesc='200 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyDrinksProduct_3}
                        productName="Power Energy Drink Can"
                        productDesc='250 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyDrinksProduct_4}
                        productDesc='Power Energy Drink'
                        productName="250 ml"
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyDrinksProduct_5}
                        productName="Speed Can"
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
                        productImage={energyDrinksProduct_6}
                        productName="Big Boss Carbonated Beverage"
                        productDesc='250 ml'
                        productPrice='25'
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
