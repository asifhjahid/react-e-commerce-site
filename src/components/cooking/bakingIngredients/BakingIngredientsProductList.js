import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import bakingIngredientsProduct_1 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_1.jpg'
import bakingIngredientsProduct_10 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_10.jpg'
import bakingIngredientsProduct_11 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_11.jpg'
import bakingIngredientsProduct_12 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_12.jpg'
import bakingIngredientsProduct_13 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_13.jpg'
import bakingIngredientsProduct_14 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_14.jpg'
import bakingIngredientsProduct_15 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_15.jpg'
import bakingIngredientsProduct_16 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_16.jpg'
import bakingIngredientsProduct_17 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_17.jpg'
import bakingIngredientsProduct_18 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_18.jpg'
import bakingIngredientsProduct_19 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_19.jpg'
import bakingIngredientsProduct_2 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_2.jpg'
import bakingIngredientsProduct_20 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_20.jpg'
import bakingIngredientsProduct_21 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_21.jpg'
import bakingIngredientsProduct_22 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_22.jpg'
import bakingIngredientsProduct_23 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_23.jpg'
import bakingIngredientsProduct_24 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_24.jpg'
import bakingIngredientsProduct_25 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_25.jpg'
import bakingIngredientsProduct_26 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_26.jpg'
import bakingIngredientsProduct_27 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_27.jpg'
import bakingIngredientsProduct_28 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_28.jpg'
import bakingIngredientsProduct_29 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_29.jpg'
import bakingIngredientsProduct_3 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_3.jpg'
import bakingIngredientsProduct_30 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_30.jpg'
import bakingIngredientsProduct_31 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_31.jpg'
import bakingIngredientsProduct_32 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_32.jpg'
import bakingIngredientsProduct_33 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_33.jpg'
import bakingIngredientsProduct_34 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_34.jpg'
import bakingIngredientsProduct_35 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_35.jpg'
import bakingIngredientsProduct_36 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_36.jpg'
import bakingIngredientsProduct_37 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_37.jpg'
import bakingIngredientsProduct_38 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_38.jpg'
import bakingIngredientsProduct_39 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_39.jpg'
import bakingIngredientsProduct_4 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_4.jpg'
import bakingIngredientsProduct_40 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_40.jpg'
import bakingIngredientsProduct_5 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_5.jpg'
import bakingIngredientsProduct_6 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_6.jpg'
import bakingIngredientsProduct_7 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_7.jpg'
import bakingIngredientsProduct_8 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_8.jpg'
import bakingIngredientsProduct_9 from '../../../images/cookingProducts/bakingIngredientsProducts/bakingIngredientsProduct_9.jpg'
import RegularProductListStyle from '../../../styles/RegularProductList.styles'
import AddToButton from '../../AddToButton'
import Product from '../../Product'
import ProductDelivery from '../../ProductDelivery'
import ProductDetailsButton from '../../ProductDetailsButton'


export default function BakingIngredientsProductList() {
    const cartBtn = useContext(cartContext);
    return (
        <RegularProductListStyle>
            <div className="productListArea"> 
                      <div className="productCart">
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_1}
                        productName="Sis Caster Sugar 800 gm"
                        productDesc='800 gm'
                        productPrice='300'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                       
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_2}
                        productName="Ahmed Icing Sugar"
                        productDesc='250 gm'
                        productPrice='75'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_3}
                        productName="Anchor Baking Soda"
                        productDesc='50 gm'
                        productPrice='30'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>
                        
                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_4}
                        productName="Anchor Citric Acid"
                        productDesc='40 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_5}
                        productName='Anchor Cocoa Powder'
                        productDesc='100 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_6}
                        productName='Anchor Custard Powder Vanilla'
                        productDesc='200 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_7}
                        productName='Anchor Oregano Pizza'
                        productDesc='10 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_8}
                        productName='Sis Raw Sugar Cubes 454 gm'
                        productDesc='454 gm'
                        productPrice='279'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_9}
                        productName="Rayner's Blue Food Colour 28 m..."
                        productDesc='28 ml'
                        productPrice='69'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_10}
                        productName="Rayner's Green Food Colour 28..."
                        productDesc='28 ml'
                        productPrice='59'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_11}
                        productName="Rayner's Banana Flavouring Ess"
                        productDesc='28 ml'
                        productPrice='59'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_12}
                        productName="Rayner's Orange Food Colour 28..."
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
                        productImage={bakingIngredientsProduct_13}
                        productName="Rayner's Red Food Colour 28 ml"
                        productDesc='28 ml'
                        productPrice='69'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_14}
                        productName='Cake Decoration 100 gm'
                        productDesc='100 gm'
                        productPrice='149'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_15}
                        productName='Sis White Sugar 2 kg'
                        productDesc='2 kg'
                        productPrice='349'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_16}
                        productName='Anchor Icing Sugar'
                        productDesc='250 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_17}
                        productName='Bake King Gelatine Powder 60 g...'
                        productDesc='60 gm'
                        productPrice='369'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_18}
                        productName="Bake King Vanilla Powder 18 gm"
                        productDesc='18 gm'
                        productPrice='349'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_19}
                        productName='Anchor Yeast 35 gm'
                        productDesc='anchor Yeast 35 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_20}
                        productName="Saad Yeast 50 gm"
                        productDesc='50 gm'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_21}
                        productName="Sis White Sugar Cube 454 gm"
                        productDesc='454'
                        productPrice='249'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_22}
                        productName="Foster Clark's Baking Powder 4..."
                        productDesc='450 gm'
                        productPrice='280'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_23}
                        productName="Foster Clark's Culinary Essenc..."
                        productDesc='28 ml'
                        productPrice='65'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_24}
                        productName="Haiko coco Powder 100 gm"
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
                        productImage={bakingIngredientsProduct_25}
                        productName="Haiko Baking Powder"
                        productDesc='160 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_26}
                        productName="Hershey's Strawberry Syrup"
                        productDesc='623'
                        productPrice='529'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_27}
                        productName="Sweet Ball Golden"
                        productDesc='150 gm'
                        productPrice='399'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_28}
                        productName="Yeast Glass bottle"
                        productDesc='50 gm'
                        productPrice='60'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_29}
                        productName="Haiko Yeast"
                        productDesc='10 gm'
                        productPrice='25'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_30}
                        productName="Uncle Barns Icing Sugar"
                        productDesc='1 kg'
                        productPrice='275'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_31}
                        productName="Foster Clark's Cutard Powder..."
                        productDesc='200 gm'
                        productPrice='110'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>


                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_32}
                        productName="Agar Powder"
                        productDesc='10 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_33}
                        productName="China Grass"
                        productDesc='50 gm'
                        productPrice='150'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_34}
                        productName="Green Food China Grass"
                        productDesc='10 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_35}
                        productName="Haiko China Grass"
                        productDesc='10 gm'
                        productPrice='50'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_36}
                        productName="Sowan Mixed Herbs"
                        productDesc='10 gm'
                        productPrice='100'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_37}
                        productName="Haiko Oregano Fizza"
                        productDesc='10 gm'
                        productPrice='70'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_38}
                        productName="Green Food Nutmeg Powser"
                        productDesc='25 gm'
                        productPrice='80'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_39}
                        productName="Black Pepper (Gol Morich ) Powd..."
                        productDesc='30'
                        productPrice='55'
                        />
                        <ProductDetailsButton />
                        <ProductDelivery />
                        <AddToButton cartBtn={cartBtn} />
                        </div>

                        <div className='regularProduct'>
                        <Product 
                        productType='Regular'
                        productImage={bakingIngredientsProduct_40}
                        productName="White Pepper Powder"
                        productDesc='50 gm'
                        productPrice='120'
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
