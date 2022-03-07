import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import napkinsTissueProduct_1 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_1.webp'
import napkinsTissueProduct_10 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_10.webp'
import napkinsTissueProduct_11 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_11.webp'
import napkinsTissueProduct_12 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_12.webp'
import napkinsTissueProduct_13 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_13.webp'
import napkinsTissueProduct_14 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_14.webp'
import napkinsTissueProduct_15 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_15.webp'
import napkinsTissueProduct_16 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_16.webp'
import napkinsTissueProduct_17 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_17.webp'
import napkinsTissueProduct_18 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_18.webp'
import napkinsTissueProduct_19 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_19.webp'
import napkinsTissueProduct_2 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_2.webp'
import napkinsTissueProduct_20 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_20.webp'
import napkinsTissueProduct_21 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_21.webp'
import napkinsTissueProduct_3 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_3.webp'
import napkinsTissueProduct_4 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_4.webp'
import napkinsTissueProduct_5 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_5.webp'
import napkinsTissueProduct_6 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_6.webp'
import napkinsTissueProduct_7 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_7.webp'
import napkinsTissueProduct_8 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_8.webp'
import napkinsTissueProduct_9 from '../../../images/homeAndKitchenProducts/napkinsTissueProducts/napkinsTissueProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function NapkinsAndTissueProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_1}
                        productName="Bashundhara Gold Toilet Tissue"
                        productDesc='each'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_2}
                        productName="Bashundhara Kitchen Towel 2 Ro..."
                        productDesc='2 rolls'
                        productPrice='114'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_3}
                        productName='Bashundhara Paper Napkins 13"...'
                        productDesc='100 pcs'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_4}
                        productName="Planet Kitchen Towel"
                        productDesc='1 pcs'
                        productPrice='62'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_5}
                        productName='Bashundhara Toilet Tissue'
                        productDesc='4 pcs'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_6}
                        productName='Fay Toilet Tissue'
                        productDesc='each'
                        productPrice='22'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_7}
                        productName='Fresh Hand Towel Tissue Paper'
                        productDesc='each'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_8}
                        productName='Fresh Kitchen Towel Roll'
                        productDesc='each'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_9}
                        productName='Fresh Paper Napkins 13" Perfum...'
                        productDesc='each'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_10}
                        productName="Fresh Perfumed Facial Tissue (..."
                        productDesc='each'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_11}
                        productName='Fresh Toilet Tissue (Family Va...'
                        productDesc='4 pcs'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_12}
                        productName="Planet Gold Toilet Tissue"
                        productDesc='1 pc'
                        productPrice='26'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_13}
                        productName='Bashundhara Hand Towel (Poly)...'
                        productDesc='250 pcs'
                        productPrice='78'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_14}
                        productName='Bashundhara Resturant Paper'
                        productDesc='100 pcs'
                        productPrice='46'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_15}
                        productName='Fresh Toilet Tissue'
                        productDesc='each'
                        productPrice='17'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_16}
                        productName='Bashundhara Toilet Tissue, Reg...'
                        productDesc='each'
                        productPrice='18'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_17}
                        productName='Bashundhara Facial Tissue 100x...'
                        productDesc='each'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_18}
                        productName='Bashundhara Facial Tissue Perf...'
                        productDesc='each'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_19}
                        productName='Bashundhara Facial Tissue 120X...'
                        productDesc='1 box'
                        productPrice='62'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_20}
                        productName='Bashundhara Facial Tissue Box...'
                        productDesc='each'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div> 

                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={napkinsTissueProduct_21}
                        productName='Fresh Facial Tissue Perfumed 1...'
                        productDesc='each'
                        productPrice='62'
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
