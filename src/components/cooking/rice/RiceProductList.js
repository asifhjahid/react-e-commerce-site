import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import riceProduct_1 from '../../../images/cookingProducts/riceProducts/riceProduct_1.jpg'
import riceProduct_10 from '../../../images/cookingProducts/riceProducts/riceProduct_10.jpg'
import riceProduct_11 from '../../../images/cookingProducts/riceProducts/riceProduct_11.jpg'
import riceProduct_12 from '../../../images/cookingProducts/riceProducts/riceProduct_12.jpg'
import riceProduct_13 from '../../../images/cookingProducts/riceProducts/riceProduct_13.jpg'
import riceProduct_14 from '../../../images/cookingProducts/riceProducts/riceProduct_14.jpg'
import riceProduct_15 from '../../../images/cookingProducts/riceProducts/riceProduct_15.jpg'
import riceProduct_16 from '../../../images/cookingProducts/riceProducts/riceProduct_16.jpg'
import riceProduct_17 from '../../../images/cookingProducts/riceProducts/riceProduct_17.jpg'
import riceProduct_18 from '../../../images/cookingProducts/riceProducts/riceProduct_18.jpg'
import riceProduct_19 from '../../../images/cookingProducts/riceProducts/riceProduct_19.jpg'
import riceProduct_2 from '../../../images/cookingProducts/riceProducts/riceProduct_2.jpg'
import riceProduct_20 from '../../../images/cookingProducts/riceProducts/riceProduct_20.jpg'
import riceProduct_21 from '../../../images/cookingProducts/riceProducts/riceProduct_21.jpg'
import riceProduct_22 from '../../../images/cookingProducts/riceProducts/riceProduct_22.jpg'
import riceProduct_23 from '../../../images/cookingProducts/riceProducts/riceProduct_23.jpg'
import riceProduct_24 from '../../../images/cookingProducts/riceProducts/riceProduct_24.jpg'
import riceProduct_25 from '../../../images/cookingProducts/riceProducts/riceProduct_25.jpg'
import riceProduct_26 from '../../../images/cookingProducts/riceProducts/riceProduct_26.jpg'
import riceProduct_27 from '../../../images/cookingProducts/riceProducts/riceProduct_27.jpg'
import riceProduct_28 from '../../../images/cookingProducts/riceProducts/riceProduct_28.jpg'
import riceProduct_3 from '../../../images/cookingProducts/riceProducts/riceProduct_3.jpg'
import riceProduct_4 from '../../../images/cookingProducts/riceProducts/riceProduct_4.jpg'
import riceProduct_5 from '../../../images/cookingProducts/riceProducts/riceProduct_5.jpg'
import riceProduct_6 from '../../../images/cookingProducts/riceProducts/riceProduct_6.jpg'
import riceProduct_7 from '../../../images/cookingProducts/riceProducts/riceProduct_7.jpg'
import riceProduct_8 from '../../../images/cookingProducts/riceProducts/riceProduct_8.jpg'
import riceProduct_9 from '../../../images/cookingProducts/riceProducts/riceProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function RiceProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_1}
                        productName="Zirashail Rice"
                        productDesc='5 kg'
                        productPrice='325'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_2}
                        productName="Rupchanda Chinigura Premium Ar..."
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
                        productImage={riceProduct_3}
                        productName="Pran Nazirshail Rice"
                        productDesc='5 kg'
                        productPrice='420'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_4}
                        productName="Pran Chinigura Rice"
                        productDesc='2 kg'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_5}
                        productName='Nazirshail Rice Standard'
                        productDesc='5 kg'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_6}
                        productName='Nazirshail Rice Premium'
                        productDesc='5 kg'
                        productPrice='379'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_7}
                        productName='Miniket Rice Standard'
                        productDesc='5 kg'
                        productPrice='265'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_8}
                        productName='Miniket Rice Premium'
                        productDesc='5 kg'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_9}
                        productName='Katarivog Rice'
                        productDesc='1 kg'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_10}
                        productName="Fresh Chinigura Rice"
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
                        productImage={riceProduct_11}
                        productName='Chinigura Rice Premium'
                        productDesc='1 kg'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_12}
                        productName="Chashi Aromatic Chinigura Rice"
                        productDesc='2 kg'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_13}
                        productName='Pran Chinigura Rice'
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
                        productImage={riceProduct_14}
                        productName='Chashi Aromatic Chinigura Rice...'
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
                        productImage={riceProduct_15}
                        productName='Ayojon Chinigura Aromatic Rice'
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
                        productImage={riceProduct_16}
                        productName='Fortune Biriyani Special Basmat...'
                        productDesc='1 kg'
                        productPrice='306'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_17}
                        productName='Nazirshail Rice'
                        productDesc='1 kg'
                        productPrice='77'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_18}
                        productName="Basmati Rice"
                        productDesc='1 kg'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_19}
                        productName='Rashid Miniket Rice Premium'
                        productDesc='1 kg'
                        productPrice='64'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_20}
                        productName="Durga Najir"
                        productDesc='1 kg'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_21}
                        productName="Paijam Rice"
                        productDesc='1 kg'
                        productPrice='51'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_22}
                        productName="Katari Najir"
                        productDesc='1 kg'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_23}
                        productName="Kajol Lota Rice Premium"
                        productDesc='1 kg'
                        productPrice='56'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_24}
                        productName="Kajol Lota Rice"
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
                        productImage={riceProduct_25}
                        productName="ACI Pure Nazirshail Rice"
                        productDesc='5 kg'
                        productPrice='420'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_26}
                        productName="Rupchanda Miniket Rice"
                        productDesc='5 kg'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_27}
                        productName="Rupchanda Nazirshail Rice"
                        productDesc='10 kg'
                        productPrice='810'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={riceProduct_28}
                        productName="Rupchanda Nazirshail Rice"
                        productDesc='5 kg'
                        productPrice='415'
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
