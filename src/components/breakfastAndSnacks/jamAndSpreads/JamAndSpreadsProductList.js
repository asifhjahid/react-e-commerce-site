import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import jamAndSpreadProduct_1 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_1.jpg'
import jamAndSpreadProduct_10 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_10.jpg'
import jamAndSpreadProduct_11 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_11.jpg'
import jamAndSpreadProduct_12 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_12.jpg'
import jamAndSpreadProduct_13 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_13.jpg'
import jamAndSpreadProduct_14 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_14.jpg'
import jamAndSpreadProduct_15 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_15.jpg'
import jamAndSpreadProduct_16 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_16.jpg'
import jamAndSpreadProduct_17 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_17.jpg'
import jamAndSpreadProduct_18 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_18.jpg'
import jamAndSpreadProduct_19 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_19.jpg'
import jamAndSpreadProduct_2 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_2.jpg'
import jamAndSpreadProduct_20 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_20.jpg'
import jamAndSpreadProduct_21 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_21.jpg'
import jamAndSpreadProduct_22 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_22.jpg'
import jamAndSpreadProduct_23 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_23.jpg'
import jamAndSpreadProduct_24 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_24.jpg'
import jamAndSpreadProduct_25 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_25.jpg'
import jamAndSpreadProduct_26 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_26.jpg'
import jamAndSpreadProduct_27 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_27.jpg'
import jamAndSpreadProduct_28 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_28.jpg'
import jamAndSpreadProduct_29 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_29.jpg'
import jamAndSpreadProduct_3 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_3.jpg'
import jamAndSpreadProduct_30 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_30.jpg'
import jamAndSpreadProduct_31 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_31.jpg'
import jamAndSpreadProduct_32 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_32.jpg'
import jamAndSpreadProduct_33 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_33.jpg'
import jamAndSpreadProduct_34 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_34.jpg'
import jamAndSpreadProduct_35 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_35.jpg'
import jamAndSpreadProduct_36 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_36.jpg'
import jamAndSpreadProduct_37 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_37.jpg'
import jamAndSpreadProduct_38 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_38.jpg'
import jamAndSpreadProduct_39 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_39.jpg'
import jamAndSpreadProduct_4 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_4.jpg'
import jamAndSpreadProduct_40 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_40.jpg'
import jamAndSpreadProduct_41 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_41.jpg'
import jamAndSpreadProduct_42 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_42.jpg'
import jamAndSpreadProduct_43 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_43.jpg'
import jamAndSpreadProduct_44 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_44.jpg'
import jamAndSpreadProduct_45 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_45.jpg'
import jamAndSpreadProduct_46 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_46.jpg'
import jamAndSpreadProduct_47 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_47.jpg'
import jamAndSpreadProduct_48 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_48.jpg'
import jamAndSpreadProduct_49 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_49.jpg'
import jamAndSpreadProduct_5 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_5.jpg'
import jamAndSpreadProduct_50 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_50.jpg'
import jamAndSpreadProduct_51 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_51.jpg'
import jamAndSpreadProduct_52 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_52.jpg'
import jamAndSpreadProduct_53 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_53.jpg'
import jamAndSpreadProduct_6 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_6.jpg'
import jamAndSpreadProduct_7 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_7.jpg'
import jamAndSpreadProduct_8 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_8.jpg'
import jamAndSpreadProduct_9 from '../../../images/breakfastProducts/jamAndSpreadsProducts/jamAndSpreadProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function JamAndSpreadsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_1}
                        productName="Ahmed Orange Jelly"
                        productDesc='500 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_2}
                        productName="Alfa Mayonnaise"
                        productDesc='236 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_3}
                        productName="Amul Salted Butter"
                        productDesc='500 gm'
                        productPrice='800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_4}
                        productName="Foster Clark's Jam Strawberry"
                        productDesc='450 gm'
                        productPrice='495'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_5}
                        productName="Hershey's Chocolate Syrup"
                        productDesc='680 gm'
                        productPrice='325'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_6}
                        productName='Nutella Hazelnut Cocoa Spread'
                        productDesc='350 gm'
                        productPrice='520'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_7}
                        productName='Ruchi Mixed Fruit Jam'
                        productDesc='480 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_8}
                        productName='Ruchi Orange Jam'
                        productDesc='480 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_9}
                        productName="Shezan Mixed Fruit Jam"
                        productDesc='440 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_10}
                        productName="Shezan Apple Jelly"
                        productDesc='440 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_11}
                        productName='ST- Dalfor Jam Strawberry'
                        productDesc='284 gm'
                        productPrice='539'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_12}
                        productName="ST- Dalfor Jam Wild Blueberry"
                        productDesc='284'
                        productPrice='549'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_13}
                        productName='ST- Dalfor Jam Orange'
                        productDesc='284 gm'
                        productPrice='539'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_14}
                        productName='Ahmed Mixed Fruit Jam'
                        productDesc='500 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_15}
                        productName='Stute Apricot Conserve Extra J...'
                        productDesc='340 gm'
                        productPrice='359'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_16}
                        productName='Kazi Farms Kitchen Strawberry...'
                        productDesc='340 gm'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_17}
                        productName='Ahmed Sugar Free Orange Jelly'
                        productDesc='375 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_18}
                        productName="Kazi Farms Kitchen Orange Jell..."
                        productDesc='340 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_19}
                        productName='Pran Mixed Fruit Jam 375 gm'
                        productDesc='375 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_20}
                        productName="Shezan Mango Jam"
                        productDesc='440 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_21}
                        productName="American Garden Real Mayonnais..."
                        productDesc='473 gm'
                        productPrice='405'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_22}
                        productName="Ahmed Guava Jelly"
                        productDesc='500 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_23}
                        productName="Ahmed Pineapple Jelly"
                        productDesc='500 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_24}
                        productName="Stute Hazelnut Chocolate Sprea..."
                        productDesc='350 gm'
                        productPrice='499'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_25}
                        productName="Stute Diabetic Strawberry Extr..."
                        productDesc='430 gm'
                        productPrice='389'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_26}
                        productName="Stute Diabetic Raspberry Extra..."
                        productDesc='430 gm'
                        productPrice='379'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_27}
                        productName="Kishwan Diabetic Orange Jelly"
                        productDesc='500 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_28}
                        productName="Green Park Mushroom Whole Can"
                        productDesc='425 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_29}
                        productName="Ahmed Sugar Free Apple Jelly"
                        productDesc='375 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_30}
                        productName="Best Blueberry Fruit Jam Conse..."
                        productDesc='450 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_31}
                        productName="Best Mixed Fruit Jam Conserve"
                        productDesc='450 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_32}
                        productName="Best Orange Marmalade Jam Cons..."
                        productDesc='450 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_33}
                        productName="Best Strawberry Fruit Jam Cons..."
                        productDesc='450 gm'
                        productPrice='430'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_34}
                        productName="Cadbury Crunchie Cream Spread"
                        productDesc='400 gm'
                        productPrice='569'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_35}
                        productName="Sundrop Peanut Butter Jelly(G..."
                        productDesc='340 gm'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_36}
                        productName="Alfa Mayonnaise"
                        productDesc='473 gm'
                        productPrice='215'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_37}
                        productName="Alfa Mayonnaise"
                        productDesc='946 ml'
                        productPrice='410'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_38}
                        productName="Alfa Mayonnaise"
                        productDesc='473 ml'
                        productPrice='215'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_39}
                        productName="Ahmed Apple Jam"
                        productDesc='500 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_40}
                        productName="Ahmed Mango Jam"
                        productDesc='500 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_41}
                        productName="Ahmed Mixed Fruit Jelly"
                        productDesc='500 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_42}
                        productName="Ahmed Mixed Fruit Jam"
                        productDesc='1 kg'
                        productPrice='195'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_43}
                        productName="Ahmed Sugar Free Mixed Fruit J..."
                        productDesc='375 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_44}
                        productName="Ahmed Apple Jam"
                        productDesc='200 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_45}
                        productName="ACI Pure Mixed Fruit Jam"
                        productDesc='500 gm'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_46}
                        productName="Ahmed Orange Jelly"
                        productDesc='500 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_47}
                        productName="Nocilla Two Colour Chocolate"
                        productDesc='200 gm'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_48}
                        productName="Nocilla Chocolate Cream Red"
                        productDesc='200 gm'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_49}
                        productName="Nocilla Two Flavor Cocoa Sprea..."
                        productDesc='190 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_50}
                        productName="Nocilla Chocolate Cream Red"
                        productDesc='135 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_51}
                        productName="Nutella Hazelnut Cocoa Spread"
                        productDesc='400 gm'
                        productPrice='589'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_52}
                        productName="Nocilla Cocoa Spread"
                        productDesc='190 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={jamAndSpreadProduct_53}
                        productName="American Garden Mayonnaise Big..."
                        productDesc='887 gm'
                        productPrice='800'
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
