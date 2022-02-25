import React from 'react'
import { Link } from 'react-router-dom'
import dairyImage_1 from '../../images/dairyProducts/dairyProduct_1.png'
import dairyImage_2 from '../../images/dairyProducts/dairyProduct_2.png'
import dairyImage_3 from '../../images/dairyProducts/dairyProduct_3.png'
import dairyImage_4 from '../../images/dairyProducts/dairyProduct_4.png'
import dairyImage_5 from '../../images/dairyProducts/dairyProduct_5.png'
import dairyImage_6 from '../../images/dairyProducts/dairyProduct_6.png'
import dairyImage_7 from '../../images/dairyProducts/dairyProduct_7.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function dairyProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/eggs'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={dairyImage_1}
                    categoryName='Eggs'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/liquid-milk'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={dairyImage_2}
                    categoryName='Liquid Milk'
                    />
                    </div>
                    </Link>

                    <Link to='/powder-milk-creamer'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={dairyImage_3}
                    categoryName='Powder Milk &amp; Creamer'
                    />
                    </div>
                    </Link>


                    <Link to='/butter'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={dairyImage_4}
                    categoryName='Butter'
                    />
                    </div>
                    </Link>

                    <Link to='/cheese'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={dairyImage_5}
                    categoryName='Cheese'
                    />
                    </div>
                    </Link>

                    <Link to='/yogurt'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={dairyImage_6}
                    categoryName='Yogurt'
                    />
                    </div>
                    </Link>


                    <Link to='/salad-dressing'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={dairyImage_7}
                    categoryName='Sweets'
                    />
                    </div>
                    </Link>
                                                   

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
