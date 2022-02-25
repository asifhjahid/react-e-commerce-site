import React from 'react'
import { Link } from 'react-router-dom'
import meatAndFishImage_1 from '../../images/meatAndFishProducts/meatAndFishProduct_1.png'
import meatAndFishImage_2 from '../../images/meatAndFishProducts/meatAndFishProduct_2.png'
import meatAndFishImage_3 from '../../images/meatAndFishProducts/meatAndFishProduct_3.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function meatAndFishProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/meat'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={meatAndFishImage_1}
                    categoryName='Meat'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/fish'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={meatAndFishImage_2}
                    categoryName='Fish'
                    />
                    </div>
                    </Link>

                    <Link to='/oil'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={meatAndFishImage_3}
                    categoryName='Dried Fish'
                    />
                    </div>
                    </Link>                   

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
