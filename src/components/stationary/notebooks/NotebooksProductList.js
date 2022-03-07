import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import notebookProduct_1 from '../../../images/stationaryProducts/notebookProducts/notebookProduct_1.jpg'
import notebookProduct_2 from '../../../images/stationaryProducts/notebookProducts/notebookProduct_2.jpg'
import notebookProduct_3 from '../../../images/stationaryProducts/notebookProducts/notebookProduct_3.jpg'
import notebookProduct_4 from '../../../images/stationaryProducts/notebookProducts/notebookProduct_4.jpg'
import notebookProduct_5 from '../../../images/stationaryProducts/notebookProducts/notebookProduct_5.jpg'
import notebookProduct_6 from '../../../images/stationaryProducts/notebookProducts/notebookProduct_6.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function NotebooksProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={notebookProduct_1}
                        productName="Deli Sticky Notes (A003) 100 s..."
                        productDesc='each'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={notebookProduct_2}
                        productName="Register Book 300 Page"
                        productDesc='each'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={notebookProduct_3}
                        productName="Register Book 150 Page"
                        productDesc='each'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={notebookProduct_4}
                        productName="Fresh Bangla Khata (Standard L..."
                        productDesc='4 pcs'
                        productPrice='168'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={notebookProduct_5}
                        productName="University Writhing Khata"
                        productDesc='3 pcs'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={notebookProduct_6}
                        productName='University Note Book Khata (En...'
                        productDesc='1 pcs'
                        productPrice='70'
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
