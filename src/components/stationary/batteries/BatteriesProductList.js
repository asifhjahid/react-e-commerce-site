import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import batteryProduct_1 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_1.jpg'
import batteryProduct_10 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_10.jpg'
import batteryProduct_11 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_11.jpg'
import batteryProduct_12 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_12.jpg'
import batteryProduct_13 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_13.jpg'
import batteryProduct_14 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_14.jpg'
import batteryProduct_15 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_15.jpg'
import batteryProduct_16 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_16.jpg'
import batteryProduct_17 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_17.jpg'
import batteryProduct_18 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_18.jpg'
import batteryProduct_2 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_2.jpg'
import batteryProduct_3 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_3.jpg'
import batteryProduct_4 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_4.jpg'
import batteryProduct_5 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_5.jpg'
import batteryProduct_6 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_6.jpg'
import batteryProduct_7 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_7.jpg'
import batteryProduct_8 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_8.jpg'
import batteryProduct_9 from '../../../images/stationaryProducts/batterieProducts/batteryProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function BatteryProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_1}
                        productName="Energizer Max 1.5V AA Battery"
                        productDesc='2 pcs'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_2}
                        productName="Energizer Max 1.5V AA Battery"
                        productDesc='2 pcs'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_3}
                        productName="Energizer Recharge Power Plus..."
                        productDesc='2 pcs'
                        productPrice='675'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_4}
                        productName="Maxell Super Power Battery AAA"
                        productDesc='2 pcs'
                        productPrice='49'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_5}
                        productName="Maxell Lithium Battery (CR2032..."
                        productDesc='each'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_6}
                        productName='Maxell Alkaline LR44 (A76) Bat...'
                        productDesc='2 pcs'
                        productPrice='79'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_7}
                        productName='Maxell Alkaline LR06 (GD)4B AA...'
                        productDesc='4 pcs'
                        productPrice='179'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_8}
                        productName='Maxell Alkaline Battery AAA'
                        productDesc='2 pcs'
                        productPrice='159'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_9}
                        productName='Olympic Heavy Duty AA Battery'
                        productDesc='2 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_10}
                        productName='Olympic AAA Battery'
                        productDesc='2 pcs'
                        productPrice='24'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_11}
                        productName='Sony New Ultra AAA Battery'
                        productDesc='2 pcs'
                        productPrice='89'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_12}
                        productName='Sunlite Extra Heavy Duty AA Ba...'
                        productDesc='2 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_13}
                        productName='Sunlite Heavy Duty AA Battery'
                        productDesc='2 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_14}
                        productName='Sunlite Heavy Duty AAA Battery'
                        productDesc='2 pcs'
                        productPrice='24'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_15}
                        productName='Toshiba Heavy Duty Battery AA'
                        productDesc='4 pcs'
                        productPrice='279'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_16}
                        productName='Olympic Metallic Volt Pencil B...'
                        productDesc='2 pcs'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_17}
                        productName='Energizer Max AA (3+1)'
                        productDesc='4 pcs'
                        productPrice='260'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={batteryProduct_18}
                        productName='Deli Office Pins 0023 24 mm'
                        productDesc='50 gm'
                        productPrice='50'
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
