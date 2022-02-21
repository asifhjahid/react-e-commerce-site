import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import pastaProduct_1 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_1.jpg'
import pastaProduct_10 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_10.jpg'
import pastaProduct_11 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_11.jpg'
import pastaProduct_12 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_12.jpg'
import pastaProduct_13 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_13.jpg'
import pastaProduct_14 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_14.jpg'
import pastaProduct_15 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_15.jpg'
import pastaProduct_16 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_16.jpg'
import pastaProduct_17 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_17.jpg'
import pastaProduct_18 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_18.jpg'
import pastaProduct_19 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_19.jpg'
import pastaProduct_2 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_2.jpg'
import pastaProduct_20 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_20.jpg'
import pastaProduct_21 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_21.jpg'
import pastaProduct_22 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_22.jpg'
import pastaProduct_23 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_23.jpg'
import pastaProduct_24 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_24.jpg'
import pastaProduct_25 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_25.jpg'
import pastaProduct_26 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_26.jpg'
import pastaProduct_27 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_27.jpg'
import pastaProduct_28 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_28.jpg'
import pastaProduct_29 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_29.jpg'
import pastaProduct_3 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_3.jpg'
import pastaProduct_30 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_30.jpg'
import pastaProduct_31 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_31.jpg'
import pastaProduct_32 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_32.jpg'
import pastaProduct_33 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_33.jpg'
import pastaProduct_34 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_34.jpg'
import pastaProduct_35 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_35.jpg'
import pastaProduct_36 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_36.jpg'
import pastaProduct_37 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_37.jpg'
import pastaProduct_38 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_38.jpg'
import pastaProduct_39 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_39.jpg'
import pastaProduct_4 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_4.jpg'
import pastaProduct_40 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_40.jpg'
import pastaProduct_41 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_41.jpg'
import pastaProduct_42 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_42.jpg'
import pastaProduct_43 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_43.jpg'
import pastaProduct_44 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_44.jpg'
import pastaProduct_45 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_45.jpg'
import pastaProduct_46 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_46.jpg'
import pastaProduct_47 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_47.jpg'
import pastaProduct_48 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_48.jpg'
import pastaProduct_49 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_49.jpg'
import pastaProduct_5 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_5.jpg'
import pastaProduct_50 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_50.jpg'
import pastaProduct_51 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_51.jpg'
import pastaProduct_52 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_52.jpg'
import pastaProduct_6 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_6.jpg'
import pastaProduct_7 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_7.jpg'
import pastaProduct_8 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_8.jpg'
import pastaProduct_9 from '../../../images/breakfastProducts/pastaProducts/pastaProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function PastaProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_1}
                        productName="Pasta Hat Macaroni(Big Elbow)"
                        productDesc='500 gm'
                        productPrice='145'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_2}
                        productName="Pasta Hat Macaroni (Medium She..."
                        productDesc='500 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_3}
                        productName="Mr. Pasta Tangy Tomato"
                        productDesc='248 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_4}
                        productName="Mr. Pasta Chilli Chicken"
                        productDesc='248 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_5}
                        productName='Maggi Pazzta Cheese Macaroni'
                        productDesc='65 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_6}
                        productName='Kolson Macaroni Pasta Screw'
                        productDesc='400 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_7}
                        productName='Bashundhara Tube Pasta'
                        productDesc='500 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_8}
                        productName='Bashundhara Sea Shell Pasta'
                        productDesc='500 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_9}
                        productName='Bashundhara Bamboo Macaroni'
                        productDesc='400 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_10}
                        productName="Barilla Penne Rigate N.73 Past..."
                        productDesc='500 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_11}
                        productName='Slim Pasta Fettuccine'
                        productDesc='200 gm'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_12}
                        productName="Santa Sophia Durum Wheat(Big..."
                        productDesc='500 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_13}
                        productName='Slim Pasta Spaghetti'
                        productDesc='200 gm'
                        productPrice='310'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_14}
                        productName='Santa Sophia Durum Wheat Spagh...'
                        productDesc='500 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_15}
                        productName='Santa Sophia Durum Wheat (Big...'
                        productDesc='500'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_16}
                        productName='Santa Lucia Pasta Spaghetti'
                        productDesc='500'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_17}
                        productName='San Remo Small Shells Pasta'
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_18}
                        productName="San Remo Macaroni Pasta"
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_19}
                        productName='San Remo Fusilini Pasta'
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_20}
                        productName="Pastiano Penne Pasta"
                        productDesc='500'
                        productPrice='189'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_21}
                        productName="Reggia Pasta Lasagne Sheet"
                        productDesc='500 gm'
                        productPrice='425'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_22}
                        productName="Pasta Hat Spaghetti"
                        productDesc='500 gm'
                        productPrice='155'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_23}
                        productName="Mazza Spaghetti Pasta"
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_24}
                        productName="Mazzan Penne Pasta"
                        productDesc='500 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_25}
                        productName="Mazzan Linguine Pasta"
                        productDesc='500 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_26}
                        productName="Mazzan Fusilli Pasta"
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_27}
                        productName="Mazzan Farfalle Pasta"
                        productDesc='500 gm'
                        productPrice='229'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_28}
                        productName="Italiano Spaghetti Pasta"
                        productDesc='500 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_29}
                        productName="Delicia Penne Pasta"
                        productDesc='400 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_30}
                        productName="Delicia Spaghetti Pasta"
                        productDesc='400 gm'
                        productPrice='175'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_31}
                        productName="Bashundhara Screw Macaroni"
                        productDesc='400 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_32}
                        productName="Bashundhara Macaroni Screw"
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_33}
                        productName="Barilla Durum Wheat Pasta Spag..."
                        productDesc='500 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_34}
                        productName="Barilla Linguine N.13 Pasta"
                        productDesc='500 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_35}
                        productName="Barilla Durum Wheat Pasta Penn..."
                        productDesc='500 gm'
                        productPrice='250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_36}
                        productName="Mazzan Farfalle Pasta"
                        productDesc='500 gm'
                        productPrice='229'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_37}
                        productName="Mazzan Fusilli Pasta"
                        productDesc='500 gm'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_38}
                        productName="Dekko Oyster Pasta"
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_39}
                        productName="Besler Penne Rigate Pasta"
                        productDesc='500 gm'
                        productPrice='119'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_40}
                        productName="Kolson Macaroni"
                        productDesc='200 gm'
                        productPrice='35'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_41}
                        productName="Arbella Pasta"
                        productDesc='500 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_42}
                        productName="Santa Lucia Elbows Pasta"
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
                        productImage={pastaProduct_43}
                        productName="Reggia Pasta Lasagne"
                        productDesc='500 gm'
                        productPrice='400'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_44}
                        productName="Fiamma 7 Bucatini Spaghetti"
                        productDesc='500 gm'
                        productPrice='220'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_45}
                        productName="Italpasta Farfalle Berruto"
                        productDesc='500 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_46}
                        productName="Italpasta 88 Farfalle"
                        productDesc='500 gm'
                        productPrice='199'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_47}
                        productName="Kolson Macaroni Shell"
                        productDesc='400 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_48}
                        productName="Kolson Macaroni Bamboo"
                        productDesc='400 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_49}
                        productName="Kolson Macaroni Assorted Pack"
                        productDesc='500 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_50}
                        productName="Kolson Macaroni Assorted Pack..."
                        productDesc='300 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_51}
                        productName="Pouch Yung Tung Cheese And Her..."
                        productDesc='67 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={pastaProduct_52}
                        productName="Santa Sophia Traditional Durum..."
                        productDesc='500 gm'
                        productPrice='110'
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
