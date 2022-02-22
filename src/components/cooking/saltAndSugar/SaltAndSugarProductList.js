import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import saltAndSugarProduct_1 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_1.jpg'
import saltAndSugarProduct_10 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_10.jpg'
import saltAndSugarProduct_11 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_11.jpg'
import saltAndSugarProduct_12 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_12.jpg'
import saltAndSugarProduct_13 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_13.jpg'
import saltAndSugarProduct_14 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_14.jpg'
import saltAndSugarProduct_15 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_15.jpg'
import saltAndSugarProduct_16 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_16.jpg'
import saltAndSugarProduct_17 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_17.jpg'
import saltAndSugarProduct_18 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_18.jpg'
import saltAndSugarProduct_19 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_19.jpg'
import saltAndSugarProduct_2 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_2.jpg'
import saltAndSugarProduct_3 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_3.jpg'
import saltAndSugarProduct_4 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_4.jpg'
import saltAndSugarProduct_5 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_5.jpg'
import saltAndSugarProduct_6 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_6.jpg'
import saltAndSugarProduct_7 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_7.jpg'
import saltAndSugarProduct_8 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_8.jpg'
import saltAndSugarProduct_9 from '../../../images/cookingProducts/saltAndSugarProducts/saltSugarProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SaltAndSugarProductProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_1}
                        productName="Muskan Salt"
                        productDesc='1 kg'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_2}
                        productName="Fresh Super Premium (Vacuum) S..."
                        productDesc='1 kg'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_3}
                        productName="ACI Pure Salt"
                        productDesc='1 kg'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_4}
                        productName="ACI Pure Salt"
                        productDesc='500 gm'
                        productPrice='17'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_5}
                        productName='ACI Pure Sugar'
                        productDesc='1 kg'
                        productPrice='78'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_6}
                        productName='Teer Sugar 1 kg'
                        productDesc='1 kg'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_7}
                        productName='Fresh Refined Sugar 1 kg'
                        productDesc='1 kg'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_8}
                        productName='Molla Super Salt'
                        productDesc='1 kg'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_9}
                        productName='Himalayan Pink Salt'
                        productDesc='200 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_10}
                        productName="Canderel Everyday Sweetness"
                        productDesc='75 gm'
                        productPrice='320'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_11}
                        productName='Sugar Free Gold Powder'
                        productDesc='100 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_12}
                        productName="SIS Icing Sugar"
                        productDesc='500 gm'
                        productPrice='279'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_13}
                        productName='Sugar'
                        productDesc='1 kg'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_14}
                        productName='Igloo Sugar Pack'
                        productDesc='1 kg'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_15}
                        productName='Confidence Salt'
                        productDesc='1 kg'
                        productPrice='32'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_16}
                        productName='Confidence Salt'
                        productDesc='500 gm'
                        productPrice='17'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_17}
                        productName='Pran Lodized Salt'
                        productDesc='1 kg'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_18}
                        productName='Ifad lodized Salt'
                        productDesc='1 kg'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saltAndSugarProduct_19}
                        productName='Molla Super Salt'
                        productDesc='500'
                        productPrice='18'
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
