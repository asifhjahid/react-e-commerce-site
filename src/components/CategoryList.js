import React from 'react'
import { Link } from 'react-router-dom'
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
import CategoryTitle from './ServiceTitle'


export default function CategoryList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   <CategoryTitle 
                   title='Shodaimama Categories'
                   />
                   
                   <div class="categoryItems">
                   <Link to='/breakfast-snacks'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={CategorImage_1}
                    categoryName='Breakfast &amp; Snacks'
                    />
                    </div>
                    </Link>
                    <Link to='/cooking'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_2}
                    categoryName='Cooking'
                    />
                    </div>
                    </Link>
                    <Link to='/meat-and-fish'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_3}
                    categoryName='Meat &amp; Fish'
                    />
                    </div>
                    </Link>
                    <Link to='/fruits-and-vegetables'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_4}
                    categoryName='Fruits &amp; Vegetables'
                    />
                    </div>
                    </Link>
                    <Link to='/dairy'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_5}
                    categoryName='Dairy'
                    />
                    </div>
                    </Link>
                    <Link to='/frozen-and-canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_6}
                    categoryName='Frozen &amp; Canned'
                    />
                    </div>
                    </Link>
                    <Link to='/beverages'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_7}
                    categoryName='Beverages'
                    />
                    </div>
                    </Link>
                    <Link to='/kids-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_8}
                    categoryName='Kids Care'
                    />
                    </div>
                    </Link>
                    <Link to='/personal-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_9}
                    categoryName='Personal Care'
                    />
                    </div>
                    </Link>
                    <Link to='/home-kitchen'  style={{textDecoration:"none"}}>
                     <div>
                     <CategoryItem 
                    categoryImage={CategorImage_10}
                    categoryName='Home &amp; Kitchen'
                    />
                    </div>
                    </Link>
                    <Link to='/stationary'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={CategorImage_11}
                    categoryName='Stationary'
                    />
                    </div>
                    </Link>

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
