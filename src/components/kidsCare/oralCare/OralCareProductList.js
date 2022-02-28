import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import oralCareProduct_1 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_1.jpg'
import oralCareProduct_10 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_10.jpg'
import oralCareProduct_11 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_11.jpg'
import oralCareProduct_12 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_12.jpg'
import oralCareProduct_13 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_13.jpg'
import oralCareProduct_14 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_14.jpg'
import oralCareProduct_15 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_15.jpg'
import oralCareProduct_16 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_16.jpg'
import oralCareProduct_17 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_17.jpg'
import oralCareProduct_18 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_18.jpg'
import oralCareProduct_19 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_19.jpg'
import oralCareProduct_2 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_2.jpg'
import oralCareProduct_20 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_20.jpg'
import oralCareProduct_21 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_21.jpg'
import oralCareProduct_22 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_22.jpg'
import oralCareProduct_23 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_23.jpg'
import oralCareProduct_24 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_24.jpg'
import oralCareProduct_25 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_25.jpg'
import oralCareProduct_26 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_26.jpg'
import oralCareProduct_27 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_27.jpg'
import oralCareProduct_28 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_28.jpg'
import oralCareProduct_29 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_29.jpg'
import oralCareProduct_3 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_3.jpg'
import oralCareProduct_30 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_30.jpg'
import oralCareProduct_31 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_31.jpg'
import oralCareProduct_32 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_32.jpg'
import oralCareProduct_33 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_33.jpg'
import oralCareProduct_34 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_34.jpg'
import oralCareProduct_35 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_35.jpg'
import oralCareProduct_36 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_36.jpg'
import oralCareProduct_37 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_37.jpg'
import oralCareProduct_38 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_38.jpg'
import oralCareProduct_39 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_39.jpg'
import oralCareProduct_4 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_4.jpg'
import oralCareProduct_40 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_40.jpg'
import oralCareProduct_5 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_5.jpg'
import oralCareProduct_6 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_6.jpg'
import oralCareProduct_7 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_7.jpg'
import oralCareProduct_8 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_8.jpg'
import oralCareProduct_9 from '../../../images/kidsCareProducts/oralCareProducts/oralProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function OralCareProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_1}
                        productName="Closeup Toothpaste White Attra..."
                        productDesc='140 gm'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_2}
                        productName="Closeup Toothpaste Menthol Fre..."
                        productDesc='100 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_3}
                        productName="ProDental Attitude Toothbrush"
                        productDesc='each'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_4}
                        productName="Closeup Anti Bacterial Nature..."
                        productDesc='300 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_5}
                        productName="Closeup Toothpaste Fresh Freez..."
                        productDesc='145 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_6}
                        productName='Colgate Anticavity Active Salt...'
                        productDesc='200 gm'
                        productPrice='160'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_7}
                        productName='Colgate Strong Teeth Toothpast...'
                        productDesc='200 gm'
                        productPrice='140'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_8}
                        productName='Colgate Plax Mixed Fruit Mouth...'
                        productDesc='500 ml'
                        productPrice='599'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_9}
                        productName="Colgate Plax Peppermint Mouth..."
                        productDesc='500 ml'
                        productPrice='509'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_10}
                        productName="Colgate Visible White Toothpas..."
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
                        productImage={oralCareProduct_11}
                        productName='Pepsodent Toothpaste Germi Che...'
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
                        productImage={oralCareProduct_12}
                        productName="Listerine Cool Mint Mouth Wash..."
                        productDesc='250 ml'
                        productPrice='399'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_13}
                        productName='Oral-B Gum Protect Soft Toothb...'
                        productDesc='each'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_14}
                        productName='Pepsodent Sensitive Expert Pro...'
                        productDesc='80 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_15}
                        productName='Pepsodent Tooth Powder'
                        productDesc='50 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_16}
                        productName='Pepsodent Toothbrush Gum Care...'
                        productDesc='each'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_17}
                        productName='Sensodyne Rapid Relief Toothpa...'
                        productDesc='40 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_18}
                        productName="Sensodyne Fresh Mint Toothpast..."
                        productDesc='75 gm'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_19}
                        productName="Toothpick Local 1 Box "
                        productDesc='1 box'
                        productPrice='39'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_20}
                        productName="Pepsodent Toothpaste Germi Che..."
                        productDesc='45 gm'
                        productPrice='40'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_21}
                        productName="Mediplus DS Toothpaste"
                        productDesc='40 gm'
                        productPrice='48'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_22}
                        productName="Mediplus DS Toothpaste"
                        productDesc='140 gm'
                        productPrice='180'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_23}
                        productName="Mediplus DS Toothpaste"
                        productDesc='90 gm'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_24}
                        productName="Mediplus Toothpaste"
                        productDesc='70 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_25}
                        productName="Mediplus Fluoride Gel Toothpas..."
                        productDesc='100 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_26}
                        productName="Closeup Toothpaste Menthol Fre..."
                        productDesc='160 gm'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_27}
                        productName="Closeup Toothpaste Menthol Fre..."
                        productDesc='45 gm'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_28}
                        productName="Pepsodent Germy Check"
                        productDesc='100 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_29}
                        productName="Dabur Meswak Toothpaste"
                        productDesc='200 gm'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_30}
                        productName="kodomo Strawberry Baby Tooth P..."
                        productDesc='80 gm'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_31}
                        productName="Colgate Herbal Toothpaste"
                        productDesc='200 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_32}
                        productName="ACI Colgate Max Fresh Red Gel..."
                        productDesc='70 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_33}
                        productName="Colgate Active Salt Toothpaste"
                        productDesc='100 gm'
                        productPrice='85'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_34}
                        productName="Colgate Strong Teeth With Cavi..."
                        productDesc='100 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_35}
                        productName="Aquafresh Triple Protection 12..."
                        productDesc='125 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_36}
                        productName="Pepsodent Sensitive Expert Too..."
                        productDesc='140 gm'
                        productPrice='135'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_37}
                        productName="Sensodyne Toothpaste (Fresh Ge..."
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
                        productImage={oralCareProduct_38}
                        productName="Dr. West Tooth Brush Medium"
                        productDesc='each'
                        productPrice='120'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_39}
                        productName="ProDentalB Venus Toothbrush (F..."
                        productDesc='each'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={oralCareProduct_40}
                        productName="Mediplus Medical Care Toothbru..."
                        productDesc='each'
                        productPrice='80'
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
