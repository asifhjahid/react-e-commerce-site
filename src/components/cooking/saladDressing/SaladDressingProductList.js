import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import saladDressingProduct_1 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_1.jpg'
import saladDressingProduct_10 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_10.jpg'
import saladDressingProduct_11 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_11.jpg'
import saladDressingProduct_12 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_12.jpg'
import saladDressingProduct_13 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_13.jpg'
import saladDressingProduct_14 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_14.jpg'
import saladDressingProduct_15 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_15.jpg'
import saladDressingProduct_16 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_16.jpg'
import saladDressingProduct_2 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_2.jpg'
import saladDressingProduct_3 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_3.jpg'
import saladDressingProduct_4 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_4.jpg'
import saladDressingProduct_5 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_5.jpg'
import saladDressingProduct_6 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_6.jpg'
import saladDressingProduct_7 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_7.jpg'
import saladDressingProduct_8 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_8.jpg'
import saladDressingProduct_9 from '../../../images/cookingProducts/saladDressingProducts/saladDressing_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function SaladDressingProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_1}
                        productName="Bachun Sesame Oil 600 ml"
                        productDesc='600'
                        productPrice='649'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_2}
                        productName="Calypso Salad Cream"
                        productDesc='285 ml'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_3}
                        productName="Herman Apple Cider Vinegar 473..."
                        productDesc='473 ml'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_4}
                        productName="Remia Salad Cream 250 ml"
                        productDesc='250 ml'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_5}
                        productName='Remia French Salad Dressing 25...'
                        productDesc='250 ml'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_6}
                        productName='Remia Blue Cheese Salad Dressi...'
                        productDesc='250 ml'
                        productPrice='169'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_7}
                        productName='Heinz White Vinegar 473 ml'
                        productDesc='473 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_8}
                        productName='Olitalia Pomace Olive Oil 500...'
                        productDesc='500 ml'
                        productPrice='550'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_9}
                        productName='Pran Synnthetic Vinegar 300 ml'
                        productDesc='300 ml'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_10}
                        productName="Italiano Organic Apple Cider V..."
                        productDesc='500 ml'
                        productPrice='650'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_11}
                        productName='American Garden Pancake Syrup...'
                        productDesc='710 ml'
                        productPrice='489'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_12}
                        productName="Remia French Dressing Salad Dr..."
                        productDesc='250 ml'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_13}
                        productName='Regards Golap Jol'
                        productDesc='200 ml'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_14}
                        productName="French's Classic Yello Mustar..."
                        productDesc='255 gm'
                        productPrice='255'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_15}
                        productName='Radhuni Kasundi'
                        productDesc='285 ml'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={saladDressingProduct_16}
                        productName='Radhuni Kasundi'
                        productDesc='265 ml'
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
