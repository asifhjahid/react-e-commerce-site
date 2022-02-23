import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import eggProduct_1 from '../../../images/cookingProducts/eggProducts/eggProduct_1.jpg'
import eggProduct_2 from '../../../images/cookingProducts/eggProducts/eggProduct_2.jpg'
import eggProduct_3 from '../../../images/cookingProducts/eggProducts/eggProduct_3.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function EggProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={eggProduct_1}
                        productName="Chicken Eggs (Layer)"
                        productDesc='12 pcs'
                        productPrice='112'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={eggProduct_2}
                        productName="Egg (Deshi Hasher Dim)"
                        productDesc='6 pcs'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={eggProduct_3}
                        productName="Quail Eggs"
                        productDesc='20 pcs'
                        productPrice='69'
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
