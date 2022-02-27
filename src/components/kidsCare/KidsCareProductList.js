import React from 'react'
import { Link } from 'react-router-dom'
import kidsCareImage_1 from '../../images/kidsCareProducts/kidsCareProduct_1.png'
import kidsCareImage_2 from '../../images/kidsCareProducts/kidsCareProduct_2.png'
import kidsCareImage_3 from '../../images/kidsCareProducts/kidsCareProduct_3.png'
import kidsCareImage_4 from '../../images/kidsCareProducts/kidsCareProduct_4.png'
import kidsCareImage_5 from '../../images/kidsCareProducts/kidsCareProduct_5.png'
import kidsCareImage_6 from '../../images/kidsCareProducts/kidsCareProduct_6.png'
import kidsCareImage_7 from '../../images/kidsCareProducts/kidsCareProduct_7.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function kidsCareProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/baby-food'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={kidsCareImage_1}
                    categoryName='Baby Food'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/wipes'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={kidsCareImage_2}
                    categoryName='Wipes'
                    />
                    </div>
                    </Link>

                     <Link to='/diapers'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={kidsCareImage_3}
                    categoryName='Diapers'
                    />
                    </div>
                    </Link> 

                     <Link to='/feeders'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={kidsCareImage_4}
                    categoryName='Feeders'
                    />
                    </div>
                    </Link> 

                     <Link to='/oral-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={kidsCareImage_5}
                    categoryName='Oral Care'
                    />
                    </div>
                    </Link> 

                     <Link to='/skin-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={kidsCareImage_6}
                    categoryName='Skin Care'
                    />
                    </div>
                    </Link>

                     <Link to='/baby-skin-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={kidsCareImage_7}
                    categoryName='Baby Skin Care'
                    />
                    </div>
                    </Link>                     

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
