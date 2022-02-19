import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import honeyProduct_1 from '../../../images/honeyProducts/honeyProduct_1.webp'
import honeyProduct_10 from '../../../images/honeyProducts/honeyProduct_10.webp'
import honeyProduct_11 from '../../../images/honeyProducts/honeyProduct_11.webp'
import honeyProduct_12 from '../../../images/honeyProducts/honeyProduct_12.webp'
import honeyProduct_13 from '../../../images/honeyProducts/honeyProduct_13.webp'
import honeyProduct_14 from '../../../images/honeyProducts/honeyProduct_14.webp'
import honeyProduct_15 from '../../../images/honeyProducts/honeyProduct_15.webp'
import honeyProduct_16 from '../../../images/honeyProducts/honeyProduct_16.webp'
import honeyProduct_17 from '../../../images/honeyProducts/honeyProduct_17.webp'
import honeyProduct_18 from '../../../images/honeyProducts/honeyProduct_18.webp'
import honeyProduct_19 from '../../../images/honeyProducts/honeyProduct_19.webp'
import honeyProduct_2 from '../../../images/honeyProducts/honeyProduct_2.webp'
import honeyProduct_20 from '../../../images/honeyProducts/honeyProduct_20.webp'
import honeyProduct_21 from '../../../images/honeyProducts/honeyProduct_21.webp'
import honeyProduct_22 from '../../../images/honeyProducts/honeyProduct_22.webp'
import honeyProduct_23 from '../../../images/honeyProducts/honeyProduct_23.webp'
import honeyProduct_24 from '../../../images/honeyProducts/honeyProduct_24.webp'
import honeyProduct_3 from '../../../images/honeyProducts/honeyProduct_3.webp'
import honeyProduct_4 from '../../../images/honeyProducts/honeyProduct_4.webp'
import honeyProduct_5 from '../../../images/honeyProducts/honeyProduct_5.webp'
import honeyProduct_6 from '../../../images/honeyProducts/honeyProduct_6.webp'
import honeyProduct_7 from '../../../images/honeyProducts/honeyProduct_7.webp'
import honeyProduct_8 from '../../../images/honeyProducts/honeyProduct_8.webp'
import honeyProduct_9 from '../../../images/honeyProducts/honeyProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function HoneyProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_1}
                        productName="Clariss Acacia Honey"
                        productDesc='500 gm'
                        productPrice='950'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_2}
                        productName="Clariss Natural Honey"
                        productDesc='500 gm'
                        productPrice='690'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_3}
                        productName="Langnese Pure Bee Honey"
                        productDesc='250 gm'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_4}
                        productName="Langnese Pure Bee Honey"
                        productDesc='500 gm'
                        productPrice='1200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_5}
                        productName='Saffoli Honey'
                        productDesc='250 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_6}
                        productName='Zandu Pure Honey'
                        productDesc='250 gm'
                        productPrice='245'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_7}
                        productName='Alshifa Black Forest Honey'
                        productDesc='500 gm'
                        productPrice='1500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_8}
                        productName='Alshifa Black Forest Honey'
                        productDesc='250 gm'
                        productPrice='800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_9}
                        productName='Alshifa Acacia Honey'
                        productDesc='250 gm'
                        productPrice='800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_10}
                        productName="Dabur Honey"
                        productDesc='500 gm'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_11}
                        productName='Dabur Honey'
                        productDesc='250 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_12}
                        productName="Dabur Honey"
                        productDesc='100 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_13}
                        productName='Dabur Honey'
                        productDesc='50 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_14}
                        productName='Dabur Chyawanprash'
                        productDesc='500 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_15}
                        productName='Saffola Honey'
                        productDesc='100'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_16}
                        productName='Saffola Honey'
                        productDesc='500'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_17}
                        productName='Alshifa Natural Honey'
                        productDesc='500 gm'
                        productPrice='750'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_18}
                        productName="Alshifa Natural Honey"
                        productDesc='250 gm'
                        productPrice='425'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_19}
                        productName='Alshifa Honey Acacia'
                        productDesc='30 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_20}
                        productName="AI Shafi Natural Honey"
                        productDesc='1 kg'
                        productPrice='1350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_21}
                        productName="Dabur Honey"
                        productDesc='30 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_22}
                        productName="Dabur Honey"
                        productDesc='300 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_23}
                        productName="Dabur Honey"
                        productDesc='1 kg'
                        productPrice='700'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={honeyProduct_24}
                        productName="Dabur Honey"
                        productDesc='225 gm'
                        productPrice='250'
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
