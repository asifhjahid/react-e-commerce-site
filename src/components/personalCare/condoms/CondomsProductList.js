import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import condomProduct_1 from '../../../images/personalCareProducts/condomProducts/condomProduct_1.jpg'
import condomProduct_10 from '../../../images/personalCareProducts/condomProducts/condomProduct_10.jpg'
import condomProduct_11 from '../../../images/personalCareProducts/condomProducts/condomProduct_11.jpg'
import condomProduct_12 from '../../../images/personalCareProducts/condomProducts/condomProduct_12.jpg'
import condomProduct_13 from '../../../images/personalCareProducts/condomProducts/condomProduct_13.jpg'
import condomProduct_14 from '../../../images/personalCareProducts/condomProducts/condomProduct_14.jpg'
import condomProduct_15 from '../../../images/personalCareProducts/condomProducts/condomProduct_15.jpg'
import condomProduct_2 from '../../../images/personalCareProducts/condomProducts/condomProduct_2.jpg'
import condomProduct_3 from '../../../images/personalCareProducts/condomProducts/condomProduct_3.jpg'
import condomProduct_4 from '../../../images/personalCareProducts/condomProducts/condomProduct_4.jpg'
import condomProduct_5 from '../../../images/personalCareProducts/condomProducts/condomProduct_5.jpg'
import condomProduct_6 from '../../../images/personalCareProducts/condomProducts/condomProduct_6.jpg'
import condomProduct_7 from '../../../images/personalCareProducts/condomProducts/condomProduct_7.jpg'
import condomProduct_8 from '../../../images/personalCareProducts/condomProducts/condomProduct_8.jpg'
import condomProduct_9 from '../../../images/personalCareProducts/condomProducts/condomProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function CondomsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_1}
                        productName="D18 Grip Unlimited Dotted Delu..."
                        productDesc='2 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_2}
                        productName="D15 Grip Unlimited Ribbed Delu..."
                        productDesc='4 pcs'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_3}
                        productName="D19 Grip Unlimited Ribbed + Do..."
                        productDesc='6 pcs'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_4}
                        productName="D2 Grip Unlimited Mix It Up As..."
                        productDesc='8 pcs'
                        productPrice='245'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_5}
                        productName="D1 Grip Unlimited Mix It Up As..."
                        productDesc='96 pcs'
                        productPrice='2940'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_6}
                        productName="D17 Grip Unlimited Ribbed + Do..."
                        productDesc='2 pcs'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_7}
                        productName='G1 Durex Thin Feel Love Sex (5...'
                        productDesc='3 pcs'
                        productPrice='99'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_8}
                        productName="G3 Durex Love Sex Pleasure Me..."
                        productDesc='3 pcs'
                        productPrice='99'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_9}
                        productName="G5 Durex Extra Safe Love Sex (..."
                        productDesc='3 pcs'
                        productPrice='99'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_10}
                        productName="K3 U &ampl; ME Anatomic Condoms"
                        productDesc='3 pcs'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_11}
                        productName="L6 Coral 3 Flavors Ice Cream C..."
                        productDesc='3 pcs'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_12}
                        productName="L8 Coral Frutte Natural Latex..."
                        productDesc='3 pcs'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_13}
                        productName='M1 Sensation Classic Dotted Co...'
                        productDesc='3 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_14}
                        productName='M2 Sensation Strawberry Dotted...'
                        productDesc='3 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={condomProduct_15}
                        productName='N1 Carex Condoms'
                        productDesc='3 pcs'
                        productPrice='29'
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
