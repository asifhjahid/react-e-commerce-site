import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import diaperProduct_1 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_1.webp'
import diaperProduct_10 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_10.webp'
import diaperProduct_2 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_2.webp'
import diaperProduct_3 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_3.webp'
import diaperProduct_4 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_4.webp'
import diaperProduct_5 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_5.webp'
import diaperProduct_6 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_6.webp'
import diaperProduct_7 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_7.webp'
import diaperProduct_8 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_8.webp'
import diaperProduct_9 from '../../../images/kidsCareProducts/diapersProducts/diaperProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function DiaperProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_1}
                        productName="Avonee Maxi 4 Baby Diaper Pant..."
                        productDesc='34 pcs'
                        productPrice='609'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_2}
                        productName="Avonee Midi 3 Baby Diaper Pant..."
                        productDesc='40 pcs'
                        productPrice='890'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_3}
                        productName="Bashundhara Diapant Baby Diape..."
                        productDesc='32 pcs'
                        productPrice='890'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_4}
                        productName="Huggies Dry Baby Belt Diaper L..."
                        productDesc='60 pcs'
                        productPrice='1750'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_5}
                        productName="Huggies Dry Baby Diaper Belt S..."
                        productDesc='60 pcs'
                        productPrice='1445'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_6}
                        productName="Kidstar Baby Belt Diaper L 9-1..."
                        productDesc='56 pcs'
                        productPrice='1300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_7}
                        productName='Love Baby Super Diaper 5 Junio...'
                        productDesc='24 pcs'
                        productPrice='700'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_8}
                        productName='NeoCare Baby Diaper Belt L 7-1...'
                        productDesc='50 pcs'
                        productPrice='1600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_9}
                        productName="Huggies Dry Pants Baby Diaper..."
                        productDesc='50 pcs'
                        productPrice='1425'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={diaperProduct_10}
                        productName="Huggies Dry Baby Diaper Belt M..."
                        productDesc='72 pcs'
                        productPrice='1750'
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
