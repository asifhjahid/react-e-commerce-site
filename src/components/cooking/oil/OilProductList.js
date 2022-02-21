import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import oilProduct_1 from '../../../images/cookingProducts/oilProducts/oilProduct_1.jpeg'
import oilProduct_10 from '../../../images/cookingProducts/oilProducts/oilProduct_10.jpeg'
import oilProduct_11 from '../../../images/cookingProducts/oilProducts/oilProduct_11.jpeg'
import oilProduct_12 from '../../../images/cookingProducts/oilProducts/oilProduct_12.jpeg'
import oilProduct_13 from '../../../images/cookingProducts/oilProducts/oilProduct_13.jpeg'
import oilProduct_14 from '../../../images/cookingProducts/oilProducts/oilProduct_14.jpeg'
import oilProduct_15 from '../../../images/cookingProducts/oilProducts/oilProduct_15.jpeg'
import oilProduct_16 from '../../../images/cookingProducts/oilProducts/oilProduct_16.jpeg'
import oilProduct_17 from '../../../images/cookingProducts/oilProducts/oilProduct_17.jpeg'
import oilProduct_18 from '../../../images/cookingProducts/oilProducts/oilProduct_18.jpeg'
import oilProduct_19 from '../../../images/cookingProducts/oilProducts/oilProduct_19.jpeg'
import oilProduct_2 from '../../../images/cookingProducts/oilProducts/oilProduct_2.jpeg'
import oilProduct_20 from '../../../images/cookingProducts/oilProducts/oilProduct_20.jpeg'
import oilProduct_21 from '../../../images/cookingProducts/oilProducts/oilProduct_21.jpeg'
import oilProduct_22 from '../../../images/cookingProducts/oilProducts/oilProduct_22.jpeg'
import oilProduct_23 from '../../../images/cookingProducts/oilProducts/oilProduct_23.jpeg'
import oilProduct_24 from '../../../images/cookingProducts/oilProducts/oilProduct_24.jpeg'
import oilProduct_25 from '../../../images/cookingProducts/oilProducts/oilProduct_25.jpeg'
import oilProduct_26 from '../../../images/cookingProducts/oilProducts/oilProduct_26.jpeg'
import oilProduct_27 from '../../../images/cookingProducts/oilProducts/oilProduct_27.jpeg'
import oilProduct_28 from '../../../images/cookingProducts/oilProducts/oilProduct_28.jpeg'
import oilProduct_29 from '../../../images/cookingProducts/oilProducts/oilProduct_29.jpeg'
import oilProduct_3 from '../../../images/cookingProducts/oilProducts/oilProduct_3.jpeg'
import oilProduct_30 from '../../../images/cookingProducts/oilProducts/oilProduct_30.jpeg'
import oilProduct_31 from '../../../images/cookingProducts/oilProducts/oilProduct_31.jpeg'
import oilProduct_32 from '../../../images/cookingProducts/oilProducts/oilProduct_32.jpeg'
import oilProduct_4 from '../../../images/cookingProducts/oilProducts/oilProduct_4.jpeg'
import oilProduct_5 from '../../../images/cookingProducts/oilProducts/oilProduct_5.jpeg'
import oilProduct_6 from '../../../images/cookingProducts/oilProducts/oilProduct_6.jpeg'
import oilProduct_7 from '../../../images/cookingProducts/oilProducts/oilProduct_7.jpeg'
import oilProduct_8 from '../../../images/cookingProducts/oilProducts/oilProduct_8.jpeg'
import oilProduct_9 from '../../../images/cookingProducts/oilProducts/oilProduct_9.jpeg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function OilProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_1}
                        productName="Teer Soyabean Oil (Poly)"
                        productDesc='1 Itr'
                        productPrice='162'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_2}
                        productName="Teer Soyabean Oil"
                        productDesc='2 Itr'
                        productPrice='328'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_3}
                        productName="Radhuni Pure Mustard Oil"
                        productDesc='1 Itr'
                        productPrice='290'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_4}
                        productName="Pusti Soyabean Oil"
                        productDesc='5 Itr'
                        productPrice='785'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_5}
                        productName='Radhuni Pure Mustard Oil'
                        productDesc='500 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_6}
                        productName='Fresh SOyabean Oil (Poly)'
                        productDesc='1 Itr'
                        productPrice='166'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_7}
                        productName='Fresh Soyabean Oil'
                        productDesc='5 Itr'
                        productPrice='785'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_8}
                        productName='Fresh Soyabean Oil'
                        productDesc='2 Itr'
                        productPrice='328'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_9}
                        productName='Teer Soyabean Oil'
                        productDesc='5 Itr'
                        productPrice='800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_10}
                        productName="Rupchanda Soyabean Oil (Poly)"
                        productDesc='1 Itr'
                        productPrice='163'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_11}
                        productName='Rupchanda Soyabean Oil'
                        productDesc='5 Itr'
                        productPrice='800'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_12}
                        productName="Rupchanda Soyabean Oil"
                        productDesc='2 Itr'
                        productPrice='335'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_13}
                        productName='Fortune Fortified Rice Bran Oi...'
                        productDesc='2 Itr'
                        productPrice='355'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_14}
                        productName='Fortune Fortified Rice Bran Oi...'
                        productDesc='5 Itr'
                        productPrice='875'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_15}
                        productName='ACI Nutrilife Rice Bran Oil'
                        productDesc='5 Itr'
                        productPrice='895'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_16}
                        productName='Oro De Canava Extra Virgin Oil...'
                        productDesc='1 Itr'
                        productPrice='1250'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_17}
                        productName='Oro De Canava Extra Virgin Oil...'
                        productDesc='250 ml'
                        productPrice='375'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_18}
                        productName="Oro De Canava Extra Virgin Oil..."
                        productDesc='500 ml'
                        productPrice='675'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_19}
                        productName='Veola Soyabean Oil'
                        productDesc='500 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_20}
                        productName="Rupchanda Soyabean Oil"
                        productDesc='3 Itr'
                        productPrice='501'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_21}
                        productName="Rupchanda Soyabean Oil"
                        productDesc='8 Itr'
                        productPrice='1330'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_22}
                        productName="Bashundhara Fortified Soyabean..."
                        productDesc='5 Itr'
                        productPrice='760'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_23}
                        productName="Veola Soyabean Oil"
                        productDesc='1 Itr'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_24}
                        productName="Bashundhara Fortified Soyabean"
                        productDesc='1 Itr'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_25}
                        productName="Pran Mustard Oil"
                        productDesc='100 ml'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_26}
                        productName="Pran Mustard Oil"
                        productDesc='250 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_27}
                        productName="Pran Mustard Oil"
                        productDesc='200 ml'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_28}
                        productName="Fresh Mustard Oil"
                        productDesc='100 ml'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_29}
                        productName="Sajeeb Mustard Oil"
                        productDesc='500 ml'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_30}
                        productName="Teer Mustard Oil"
                        productDesc='500 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_31}
                        productName="Meizan Fortified Palm Olein (..."
                        productDesc='1 Itr'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oilProduct_32}
                        productName="Meizan Fortified Palm Olein (P..."
                        productDesc='1 Itr'
                        productPrice='100'
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
