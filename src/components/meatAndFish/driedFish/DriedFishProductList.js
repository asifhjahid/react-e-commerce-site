import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import driedFishProduct_1 from '../../../images/meatAndFishProducts/driedFishProducts/driedFishProduct_1.jpg'
import driedFishProduct_2 from '../../../images/meatAndFishProducts/driedFishProducts/driedFishProduct_2.jpg'
import driedFishProduct_3 from '../../../images/meatAndFishProducts/driedFishProducts/driedFishProduct_3.jpg'
import driedFishProduct_4 from '../../../images/meatAndFishProducts/driedFishProducts/driedFishProduct_4.jpg'
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
                        productImage={driedFishProduct_1}
                        productName="Khaas Food Organic Rupchada Dr..."
                        productDesc='250 gm'
                        productPrice='1390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFishProduct_2}
                        productName="Kazifarms Kitchen Kechki Shutk..."
                        productDesc='125 gm'
                        productPrice='230'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFishProduct_3}
                        productName="Kazi Farms Kitchen Shrimp Smal..."
                        productDesc='125 gm'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={driedFishProduct_4}
                        productName="Kazi Farms Kitchen Loitta Shut..."
                        productDesc='125 gm'
                        productPrice='165'
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
