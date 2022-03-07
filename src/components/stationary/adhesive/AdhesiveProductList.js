import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import adhesiveProduct_1 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_1.jpg'
import adhesiveProduct_10 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_10.jpg'
import adhesiveProduct_11 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_11.jpg'
import adhesiveProduct_12 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_12.jpg'
import adhesiveProduct_13 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_13.jpg'
import adhesiveProduct_14 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_14.jpg'
import adhesiveProduct_15 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_15.jpg'
import adhesiveProduct_16 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_16.jpg'
import adhesiveProduct_17 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_17.jpg'
import adhesiveProduct_18 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_18.jpg'
import adhesiveProduct_2 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_2.jpg'
import adhesiveProduct_3 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_3.jpg'
import adhesiveProduct_4 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_4.jpg'
import adhesiveProduct_5 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_5.jpg'
import adhesiveProduct_6 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_6.jpg'
import adhesiveProduct_7 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_7.jpg'
import adhesiveProduct_8 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_8.jpg'
import adhesiveProduct_9 from '../../../images/stationaryProducts/adhesiveProducts/adhesiveProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function AdhesiveProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_1}
                        productName="Atleco Super Glue 3 gm"
                        productDesc='each'
                        productPrice='29'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_2}
                        productName="Deli Stick Glue"
                        productDesc='20 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_3}
                        productName="Deli Colored Paper Zems Clips..."
                        productDesc='each'
                        productPrice='59'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_4}
                        productName="Both Sided Gum Tape"
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
                        productImage={adhesiveProduct_5}
                        productName="Fevi Stick Glue"
                        productDesc='8 gm'
                        productPrice='49'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_6}
                        productName='Fevicol Super Glue'
                        productDesc='3 gm'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_7}
                        productName='Hunter Black Binding Tape'
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
                        productImage={adhesiveProduct_8}
                        productName='Osaka PVC Tape Black (18 mm)'
                        productDesc='3 pcs'
                        productPrice='59'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_9}
                        productName='Scotia Transparent Packaging 2...'
                        productDesc='each'
                        productPrice='139'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_10}
                        productName='Scotia Transparent Packaging 3...'
                        productDesc='each'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_11}
                        productName='Scotch Tape'
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
                        productImage={adhesiveProduct_12}
                        productName='Osaka All Tape'
                        productDesc='1 pcs'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_13}
                        productName='Matador Officemate Staples Pin...'
                        productDesc='1 box'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_14}
                        productName='Matador Office Mate Mini StapL...'
                        productDesc='1 pcs'
                        productPrice='37'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_15}
                        productName='Matador Officemate Stapler Big...'
                        productDesc='1 pcs'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_16}
                        productName='Deli Colored Paper Zems Clips...'
                        productDesc='100 pcs'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_17}
                        productName='Deli Colored Paper Zems Clips...'
                        productDesc='10 pcs'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={adhesiveProduct_18}
                        productName='Deli Colored Paper Zems Clips...'
                        productDesc='100 pcs'
                        productPrice='45'
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
