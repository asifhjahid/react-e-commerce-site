import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import writingProduct_1 from '../../../images/stationaryProducts/writingProducts/writingProduct_1.jpg'
import writingProduct_10 from '../../../images/stationaryProducts/writingProducts/writingProduct_10.jpg'
import writingProduct_11 from '../../../images/stationaryProducts/writingProducts/writingProduct_11.jpg'
import writingProduct_12 from '../../../images/stationaryProducts/writingProducts/writingProduct_12.jpg'
import writingProduct_13 from '../../../images/stationaryProducts/writingProducts/writingProduct_13.jpg'
import writingProduct_14 from '../../../images/stationaryProducts/writingProducts/writingProduct_14.jpg'
import writingProduct_15 from '../../../images/stationaryProducts/writingProducts/writingProduct_15.jpg'
import writingProduct_16 from '../../../images/stationaryProducts/writingProducts/writingProduct_16.jpg'
import writingProduct_17 from '../../../images/stationaryProducts/writingProducts/writingProduct_17.jpg'
import writingProduct_18 from '../../../images/stationaryProducts/writingProducts/writingProduct_18.jpg'
import writingProduct_19 from '../../../images/stationaryProducts/writingProducts/writingProduct_19.jpg'
import writingProduct_2 from '../../../images/stationaryProducts/writingProducts/writingProduct_2.jpg'
import writingProduct_20 from '../../../images/stationaryProducts/writingProducts/writingProduct_20.jpg'
import writingProduct_21 from '../../../images/stationaryProducts/writingProducts/writingProduct_21.jpg'
import writingProduct_22 from '../../../images/stationaryProducts/writingProducts/writingProduct_22.jpg'
import writingProduct_23 from '../../../images/stationaryProducts/writingProducts/writingProduct_23.jpg'
import writingProduct_24 from '../../../images/stationaryProducts/writingProducts/writingProduct_24.jpg'
import writingProduct_3 from '../../../images/stationaryProducts/writingProducts/writingProduct_3.jpg'
import writingProduct_4 from '../../../images/stationaryProducts/writingProducts/writingProduct_4.jpg'
import writingProduct_5 from '../../../images/stationaryProducts/writingProducts/writingProduct_5.jpg'
import writingProduct_6 from '../../../images/stationaryProducts/writingProducts/writingProduct_6.jpg'
import writingProduct_7 from '../../../images/stationaryProducts/writingProducts/writingProduct_7.jpg'
import writingProduct_8 from '../../../images/stationaryProducts/writingProducts/writingProduct_8.jpg'
import writingProduct_9 from '../../../images/stationaryProducts/writingProducts/writingProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function WitingProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_1}
                        productName="Deli Plastic Eraser (3043)"
                        productDesc='each'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_2}
                        productName="Deli Correction Pen Quick Dryi..."
                        productDesc='8 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_3}
                        productName="Deli Correction Pen 8 ml"
                        productDesc='each'
                        productPrice='69'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_4}
                        productName="Deli Water Color Pen (37171)"
                        productDesc='24 pcs'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_5}
                        productName="Deli Water Color Pen (37169)"
                        productDesc='12 pcs'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_6}
                        productName='Deli Color Pencils (EC00230)'
                        productDesc='36 pcs'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_7}
                        productName='Deli Color Pencils (C002)'
                        productDesc='12 pcs'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_8}
                        productName='Deli Color Pencil'
                        productDesc='12 pcs'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_9}
                        productName='Deli Sticky Notes (A003) 100 s...'
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
                        productImage={writingProduct_10}
                        productName='Faber Castell Dust Free Eraser'
                        productDesc='each'
                        productPrice='19'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_11}
                        productName='Faber Castell Long Color Pencil...'
                        productDesc='12 pcs'
                        productPrice='289'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_12}
                        productName='Faber Castell Classic Color P...'
                        productDesc='12 pcs'
                        productPrice='209'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_13}
                        productName='Faber Castell Classic Color P...'
                        productDesc='12 pcs'
                        productPrice='109'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_14}
                        productName='Push Eraser'
                        productDesc='each'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_15}
                        productName='Matador Hi School Pen'
                        productDesc='12 pcs'
                        productPrice='59'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_16}
                        productName='Matador Genius HB Pencil'
                        productDesc='12 pcs'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_17}
                        productName='Linc Ocean Wave Gel Pen Green'
                        productDesc='6 pcs'
                        productPrice='89'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_18}
                        productName='Linc Glycer Ball Pen Green'
                        productDesc='6 pcs'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_19}
                        productName='Linc Glycer Ball Pen Black'
                        productDesc='6 pcs'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_20}
                        productName='Fresh Shine Ball Pen'
                        productDesc='12 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_21}
                        productName='Fresh Campus Ball Pen'
                        productDesc='12 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_22}
                        productName='Faber Castell HB Pencil'
                        productDesc='12 pcs'
                        productPrice='119'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_23}
                        productName='Econo XD Teen Ball Pen'
                        productDesc='10 pcs'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={writingProduct_24}
                        productName='Cello Soft Write Ball Pen'
                        productDesc='1 pcs'
                        productPrice='30'
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
