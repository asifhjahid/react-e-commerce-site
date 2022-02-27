import React from 'react'
import { Link } from 'react-router-dom'
import beveragesImage_1 from '../../images/beveragesProducts/beveragesProduct_1.png'
import beveragesImage_2 from '../../images/beveragesProducts/beveragesProduct_2.png'
import beveragesImage_3 from '../../images/beveragesProducts/beveragesProduct_3.png'
import beveragesImage_4 from '../../images/beveragesProducts/beveragesProduct_4.png'
import beveragesImage_5 from '../../images/beveragesProducts/beveragesProduct_5.png'
import beveragesImage_6 from '../../images/beveragesProducts/beveragesProduct_6.png'
import beveragesImage_7 from '../../images/beveragesProducts/beveragesProduct_7.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function beveragesProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/frozen'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={beveragesImage_1}
                    categoryName='Tea'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={beveragesImage_2}
                    categoryName='Coffee'
                    />
                    </div>
                    </Link> 

                     <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={beveragesImage_3}
                    categoryName='Energy Drinks'
                    />
                    </div>
                    </Link>   

                     <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={beveragesImage_4}
                    categoryName='Soft Drinks'
                    />
                    </div>
                    </Link>   

                     <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={beveragesImage_5}
                    categoryName='Juice'
                    />
                    </div>
                    </Link>  

                     <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={beveragesImage_6}
                    categoryName='Powder Drinks'
                    />
                    </div>
                    </Link>   

                    <Link to='/canned'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={beveragesImage_7}
                    categoryName='Water'
                    />
                    </div>
                    </Link>   

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
