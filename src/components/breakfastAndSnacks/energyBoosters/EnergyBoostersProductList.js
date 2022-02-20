import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import energyBoosterProduct_1 from '../../../images/energyBoostersProducts/energyBoosterProduct_1.jpg'
import energyBoosterProduct_10 from '../../../images/energyBoostersProducts/energyBoosterProduct_10.jpg'
import energyBoosterProduct_11 from '../../../images/energyBoostersProducts/energyBoosterProduct_11.jpg'
import energyBoosterProduct_12 from '../../../images/energyBoostersProducts/energyBoosterProduct_12.jpg'
import energyBoosterProduct_13 from '../../../images/energyBoostersProducts/energyBoosterProduct_13.jpg'
import energyBoosterProduct_14 from '../../../images/energyBoostersProducts/energyBoosterProduct_14.jpg'
import energyBoosterProduct_15 from '../../../images/energyBoostersProducts/energyBoosterProduct_15.jpg'
import energyBoosterProduct_16 from '../../../images/energyBoostersProducts/energyBoosterProduct_16.jpg'
import energyBoosterProduct_2 from '../../../images/energyBoostersProducts/energyBoosterProduct_2.jpg'
import energyBoosterProduct_3 from '../../../images/energyBoostersProducts/energyBoosterProduct_3.jpg'
import energyBoosterProduct_4 from '../../../images/energyBoostersProducts/energyBoosterProduct_4.jpg'
import energyBoosterProduct_5 from '../../../images/energyBoostersProducts/energyBoosterProduct_5.jpg'
import energyBoosterProduct_6 from '../../../images/energyBoostersProducts/energyBoosterProduct_6.jpg'
import energyBoosterProduct_7 from '../../../images/energyBoostersProducts/energyBoosterProduct_7.jpg'
import energyBoosterProduct_8 from '../../../images/energyBoostersProducts/energyBoosterProduct_8.jpg'
import energyBoosterProduct_9 from '../../../images/energyBoostersProducts/energyBoosterProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function EnergyBoosterProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_1}
                        productName="Horlicks Health And Nutrition..."
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
                        productImage={energyBoosterProduct_2}
                        productName="Horlicks Mothers Health And Nu..."
                        productDesc='350 gm'
                        productPrice='490'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_3}
                        productName="Junior Horlicks Health And Nut..."
                        productDesc='500 gm'
                        productPrice='370'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_4}
                        productName="Nestle Milo Activ-Go Chocolate..."
                        productDesc='400 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_5}
                        productName='Nestle Milo Activ Go Powder Dr...'
                        productDesc='250 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_6}
                        productName='Ovaltine Malted Chocolate Drin...'
                        productDesc='400 gm'
                        productPrice='395'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_7}
                        productName='PediaSure Vanilla Delight'
                        productDesc='1 kg'
                        productPrice='1716'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_8}
                        productName='Horlicks Health And Nutrition...'
                        productDesc='1 kg'
                        productPrice='645'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_9}
                        productName="Women's Horlicks Jar"
                        productDesc='400 gm'
                        productPrice='480'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_10}
                        productName="Glucose - D"
                        productDesc='400 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_11}
                        productName='Glucon -D Orange Jar'
                        productDesc='400 gm'
                        productPrice='240'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_12}
                        productName="Ovaltine Power 10 Chocolate Dr..."
                        productDesc='400 gm'
                        productPrice='539'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_13}
                        productName='Nestle Milo Cereal Cornflakes'
                        productDesc='330 gm'
                        productPrice='390'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_14}
                        productName='Chocolate Horlicks'
                        productDesc='500 gm'
                        productPrice='395'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_15}
                        productName='Junior Horlicks Original'
                        productDesc='500'
                        productPrice='590'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={energyBoosterProduct_16}
                        productName='Horlicks Junior Health &amp; Nutri...'
                        productDesc='500 gm'
                        productPrice='390'
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


