import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import chocolateProduct_1 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_1.jpg'
import chocolateProduct_10 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_10.jpg'
import chocolateProduct_11 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_11.jpg'
import chocolateProduct_12 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_12.jpg'
import chocolateProduct_13 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_13.jpg'
import chocolateProduct_14 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_14.jpg'
import chocolateProduct_15 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_15.jpg'
import chocolateProduct_16 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_16.jpg'
import chocolateProduct_17 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_17.jpg'
import chocolateProduct_18 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_18.jpg'
import chocolateProduct_19 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_19.jpg'
import chocolateProduct_2 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_2.jpg'
import chocolateProduct_20 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_20.jpg'
import chocolateProduct_21 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_21.jpg'
import chocolateProduct_22 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_22.jpg'
import chocolateProduct_23 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_23.jpg'
import chocolateProduct_24 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_24.jpg'
import chocolateProduct_25 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_25.jpg'
import chocolateProduct_26 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_26.jpg'
import chocolateProduct_27 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_27.jpg'
import chocolateProduct_28 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_28.jpg'
import chocolateProduct_29 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_29.jpg'
import chocolateProduct_3 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_3.jpg'
import chocolateProduct_30 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_30.jpg'
import chocolateProduct_31 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_31.jpg'
import chocolateProduct_32 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_32.jpg'
import chocolateProduct_33 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_33.jpg'
import chocolateProduct_34 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_34.jpg'
import chocolateProduct_35 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_35.jpg'
import chocolateProduct_36 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_36.jpg'
import chocolateProduct_37 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_37.jpg'
import chocolateProduct_38 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_38.jpg'
import chocolateProduct_39 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_39.jpg'
import chocolateProduct_4 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_4.jpg'
import chocolateProduct_40 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_40.jpg'
import chocolateProduct_5 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_5.jpg'
import chocolateProduct_6 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_6.jpg'
import chocolateProduct_7 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_7.jpg'
import chocolateProduct_8 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_8.jpg'
import chocolateProduct_9 from '../../../images/breakfastProducts/chocolatesProducts/chocolateProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function ChocolatesProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_1}
                        productName="Twix Chocolate"
                        productDesc='50 gm'
                        productPrice='139'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_2}
                        productName="Toblerone Yellow"
                        productDesc='100 gm'
                        productPrice='270'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_3}
                        productName="Tic Tac Orange Flavored Mouth..."
                        productDesc='7.2 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_4}
                        productName="Tic Tac Mint Flavored Mouth Fr..."
                        productDesc='7.2 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_5}
                        productName="Tic Tac Red Apple Flavored Mou..."
                        productDesc='7.2 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_6}
                        productName='Lotte Spout Peppermint'
                        productDesc='23.86 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_7}
                        productName='Pran MR Mango Candy Pouch'
                        productDesc='50 pcs'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_8}
                        productName='Olympic Tetul Candy'
                        productDesc='125 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_9}
                        productName="Munch Crunchilicious Chocolate..."
                        productDesc='each'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_10}
                        productName="Nestle Kitkat 3 Finger Chocola..."
                        productDesc='27.5 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_11}
                        productName='Mentos Pure Fresh Chewing Stro...'
                        productDesc='29.7 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_12}
                        productName="Mentos Mint Roll"
                        productDesc='21.6 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_13}
                        productName='Mentos Rainbow Candy Roll'
                        productDesc='21.6 gm'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_14}
                        productName='Mars Chocolate Bar'
                        productDesc='51 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_15}
                        productName='M&amp;M Peanut Chocolate'
                        productDesc='45 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_16}
                        productName='M&amp;M Chocolate'
                        productDesc='45 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_17}
                        productName='Kinder Joy (Boys)'
                        productDesc='20 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_18}
                        productName="Hershey's Creamy Milk Chocolat..."
                        productDesc='40 gm'
                        productPrice='159'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_19}
                        productName="Fresh Chocolate Bar"
                        productDesc='15.5 gm'
                        productPrice='10'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_20}
                        productName="Mentos Pure Fresh Chewing Lime..."
                        productDesc='29.7 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_21}
                        productName="Chupa Chups Tubes Mini Box"
                        productDesc='10 pcs'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_22}
                        productName="Center Fresh Spearmint Chewing..."
                        productDesc='20 gm'
                        productPrice='15'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_23}
                        productName="Cadbury Dairy Milk Silk Plain..."
                        productDesc='150'
                        productPrice='330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_24}
                        productName="Cadbury Dairy Milk Chocolate"
                        productDesc='24 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_25}
                        productName="Cadbury 5 Star Softer Bar"
                        productDesc='40 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_26}
                        productName="Bounty 2x Chocolate"
                        productDesc='57 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_27}
                        productName="Amul Limon White Chocolate"
                        productDesc='150 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_28}
                        productName="Amul Super Fruit White Chocola..."
                        productDesc='150 gm'
                        productPrice='360'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_29}
                        productName="Amul Milk Chocolate"
                        productDesc='40 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_30}
                        productName="Amul I Love You Fruit N Nut Ch..."
                        productDesc='150 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_31}
                        productName="Alpenliebe Pop Party Pack Loll..."
                        productDesc='9 pcs'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_32}
                        productName="Alpenliebe Pop Jar"
                        productDesc='36 pcs'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_33}
                        productName="Alpenliebe Juzt Jelly Snack Pa..."
                        productDesc='10 pcs'
                        productPrice='20'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_34}
                        productName="Alpenliebe Juzt Jelly Chutney"
                        productDesc='170 pcs'
                        productPrice='340'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_35}
                        productName="Choco Bean Toffee"
                        productDesc='1 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_36}
                        productName="Pran Choco Bean Feeder Toy Cad..."
                        productDesc='1 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_37}
                        productName="Love Candy (Strawberry Flavour..."
                        productDesc='150 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_38}
                        productName="Kopiko Coffee Candy"
                        productDesc='150 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_39}
                        productName="Erko Marshmallow Plus Blue &amp; W..."
                        productDesc='30 gm'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={chocolateProduct_40}
                        productName="Sweetmans Choc Eclairs Chocola..."
                        productDesc='1 box'
                        productPrice='150'
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
