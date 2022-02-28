import React from 'react'
import { Link } from 'react-router-dom'
import personalCareImage_1 from '../../images/personalCareProducts/personalCareProduct_1.png'
import personalCareImage_10 from '../../images/personalCareProducts/personalCareProduct_10.png'
import personalCareImage_11 from '../../images/personalCareProducts/personalCareProduct_11.png'
import personalCareImage_12 from '../../images/personalCareProducts/personalCareProduct_12.png'
import personalCareImage_13 from '../../images/personalCareProducts/personalCareProduct_13.png'
import personalCareImage_2 from '../../images/personalCareProducts/personalCareProduct_2.png'
import personalCareImage_3 from '../../images/personalCareProducts/personalCareProduct_3.png'
import personalCareImage_4 from '../../images/personalCareProducts/personalCareProduct_4.png'
import personalCareImage_5 from '../../images/personalCareProducts/personalCareProduct_5.png'
import personalCareImage_6 from '../../images/personalCareProducts/personalCareProduct_6.png'
import personalCareImage_7 from '../../images/personalCareProducts/personalCareProduct_7.png'
import personalCareImage_8 from '../../images/personalCareProducts/personalCareProduct_8.png'
import personalCareImage_9 from '../../images/personalCareProducts/personalCareProduct_9.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function personalCareProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/first-aid' style={{textDecoration:"none"}}>
                    <div> 
                    <CategoryItem 
                    categoryImage={personalCareImage_1}
                    categoryName='First Aid'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/facial-skin-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_2}
                    categoryName='Facial &amp; Skin Care'
                    />
                    </div>
                    </Link>

                     <Link to='/soaps-body-wash'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_3}
                    categoryName='Soaps &amp; Body Wash'
                    />
                    </div>
                    </Link> 

                     <Link to='/hair-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_4}
                    categoryName='Hair Care'
                    />
                    </div>
                    </Link> 

                     <Link to='/oral-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_5}
                    categoryName='Oral Care'
                    />
                    </div>
                    </Link> 

                     <Link to='/hand-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_6}
                    categoryName='Hand Care'
                    />
                    </div>
                    </Link>

                     <Link to='/deodorants'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_7}
                    categoryName='Deodorants'
                    />
                    </div>
                    </Link>  

                    <Link to='/tolcum-powder'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_8}
                    categoryName='Talcum Powder'
                    />
                    </div>
                    </Link> 

                    <Link to='/tissue-wipes'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_9}
                    categoryName='Tissue &amp; Wipes'
                    />
                    </div>
                    </Link> 

                    <Link to='/feminine-hygiene'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_10}
                    categoryName='Feminine Hygiene'
                    />
                    </div>
                    </Link> 

                    <Link to='/condoms'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_11}
                    categoryName='Condoms'
                    />
                    </div>
                    </Link> 

                    <Link to='/skin-care'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_12}
                    categoryName='Skin Care'
                    />
                    </div>
                    </Link> 

                    <Link to='/food-supplements'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={personalCareImage_13}
                    categoryName='Food Supplements'
                    />
                    </div>
                    </Link> 



                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
