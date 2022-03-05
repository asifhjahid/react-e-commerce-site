import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import tissueWipesProduct_1 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_1.jpg'
import tissueWipesProduct_10 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_10.jpg'
import tissueWipesProduct_11 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_11.jpg'
import tissueWipesProduct_12 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_12.jpg'
import tissueWipesProduct_2 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_2.jpg'
import tissueWipesProduct_3 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_3.jpg'
import tissueWipesProduct_4 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_4.jpg'
import tissueWipesProduct_5 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_5.jpg'
import tissueWipesProduct_6 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_6.jpg'
import tissueWipesProduct_7 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_7.jpg'
import tissueWipesProduct_8 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_8.jpg'
import tissueWipesProduct_9 from '../../../images/personalCareProducts/tissueWipesProducts/tissueWipesProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function TissueWipesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={tissueWipesProduct_1}
                        productName="Freshmaker Wet Wipes"
                        productDesc='120 pcs'
                        productPrice='235'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={tissueWipesProduct_2}
                        productName="Dettol Anti Bacterial Wet Wipe..."
                        productDesc='10 pcs'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={tissueWipesProduct_3}
                        productName="Bashundhara Kitchen Towel 2 Ro..."
                        productDesc='2 rolls'
                        productPrice='136'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={tissueWipesProduct_4}
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
                        productImage={tissueWipesProduct_5}
                        productName="Fresh Hand Towel Tissue Paper"
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
                        productImage={tissueWipesProduct_6}
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
                        productImage={tissueWipesProduct_7}
                        productName='Fresh Perfumed Facial Tissue (...'
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
                        productImage={tissueWipesProduct_8}
                        productName="Fresh Kitchen Towel Roll"
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
                        productImage={tissueWipesProduct_9}
                        productName="Bashundhara Facial Tissue"
                        productDesc='240 pcs'
                        productPrice='72'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={tissueWipesProduct_10}
                        productName="Fay Facial Tissue"
                        productDesc='(150 * 2) ply'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={tissueWipesProduct_11}
                        productName="Fay Toilet Tissue"
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
                        productImage={tissueWipesProduct_12}
                        productName="Fay Toilet Tissue"
                        productDesc='each'
                        productPrice='22'
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
