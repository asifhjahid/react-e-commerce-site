import React from 'react'
import { Link } from 'react-router-dom'
import frozenAndCannedImage_1 from '../../images/frozenAndCannedProducts/frozenAndCannedProduct_1.png'
import frozenAndCannedImage_2 from '../../images/frozenAndCannedProducts/frozenAndCannedProduct_2.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function FrozenAndCannedProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/frozen'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={frozenAndCannedImage_1}
                    categoryName='Frozen'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={frozenAndCannedImage_2}
                    categoryName='Canned'
                    />
                    </div>
                    </Link>                   

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
