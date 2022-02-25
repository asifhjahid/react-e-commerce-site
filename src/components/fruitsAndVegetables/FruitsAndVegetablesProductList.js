import React from 'react'
import { Link } from 'react-router-dom'
import fruitsAndVegetablesImage_1 from '../../images/fruitsAndVegetablesProducts/fruitsAndVegetablesProduct_1.png'
import fruitsAndVegetablesImage_2 from '../../images/fruitsAndVegetablesProducts/fruitsAndVegetablesProduct_2.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function fruitsAndVegetablesProductProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/meat'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={fruitsAndVegetablesImage_1}
                    categoryName='Vegetables'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/fish'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={fruitsAndVegetablesImage_2}
                    categoryName='Fruits'
                    />
                    </div>
                    </Link>                   

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
