import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import printingProduct_1 from '../../../images/stationaryProducts/printingProducts/printingProduct_1.jpg'
import printingProduct_10 from '../../../images/stationaryProducts/printingProducts/printingProduct_10.jpg'
import printingProduct_11 from '../../../images/stationaryProducts/printingProducts/printingProduct_11.jpg'
import printingProduct_12 from '../../../images/stationaryProducts/printingProducts/printingProduct_12.jpg'
import printingProduct_13 from '../../../images/stationaryProducts/printingProducts/printingProduct_13.jpg'
import printingProduct_14 from '../../../images/stationaryProducts/printingProducts/printingProduct_14.jpg'
import printingProduct_15 from '../../../images/stationaryProducts/printingProducts/printingProduct_15.jpg'
import printingProduct_16 from '../../../images/stationaryProducts/printingProducts/printingProduct_16.jpg'
import printingProduct_17 from '../../../images/stationaryProducts/printingProducts/printingProduct_17.jpg'
import printingProduct_18 from '../../../images/stationaryProducts/printingProducts/printingProduct_18.jpg'
import printingProduct_19 from '../../../images/stationaryProducts/printingProducts/printingProduct_19.jpg'
import printingProduct_2 from '../../../images/stationaryProducts/printingProducts/printingProduct_2.jpg'
import printingProduct_20 from '../../../images/stationaryProducts/printingProducts/printingProduct_20.jpg'
import printingProduct_3 from '../../../images/stationaryProducts/printingProducts/printingProduct_3.jpg'
import printingProduct_4 from '../../../images/stationaryProducts/printingProducts/printingProduct_4.jpg'
import printingProduct_5 from '../../../images/stationaryProducts/printingProducts/printingProduct_5.jpg'
import printingProduct_6 from '../../../images/stationaryProducts/printingProducts/printingProduct_6.jpg'
import printingProduct_7 from '../../../images/stationaryProducts/printingProducts/printingProduct_7.jpg'
import printingProduct_8 from '../../../images/stationaryProducts/printingProducts/printingProduct_8.jpg'
import printingProduct_9 from '../../../images/stationaryProducts/printingProducts/printingProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function PrintingProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_1}
                        productName="Bashundhara Paper A4 Size (70..."
                        productDesc='each'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_2}
                        productName="Bashundhara Paper A4 Size (80..."
                        productDesc='each'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_3}
                        productName="Bashundhara Paper Legal Size (..."
                        productDesc='each'
                        productPrice='420'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_4}
                        productName="Century A4 Size Paper (70 GSM)..."
                        productDesc='each'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_5}
                        productName="Century A4 Size Paper (80 GSM)..."
                        productDesc='each'
                        productPrice='329'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_6}
                        productName='Double A A3 Size Paper (80 GSM...'
                        productDesc='each'
                        productPrice='1199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_7}
                        productName='Double A A4 Size Paper (80 GSM...'
                        productDesc='each'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_8}
                        productName='Double A Legal Size (80 GSM) 1...'
                        productDesc='each'
                        productPrice='729'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_9}
                        productName='Fresh A4 Size Paper (80 GSM) 1...'
                        productDesc='each'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_10}
                        productName='Paper One A4 Size Paper (80 GS...'
                        productDesc='each'
                        productPrice='449'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_11}
                        productName='Paper Tech A4 Size (80 GSM) 1...'
                        productDesc='each'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_12}
                        productName='Paper Tech A4 Size Paper (70 G...'
                        productDesc='each'
                        productPrice='229'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_13}
                        productName='Paper Tech Legal Size (80 GSM)...'
                        productDesc='each'
                        productPrice='409'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_14}
                        productName='Planet Paper A4 Size (80 GSM)...'
                        productDesc='each'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_15}
                        productName='Printex Laser Toner Cartridge...'
                        productDesc='each'
                        productPrice='1979'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_16}
                        productName='Printex Laser Toner Cartridge...'
                        productDesc='each'
                        productPrice='849'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_17}
                        productName='Printex Laser Toner Cartridge...'
                        productDesc='each'
                        productPrice='719'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_18}
                        productName='Visa Laser Toner Cartridge (48...'
                        productDesc='each'
                        productPrice='1999'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_19}
                        productName='Visa Laser Toner Cartridge (79...'
                        productDesc='each'
                        productPrice='839'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={printingProduct_20}
                        productName='Visa Laser Toner Cartidge (28...'
                        productDesc='each'
                        productPrice='929'
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
