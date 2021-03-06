import React from 'react'
import { Link } from 'react-router-dom'
import BreakfastImage_1 from '../../images/breakfastProducts/breakfast_1.png'
import BreakfastImage_10 from '../../images/breakfastProducts/breakfast_10.png'
import BreakfastImage_11 from '../../images/breakfastProducts/breakfast_11.png'
import BreakfastImage_12 from '../../images/breakfastProducts/breakfast_12.png'
import BreakfastImage_13 from '../../images/breakfastProducts/breakfast_13.png'
import BreakfastImage_14 from '../../images/breakfastProducts/breakfast_14.png'
import BreakfastImage_15 from '../../images/breakfastProducts/breakfast_15.png'
import BreakfastImage_16 from '../../images/breakfastProducts/breakfast_16.png'
import BreakfastImage_17 from '../../images/breakfastProducts/breakfast_17.png'
import BreakfastImage_18 from '../../images/breakfastProducts/breakfast_18.png'
import BreakfastImage_2 from '../../images/breakfastProducts/breakfast_2.png'
import BreakfastImage_3 from '../../images/breakfastProducts/breakfast_3.png'
import BreakfastImage_4 from '../../images/breakfastProducts/breakfast_4.png'
import BreakfastImage_5 from '../../images/breakfastProducts/breakfast_5.png'
import BreakfastImage_6 from '../../images/breakfastProducts/breakfast_6.png'
import BreakfastImage_7 from '../../images/breakfastProducts/breakfast_7.png'
import BreakfastImage_8 from '../../images/breakfastProducts/breakfast_8.png'
import BreakfastImage_9 from '../../images/breakfastProducts/breakfast_9.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function BreakfastProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                                  
                   <div class="categoryItems">
                   <Link to='/local-breakfast'  style={{textDecoration:"none"}}>
                    <div>
                    <CategoryItem 
                    categoryImage={BreakfastImage_1}
                    categoryName='Local Breakfasts'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/cereals'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_2}
                    categoryName='Cereals'
                    />
                    </div>
                    </Link>

                    <Link to='/pasta'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_3}
                    categoryName='Pasta'
                    />
                    </div>
                    </Link>


                    <Link to='/noodles'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_4}
                    categoryName='Noodles'
                    />
                    </div>
                    </Link>

                    <Link to='/bakeryAndCakes'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_5}
                    categoryName='Bakery &amp; Cakes'
                    />
                    </div>
                    </Link>

                    <Link to='/soups'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_6}
                    categoryName='Soups'
                    />
                    </div>
                    </Link>


                    <Link to='/juice'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_7}
                    categoryName='Juice'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/jam-and-spreads'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_8}
                    categoryName='Jam &amp; Spreads'
                    />
                    </div>
                    </Link>

                    <Link to='/honey'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_9}
                    categoryName='Honey'
                    />
                    </div>
                    </Link>

                    <Link to='/energyBoosters'  style={{textDecoration:"none"}}>
                     <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_10}
                    categoryName='Energy Boosters'
                    />
                    </div>
                    </Link>

                    <Link to='/sauces'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_11}
                    categoryName='Sauces'
                    />
                    </div>
                    </Link>


                    <Link to='/tea'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_12}
                    categoryName='Tea'
                    />
                    </div>
                    </Link>

                    <Link to='/coffee'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_13}
                    categoryName='Coffee'
                    />
                    </div>
                    </Link>

                    <Link to='/cookies'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_14}
                    categoryName='Cookies'
                    />
                    </div>
                    </Link>


                    <Link to='/dried-fruits'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_15}
                    categoryName='Dried Fruits'
                    />
                    </div>
                    </Link>

                    <Link to='/nuts'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_16}
                    categoryName='Nuts'
                    />
                    </div>
                    </Link> 

                    <Link to='/chocolates'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_17}
                    categoryName='Chocalates'
                    />
                    </div>
                    </Link>

                    <Link to='/snacks-and-chips'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={BreakfastImage_18}
                    categoryName='Snacks &amp; Chips'
                    />
                    </div>
                    </Link>
                    

                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
