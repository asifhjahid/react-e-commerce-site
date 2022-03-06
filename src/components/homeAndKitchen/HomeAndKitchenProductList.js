import React from 'react'
import { Link } from 'react-router-dom'
import homeAndKitchenImage_1 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_1.png'
import homeAndKitchenImage_10 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_10.png'
import homeAndKitchenImage_11 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_11.png'
import homeAndKitchenImage_12 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_12.png'
import homeAndKitchenImage_2 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_2.png'
import homeAndKitchenImage_3 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_3.png'
import homeAndKitchenImage_4 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_4.png'
import homeAndKitchenImage_5 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_5.png'
import homeAndKitchenImage_6 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_6.png'
import homeAndKitchenImage_7 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_7.png'
import homeAndKitchenImage_8 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_8.png'
import homeAndKitchenImage_9 from '../../images/homeAndKitchenProducts/homeAndKitchenProduct_9.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function HomeAndKitchenProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/dish-detergent' style={{textDecoration:"none"}}>
                    <div> 
                    <CategoryItem 
                    categoryImage={homeAndKitchenImage_1}
                    categoryName='Dish Detergent'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/laundry'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_2}
                    categoryName='Laundry'
                    />
                    </div>
                    </Link>

                     <Link to='/home-cleaner'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_3}
                    categoryName='Home Cleaner'
                    />
                    </div>
                    </Link> 

                     <Link to='/toilet-hygiene'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_4}
                    categoryName='Toilet Hygiene'
                    />
                    </div>
                    </Link> 

                     <Link to='/air-fresheners'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_5}
                    categoryName='Air Fresheners'
                    />
                    </div>
                    </Link> 

                     <Link to='/pest-control'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_6}
                    categoryName='Pest Control'
                    />
                    </div>
                    </Link>

                     <Link to='/napkins-tissue'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_7}
                    categoryName='Napkins &amp; Tissue'
                    />
                    </div>
                    </Link>  

                    <Link to='/kitchenware'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_8}
                    categoryName='Kitchenware'
                    />
                    </div>
                    </Link> 

                    <Link to='/food-storage'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_9}
                    categoryName='Food Storage'
                    />
                    </div>
                    </Link> 

                    <Link to='/Lights-electricals'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_10}
                    categoryName='Lights &amp; Electricals'
                    />
                    </div>
                    </Link> 

                    <Link to='/other tools'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_11}
                    categoryName='Other Tools'
                    />
                    </div>
                    </Link> 

                    <Link to='/oral-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={homeAndKitchenImage_12}
                    categoryName='Oral Care'
                    />
                    </div>
                    </Link> 



                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
