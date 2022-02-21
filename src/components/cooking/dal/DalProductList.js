import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import dalProduct_1 from '../../../images/cookingProducts/dalProducts/dalProduct_1.jpeg'
import dalProduct_10 from '../../../images/cookingProducts/dalProducts/dalProduct_10.jpeg'
import dalProduct_11 from '../../../images/cookingProducts/dalProducts/dalProduct_11.jpeg'
import dalProduct_12 from '../../../images/cookingProducts/dalProducts/dalProduct_12.jpeg'
import dalProduct_13 from '../../../images/cookingProducts/dalProducts/dalProduct_13.jpeg'
import dalProduct_14 from '../../../images/cookingProducts/dalProducts/dalProduct_14.jpeg'
import dalProduct_15 from '../../../images/cookingProducts/dalProducts/dalProduct_15.jpeg'
import dalProduct_16 from '../../../images/cookingProducts/dalProducts/dalProduct_16.jpeg'
import dalProduct_17 from '../../../images/cookingProducts/dalProducts/dalProduct_17.jpeg'
import dalProduct_18 from '../../../images/cookingProducts/dalProducts/dalProduct_18.jpeg'
import dalProduct_19 from '../../../images/cookingProducts/dalProducts/dalProduct_19.jpeg'
import dalProduct_2 from '../../../images/cookingProducts/dalProducts/dalProduct_2.jpeg'
import dalProduct_3 from '../../../images/cookingProducts/dalProducts/dalProduct_3.jpeg'
import dalProduct_4 from '../../../images/cookingProducts/dalProducts/dalProduct_4.jpeg'
import dalProduct_5 from '../../../images/cookingProducts/dalProducts/dalProduct_5.jpeg'
import dalProduct_6 from '../../../images/cookingProducts/dalProducts/dalProduct_6.jpeg'
import dalProduct_7 from '../../../images/cookingProducts/dalProducts/dalProduct_7.jpeg'
import dalProduct_8 from '../../../images/cookingProducts/dalProducts/dalProduct_8.jpeg'
import dalProduct_9 from '../../../images/cookingProducts/dalProducts/dalProduct_9.jpeg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function DalProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_1}
                        productName="Split Pea (Motor Dal)"
                        productDesc='500 gm'
                        productPrice='89'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_2}
                        productName="Shaad Moshur Dal"
                        productDesc='1 kg'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_3}
                        productName="Pran Mug Dal"
                        productDesc='500 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_4}
                        productName="ACI Pure Moshur Dal"
                        productDesc='1 kg'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_5}
                        productName='Dubli Boot'
                        productDesc='500 gm'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_6}
                        productName='Chola Boot'
                        productDesc='1 kg'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_7}
                        productName='Pusti Deshi Moshur Dal'
                        productDesc='1 kg'
                        productPrice='115'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_8}
                        productName='Aarong Fresh Moshur Dal'
                        productDesc='1 kg'
                        productPrice='147'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_9}
                        productName='Mug Dal'
                        productDesc='500 gm'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_10}
                        productName="Booter Dal"
                        productDesc='500 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_11}
                        productName='Booter Dal'
                        productDesc='1 kg'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_12}
                        productName="Pran Mashur Dal"
                        productDesc='500 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_13}
                        productName='Moogh Dal Premium Pack'
                        productDesc='1 kg'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_14}
                        productName='Local Moshur Dal'
                        productDesc='500 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_15}
                        productName='Moshur Dal (Imported)'
                        productDesc='1 kg'
                        productPrice='123'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_16}
                        productName='Dubli Boot'
                        productDesc='1 kg'
                        productPrice='52'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_17}
                        productName='Mashkalai Dal'
                        productDesc='1 kg'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_18}
                        productName="Mashkalai Dal"
                        productDesc='500 gm'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={dalProduct_19}
                        productName='Chola Boot'
                        productDesc='500 gm'
                        productPrice='49'
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
