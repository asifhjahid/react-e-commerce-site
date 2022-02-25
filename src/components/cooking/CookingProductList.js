import React from 'react'
import { Link } from 'react-router-dom'
import cookingImage_1 from '../../images/cookingProducts/cookingProduct_1.png'
import cookingImage_10 from '../../images/cookingProducts/cookingProduct_10.png'
import cookingImage_11 from '../../images/cookingProducts/cookingProduct_11.png'
import cookingImage_12 from '../../images/cookingProducts/cookingProduct_12.png'
import cookingImage_13 from '../../images/cookingProducts/cookingProduct_13.png'
import cookingImage_14 from '../../images/cookingProducts/cookingProduct_14.png'
import cookingImage_15 from '../../images/cookingProducts/cookingProduct_15.png'
import cookingImage_16 from '../../images/cookingProducts/cookingProduct_16.png'
import cookingImage_17 from '../../images/cookingProducts/cookingProduct_17.png'
import cookingImage_18 from '../../images/cookingProducts/cookingProduct_18.png'
import cookingImage_19 from '../../images/cookingProducts/cookingProduct_19.png'
import cookingImage_2 from '../../images/cookingProducts/cookingProduct_2.png'
import cookingImage_20 from '../../images/cookingProducts/cookingProduct_20.png'
import cookingImage_21 from '../../images/cookingProducts/cookingProduct_21.png'
import cookingImage_22 from '../../images/cookingProducts/cookingProduct_22.png'
import cookingImage_3 from '../../images/cookingProducts/cookingProduct_3.png'
import cookingImage_4 from '../../images/cookingProducts/cookingProduct_4.png'
import cookingImage_5 from '../../images/cookingProducts/cookingProduct_5.png'
import cookingImage_6 from '../../images/cookingProducts/cookingProduct_6.png'
import cookingImage_7 from '../../images/cookingProducts/cookingProduct_7.png'
import cookingImage_8 from '../../images/cookingProducts/cookingProduct_8.png'
import cookingImage_9 from '../../images/cookingProducts/cookingProduct_9.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function CookingProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/rice'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={cookingImage_1}
                    categoryName='Rice'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/dal'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_2}
                    categoryName='Dal'
                    />
                    </div>
                    </Link>

                    <Link to='/oil'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_3}
                    categoryName='Oil'
                    />
                    </div>
                    </Link>


                    <Link to='/flour'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_4}
                    categoryName='Flour'
                    />
                    </div>
                    </Link>

                    <Link to='/shemai-suji'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_5}
                    categoryName='Shemai &amp; Suji'
                    />
                    </div>
                    </Link>

                    <Link to='/salt-sugar'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_6}
                    categoryName='Salt &amp; Sugar'
                    />
                    </div>
                    </Link>


                    <Link to='/salad-dressing'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_7}
                    categoryName='Salad Dressing'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/baking-ingredients'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_8}
                    categoryName='Baking Ingredients'
                    />
                    </div>
                    </Link>

                    <Link to='/noodles'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_9}
                    categoryName='Noodles'
                    />
                    </div>
                    </Link>

                    <Link to='/sauces'  style={{textDecoration:"none"}}>
                     <div>
                     <CategoryItem 
                    categoryImage={cookingImage_10}
                    categoryName='Sauces'
                    />
                    </div>
                    </Link>

                    <Link to='/spices'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_11}
                    categoryName='Spices'
                    />
                    </div>
                    </Link>


                    <Link to='/ready-mix'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_12}
                    categoryName='Ready mix'
                    />
                    </div>
                    </Link>

                    <Link to='/butter'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_13}
                    categoryName='Butter'
                    />
                    </div>
                    </Link>

                    <Link to='/cheese'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_14}
                    categoryName='Cheese'
                    />
                    </div>
                    </Link>


                    <Link to='/eggs'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_15}
                    categoryName='Eggs'
                    />
                    </div>
                    </Link>

                    <Link to='/liquid-milk'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_16}
                    categoryName='Liquid Milk'
                    />
                    </div>
                    </Link> 

                    <Link to='/powder-milk-creamer'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_17}
                    categoryName='Powder Milk &amp; Creamer'
                    />
                    </div>
                    </Link>

                    <Link to='/yogurt'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_18}
                    categoryName='Yogurt'
                    />
                    </div>
                    </Link>

                    <Link to='/honey'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_19}
                    categoryName='Honey'
                    />
                    </div>
                    </Link>

                    <Link to='/pickles'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_20}
                    categoryName='Pickles'
                    />
                    </div>
                    </Link>

                    <Link to='/nuts'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_21}
                    categoryName='Nuts'
                    />
                    </div>
                    </Link>

                    <Link to='/other-ingredient'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={cookingImage_22}
                    categoryName='Other Ingredient'
                    />
                    </div>
                    </Link>
                    

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
