import React, { useContext } from 'react';
import cartContext from '../context/cartContext';
import hygieneProduct_1 from '../images/hygieneProducts/hygieneProduct_1.webp';
import hygieneProduct_10 from '../images/hygieneProducts/hygieneProduct_10.jpeg';
import hygieneProduct_11 from '../images/hygieneProducts/hygieneProduct_11.jpg';
import hygieneProduct_12 from '../images/hygieneProducts/hygieneProduct_12.jpg';
import hygieneProduct_13 from '../images/hygieneProducts/hygieneProduct_13.jpg';
import hygieneProduct_14 from '../images/hygieneProducts/hygieneProduct_14.webp';
import hygieneProduct_15 from '../images/hygieneProducts/hygieneProduct_15.jpg';
import hygieneProduct_16 from '../images/hygieneProducts/hygieneProduct_16.jpg';
import hygieneProduct_17 from '../images/hygieneProducts/hygieneProduct_17.jpg';
import hygieneProduct_18 from '../images/hygieneProducts/hygieneProduct_18.jpg';
import hygieneProduct_19 from '../images/hygieneProducts/hygieneProduct_19.jpeg';
import hygieneProduct_2 from '../images/hygieneProducts/hygieneProduct_2.jpg';
import hygieneProduct_20 from '../images/hygieneProducts/hygieneProduct_20.webp';
import hygieneProduct_21 from '../images/hygieneProducts/hygieneProduct_21.jpeg';
import hygieneProduct_22 from '../images/hygieneProducts/hygieneProduct_22.jpeg';
import hygieneProduct_23 from '../images/hygieneProducts/hygieneProduct_23.jpeg';
import hygieneProduct_24 from '../images/hygieneProducts/hygieneProduct_24.jpeg';
import hygieneProduct_25 from '../images/hygieneProducts/hygieneProduct_25.jpeg';
import hygieneProduct_26 from '../images/hygieneProducts/hygieneProduct_26.jpeg';
import hygieneProduct_27 from '../images/hygieneProducts/hygieneProduct_27.jpeg';
import hygieneProduct_28 from '../images/hygieneProducts/hygieneProduct_28.jpeg';
import hygieneProduct_29 from '../images/hygieneProducts/hygieneProduct_29.jpeg';
import hygieneProduct_3 from '../images/hygieneProducts/hygieneProduct_3.webp';
import hygieneProduct_30 from '../images/hygieneProducts/hygieneProduct_30.jpeg';
import hygieneProduct_31 from '../images/hygieneProducts/hygieneProduct_31.jpeg';
import hygieneProduct_32 from '../images/hygieneProducts/hygieneProduct_32.jpeg';
import hygieneProduct_33 from '../images/hygieneProducts/hygieneProduct_33.jpeg';
import hygieneProduct_34 from '../images/hygieneProducts/hygieneProduct_34.jpeg';
import hygieneProduct_35 from '../images/hygieneProducts/hygieneProduct_35.jpeg';
import hygieneProduct_36 from '../images/hygieneProducts/hygieneProduct_36.jpeg';
import hygieneProduct_37 from '../images/hygieneProducts/hygieneProduct_37.jpeg';
import hygieneProduct_38 from '../images/hygieneProducts/hygieneProduct_38.png';
import hygieneProduct_39 from '../images/hygieneProducts/hygieneProduct_39.png';
import hygieneProduct_4 from '../images/hygieneProducts/hygieneProduct_4.jpeg';
import hygieneProduct_40 from '../images/hygieneProducts/hygieneProduct_40.jpeg';
import hygieneProduct_41 from '../images/hygieneProducts/hygieneProduct_41.jpeg';
import hygieneProduct_42 from '../images/hygieneProducts/hygieneProduct_42.jpeg';
import hygieneProduct_43 from '../images/hygieneProducts/hygieneProduct_43.png';
import hygieneProduct_44 from '../images/hygieneProducts/hygieneProduct_44.jpeg';
import hygieneProduct_45 from '../images/hygieneProducts/hygieneProduct_45.jpeg';
import hygieneProduct_46 from '../images/hygieneProducts/hygieneProduct_46.jpeg';
import hygieneProduct_47 from '../images/hygieneProducts/hygieneProduct_47.jpeg';
import hygieneProduct_5 from '../images/hygieneProducts/hygieneProduct_5.webp';
import hygieneProduct_6 from '../images/hygieneProducts/hygieneProduct_6.jpg';
import hygieneProduct_7 from '../images/hygieneProducts/hygieneProduct_7.jpeg';
import hygieneProduct_8 from '../images/hygieneProducts/hygieneProduct_8.jpeg';
import hygieneProduct_9 from '../images/hygieneProducts/hygieneProduct_9.jpg';
import HygieneProductListStyle from '../styles/RegularProductList.styles';
import AddToButton from './AddToButton';
import Product from './Product';
import ProductDelivery from './ProductDelivery';
import ProductDetailsButton from './ProductDetailsButton';



export default function HygieneProductList() {
    const cartBtn = useContext(cartContext);
  return(

   <HygieneProductListStyle>
         <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_1}
                        productName='Hexisol Hand Rub'
                        productDesc='250 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_2}
                        productName='ACI Savlon Liquid Antiseptic'
                        productDesc='500 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_3}
                        productName='ACI Savlon Ocean Blue Antiseptic Handwa...'
                        productDesc='200 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_4}
                        productName='ACI Savlon Liquid Antiseptic'
                        productDesc='112 ml'
                        productPrice='44'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_5}
                        productName='Alcohol Pad'
                        productDesc='100 pcs'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_6}
                        productName='Mediker SafeLife Veggie Wash'
                        productDesc='250 ml'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_7}
                        productName='Dettol Antiseptic Disinfectant Liquid(...'
                        productDesc='500 ml'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_8}
                        productName='Dettol Antiseptic Disinfectant Liquid(...'
                        productDesc='50 ml'
                        productPrice='38'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_9}
                        productName='Dettol Anti Bacterial Wet wipes'
                        productDesc='10 pcs'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_10}
                        productName='Sepnil Hand Sanitizer'
                        productDesc='40 ml'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_11}
                        productName='Colgate Plax Peppermint Mouth Wash'
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
                        productImage={hygieneProduct_12}
                        productName='Colgate Plax Mixed Fruit Mouth Wash'
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
                        productImage={hygieneProduct_13}
                        productName='Seba Vegetable washing Liquid'
                        productDesc='125 ml'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_14}
                        productName='Dettol handwash liquid soap pump'
                        productDesc='200 ml'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_15}
                        productName='Sepnil Extra Mild Hand wash Marigold'
                        productDesc='200 ml'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_16}
                        productName='Savlon Disinfectant Spray'
                        productDesc='125 ml'
                        productPrice='170'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_17}
                        productName='Lifebuoy Handwash Total Pump'
                        productDesc='200 ml'
                        productPrice='95'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_18}
                        productName='ACI Savlon Ocean Blue Handwash'
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
                        productImage={hygieneProduct_19}
                        productName='Sepnil Hand Sanitizer'
                        productDesc='200 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_20}
                        productName='ACI Savlon Antiseptic'
                        productDesc='5 Itr'
                        productPrice='712'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_21}
                        productName='Sepnil Extra Mild Hand Wash Marigold Re..'
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
                        productImage={hygieneProduct_22}
                        productName='Sepnil Extra Mild Tea Oil Handwash Refi...'
                        productDesc='180 ml'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_23}
                        productName='Lifebuoy Handwash Refill Mild Care'
                        productDesc='170 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_24}
                        productName='Lifebuoy lemon germ protection handwash...'
                        productDesc='170 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_25}
                        productName='Lifebuoy Handwash Total Refill'
                        productDesc='170 ml'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_26}
                        productName='Finis Phenyle Perfumed'
                        productDesc='950 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_27}
                        productName='Organikare Safe Plus Hand Sanitizer Spr...'
                        productDesc='100 ml'
                        productPrice='130'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_28}
                        productName='Mr. Safe Hand Sanitizing Rub Flip Type B...'
                        productDesc='100 ml'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                         <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_29}
                        productName='Mizuoh Disinfectant Spray(Alcohol Free...'
                        productDesc='450 ml'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_30}
                        productName='Mizuoh Disinfectant Spray(Alcohol Free...'
                        productDesc='100 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_31}
                        productName='Savlon Surface Disinfectant Spray Sanit...'
                        productDesc='300 ml'
                        productPrice='350'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_32}
                        productName='Mediker SafeLife Handwash Refill'
                        productDesc='170 ml'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_33}
                        productName='Mediker SafeLife Hand wash Pump'
                        productDesc='200 ml'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_34}
                        productName='Dettol Handwash Aloe Vera Liquid Soap R...'
                        productDesc='170 ml'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_35}
                        productName='Dettol Handwash Aloe Vera Liquid Soap P...'
                        productDesc='200 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_36}
                        productName='Dettol Handwash Gold Liquid Soap Refill...'
                        productDesc='170 ml'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_37}
                        productName='Savlon Active Hand Wash'
                        productDesc='170 ml'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_38}
                        productName='Savlon Handwash Refill Pack Active'
                        productDesc='200 ml'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_39}
                        productName='Savlon Hand Wash Marigold'
                        productDesc='500 ml'
                        productPrice='200'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_40}
                        productName='Savlon Hand Wash Aloe Vera'
                        productDesc='170 ml'
                        productPrice='45'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_41}
                        productName='Savlon Hand Wash Aloe Vera'
                        productDesc='250 ml'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_42}
                        productName='Savlon Antiseptic Handwash Aloe Vera'
                        productDesc='300 ml'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_43}
                        productName='ACI Savlon Ocean Blue Handwash'
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
                        productImage={hygieneProduct_44}
                        productName='Savlon Hand Wash Ocean Blue'
                        productDesc='250 ml'
                        productPrice='90'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_45}
                        productName='Dettol Antiseptic Disinfectant Liquid'
                        productDesc='500 ml'
                        productPrice='165'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_46}
                        productName='Savlon Antiseptic Liquid'
                        productDesc='500 ml'
                        productPrice='125'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={hygieneProduct_47}
                        productName='ACI Savlon Anticeptic Liquid'
                        productDesc='112 ml'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                    
                    </div>
              
            </div>
       
  </HygieneProductListStyle>
  );
}
