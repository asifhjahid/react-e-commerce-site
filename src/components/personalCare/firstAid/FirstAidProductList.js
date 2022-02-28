import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import firstAidProduct_1 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_1.jpg'
import firstAidProduct_10 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_10.jpg'
import firstAidProduct_11 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_11.jpg'
import firstAidProduct_12 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_12.jpg'
import firstAidProduct_2 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_2.jpg'
import firstAidProduct_3 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_3.jpg'
import firstAidProduct_4 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_4.jpg'
import firstAidProduct_5 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_5.jpg'
import firstAidProduct_6 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_6.jpg'
import firstAidProduct_7 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_7.jpg'
import firstAidProduct_8 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_8.jpg'
import firstAidProduct_9 from '../../../images/personalCareProducts/firstAidProducts/firstAidProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function FirstAidProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_1}
                        productName="SMC Orsaline-N"
                        productDesc='20 pcs'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_2}
                        productName="Moov Pain Relief Spray"
                        productDesc='35 gm'
                        productPrice='269'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_3}
                        productName="Himani Fast Relief"
                        productDesc='50 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_4}
                        productName="ENO Lemon Flavor (5 gm*5)"
                        productDesc='5 pcs'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_5}
                        productName="Dettol Antiseptic Disinfectant..."
                        productDesc='500 ml'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_6}
                        productName="Dettol Antiseptic Disinfectant..."
                        productDesc='50 ml'
                        productPrice='38'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_7}
                        productName='ACI Savlon Liquid Antiseptic'
                        productDesc='500 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_8}
                        productName='Dabur Surokkha Pack (4 Items)'
                        productDesc='each'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_9}
                        productName="ACI Savlon Liquid Antiseptic"
                        productDesc='112 ml'
                        productPrice='44'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_10}
                        productName="ACI Savlon Antiseptic Cream"
                        productDesc='60 gm'
                        productPrice='34'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_11}
                        productName='ACI Savlon Antiseptic Cream'
                        productDesc='30 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={firstAidProduct_12}
                        productName="ACI Savlon Antiseptic Cream"
                        productDesc='100 gm'
                        productPrice='50'
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
