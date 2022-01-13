import React from 'react'
import CategorImage_1 from '../images/categoryImages/category_1.png'
import CategorImage_10 from '../images/categoryImages/category_10.png'
import CategorImage_11 from '../images/categoryImages/category_11.png'
import CategorImage_2 from '../images/categoryImages/category_2.png'
import CategorImage_3 from '../images/categoryImages/category_3.png'
import CategorImage_4 from '../images/categoryImages/category_4.png'
import CategorImage_5 from '../images/categoryImages/category_5.png'
import CategorImage_6 from '../images/categoryImages/category_6.png'
import CategorImage_7 from '../images/categoryImages/category_7.png'
import CategorImage_8 from '../images/categoryImages/category_8.png'
import CategorImage_9 from '../images/categoryImages/category_9.png'
import CategoryListStyle from '../styles/CategoryList.styles'
import CategoryItem from './CategoryItem'
import CategoryTitle from './CategoryTitle'


export default function CategoryList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   <CategoryTitle />
                   
                   <div class="categoryItems">
                    <div>
                    <CategoryItem 
                    categoryImage={CategorImage_1}
                    categoryName='Breakfast &amp; Snacks'
                    />
                    </div>
                    
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_2}
                    categoryName='Cooking'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_3}
                    categoryName='Meat &amp; Fish'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_4}
                    categoryName='Fruits &amp; Vegetables'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_5}
                    categoryName='Dairy'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_6}
                    categoryName='Frozen &amp; Canned'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_7}
                    categoryName='Beverages'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_8}
                    categoryName='Kids Care'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_9}
                    categoryName='Personal Care'
                    />
                    </div>
                     <div>
                     <CategoryItem 
                    categoryImage={CategorImage_10}
                    categoryName='Home &amp; Kitchen'
                    />
                    </div>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_11}
                    categoryName='Stationary'
                    />
                    </div>

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
