import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import coffeeProduct_1 from '../../../images/coffeeProducts/coffeeProduct_1.webp'
import coffeeProduct_10 from '../../../images/coffeeProducts/coffeeProduct_10.webp'
import coffeeProduct_11 from '../../../images/coffeeProducts/coffeeProduct_11.webp'
import coffeeProduct_12 from '../../../images/coffeeProducts/coffeeProduct_12.webp'
import coffeeProduct_13 from '../../../images/coffeeProducts/coffeeProduct_13.webp'
import coffeeProduct_14 from '../../../images/coffeeProducts/coffeeProduct_14.webp'
import coffeeProduct_15 from '../../../images/coffeeProducts/coffeeProduct_15.webp'
import coffeeProduct_16 from '../../../images/coffeeProducts/coffeeProduct_16.webp'
import coffeeProduct_17 from '../../../images/coffeeProducts/coffeeProduct_17.webp'
import coffeeProduct_18 from '../../../images/coffeeProducts/coffeeProduct_18.webp'
import coffeeProduct_19 from '../../../images/coffeeProducts/coffeeProduct_19.webp'
import coffeeProduct_2 from '../../../images/coffeeProducts/coffeeProduct_2.webp'
import coffeeProduct_20 from '../../../images/coffeeProducts/coffeeProduct_20.webp'
import coffeeProduct_21 from '../../../images/coffeeProducts/coffeeProduct_21.webp'
import coffeeProduct_22 from '../../../images/coffeeProducts/coffeeProduct_22.webp'
import coffeeProduct_23 from '../../../images/coffeeProducts/coffeeProduct_23.webp'
import coffeeProduct_24 from '../../../images/coffeeProducts/coffeeProduct_24.webp'
import coffeeProduct_25 from '../../../images/coffeeProducts/coffeeProduct_25.webp'
import coffeeProduct_26 from '../../../images/coffeeProducts/coffeeProduct_26.webp'
import coffeeProduct_27 from '../../../images/coffeeProducts/coffeeProduct_27.webp'
import coffeeProduct_28 from '../../../images/coffeeProducts/coffeeProduct_28.webp'
import coffeeProduct_29 from '../../../images/coffeeProducts/coffeeProduct_29.webp'
import coffeeProduct_3 from '../../../images/coffeeProducts/coffeeProduct_3.webp'
import coffeeProduct_30 from '../../../images/coffeeProducts/coffeeProduct_30.webp'
import coffeeProduct_31 from '../../../images/coffeeProducts/coffeeProduct_31.webp'
import coffeeProduct_32 from '../../../images/coffeeProducts/coffeeProduct_32.webp'
import coffeeProduct_33 from '../../../images/coffeeProducts/coffeeProduct_33.webp'
import coffeeProduct_34 from '../../../images/coffeeProducts/coffeeProduct_34.webp'
import coffeeProduct_35 from '../../../images/coffeeProducts/coffeeProduct_35.webp'
import coffeeProduct_36 from '../../../images/coffeeProducts/coffeeProduct_36.webp'
import coffeeProduct_37 from '../../../images/coffeeProducts/coffeeProduct_37.webp'
import coffeeProduct_38 from '../../../images/coffeeProducts/coffeeProduct_38.webp'
import coffeeProduct_39 from '../../../images/coffeeProducts/coffeeProduct_39.webp'
import coffeeProduct_4 from '../../../images/coffeeProducts/coffeeProduct_4.webp'
import coffeeProduct_5 from '../../../images/coffeeProducts/coffeeProduct_5.webp'
import coffeeProduct_6 from '../../../images/coffeeProducts/coffeeProduct_6.webp'
import coffeeProduct_7 from '../../../images/coffeeProducts/coffeeProduct_7.webp'
import coffeeProduct_8 from '../../../images/coffeeProducts/coffeeProduct_8.webp'
import coffeeProduct_9 from '../../../images/coffeeProducts/coffeeProduct_9.webp'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function CoffeeProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_1}
                        productName="Bru Pure Instant Coffee Jar"
                        productDesc='100 gm'
                        productPrice='499'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_2}
                        productName="Davidoff Cafe Espresso 57 Coff..."
                        productDesc='100 gm'
                        productPrice='559'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_3}
                        productName="Nescafe 3 in 1"
                        productDesc='15 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_4}
                        productName="Nestle Coffee Mate Richer &amp; Cr..."
                        productDesc='400 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_5}
                        productName="Nestle Nescafe Classic Instant..."
                        productDesc='50 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_6}
                        productName='Nestle Nescafe Creamy Latte'
                        productDesc='18 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_7}
                        productName='Delta Decafe Caffine Free Inst...'
                        productDesc='100 gm'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_8}
                        productName='Nestle Coffee Mate Richer &amp; Cr...'
                        productDesc='450 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_9}
                        productName="Kopico Black"
                        productDesc='20 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_10}
                        productName="Kopico Brown"
                        productDesc='20 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_11}
                        productName='Mac Coffee Gold Jar'
                        productDesc='50 gm'
                        productPrice='315'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_12}
                        productName="Mac Coffee Original Jar"
                        productDesc='100 gm'
                        productPrice='395'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_13}
                        productName='Mac Coffee Origin Pounch'
                        productDesc='95 gm'
                        productPrice='295'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_14}
                        productName='Nescafe Gold Jar'
                        productDesc='100 gm'
                        productPrice='495'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_15}
                        productName='Moccona Select Instant Coffee'
                        productDesc='190 gm'
                        productPrice='660'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_16}
                        productName='Rigs Coffee Creamer'
                        productDesc='450 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_17}
                        productName='Noble Classic Instant Coffee J...'
                        productDesc='100 gm'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_18}
                        productName="Noble Brazil Extra Ordinary In..."
                        productDesc='100 gm'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_19}
                        productName="Noble Single Origin Brazil Ins..."
                        productDesc='100 gm'
                        productPrice='500'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_20}
                        productName="Santos Cappuccino Instant Coff..."
                        productDesc='20 gm'
                        productPrice='600'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_21}
                        productName="Mac Coffee Gold (Pouch)"
                        productDesc='95 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_22}
                        productName="Nescafe Instant Coffee Jar Cla..."
                        productDesc='200 gm'
                        productPrice='495'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_23}
                        productName="Nestle Gold Blend Instant Coff..."
                        productDesc='100 pcs'
                        productPrice='495'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_24}
                        productName="Nestle Coffee Mate"
                        productDesc='450 gm'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_25}
                        productName="Nestle Nescafe Classic Instant..."
                        productDesc='200 gm'
                        productPrice='480'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_26}
                        productName="Nestle Nescafe Classic Instant..."
                        productDesc='100 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_27}
                        productName="Nascafe Classic 100 Pure Coffe..."
                        productDesc='25 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_28}
                        productName="Nescafe Classic Coffee Jar"
                        productDesc='100 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_29}
                        productName="Nescafe Original Coffee"
                        productDesc='200 gm'
                        productPrice='599'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_30}
                        productName="Nescafe Gold Blend Instant Cof..."
                        productDesc='200 gm'
                        productPrice='950'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_31}
                        productName="Nestle Nescafe Gold Instant Co..."
                        productDesc='50 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_32}
                        productName="Nestle Nescafe Gold Instant Co..."
                        productDesc='100 gm'
                        productPrice='495'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_33}
                        productName="Nescafe Gold Dark Latte"
                        productDesc='34 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_34}
                        productName="Nescafe 3 in 1 Coffee Mix (Ori..."
                        productDesc='15 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_35}
                        productName="Tora Bika Creamy Latte"
                        productDesc='1 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_36}
                        productName="Tora Bika Cappuccino Instant Co..."
                        productDesc='1 pcs'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_37}
                        productName="Old Town White Coffee Hazelnut"
                        productDesc='40 gm'
                        productPrice='29'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_38}
                        productName="Nestle Coffee Mate Creamer"
                        productDesc='1 kg'
                        productPrice='649'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={coffeeProduct_39}
                        productName="Nestle Coffee Mate Original Co..."
                        productDesc='400 gm'
                        productPrice='270'
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
