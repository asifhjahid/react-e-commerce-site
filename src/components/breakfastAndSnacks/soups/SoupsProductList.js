import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import soupProduct_1 from '../../../images/soupsProducts/soupProduct_1.jpg'
import soupProduct_2 from '../../../images/soupsProducts/soupProduct_2.jpg'
import soupProduct_3 from '../../../images/soupsProducts/soupProduct_3.jpg'
import soupProduct_4 from '../../../images/soupsProducts/soupProduct_4.jpg'
import soupProduct_5 from '../../../images/soupsProducts/soupProduct_5.jpg'
import soupProduct_6 from '../../../images/soupsProducts/soupProduct_6.jpg'
import soupProduct_7 from '../../../images/soupsProducts/soupProduct_7.jpg'
import soupProduct_8 from '../../../images/soupsProducts/soupProduct_8.jpg'
import soupProduct_9 from '../../../images/soupsProducts/soupProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SoupsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_1}
                        productName="Knorr Soup Thai"
                        productDesc='28 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_2}
                        productName="Maggi Coconut Milk Powder"
                        productDesc='300 gm'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_3}
                        productName="Nestle Maggi Healthy Soup Corn..."
                        productDesc='4 pcs'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_4}
                        productName="Nestle Maggi Healthy Soup Thai..."
                        productDesc='4 pcs'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_5}
                        productName='Nestle Maggi Healthy Soup Vege...'
                        productDesc='4 pcs'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_6}
                        productName='Knorr Soup Hot And Soup Chicken...'
                        productDesc='31 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_7}
                        productName='Nestle Maggi Healthy Soup Corn...'
                        productDesc='1 pcs'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_8}
                        productName='Nestle Maggi Healthy Soup Thai'
                        productDesc='1 pcs'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={ soupProduct_9}
                        productName='Maggi Healthy Vegetable Soup'
                        productDesc='1 pcs'
                        productPrice='40'
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
