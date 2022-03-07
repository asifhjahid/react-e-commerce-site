import React from 'react'
import { Link } from 'react-router-dom'
import stationaryImage_1 from '../../images/stationaryProducts/stationaryProduct_1.png'
import stationaryImage_2 from '../../images/stationaryProducts/stationaryProduct_2.png'
import stationaryImage_3 from '../../images/stationaryProducts/stationaryProduct_3.png'
import stationaryImage_4 from '../../images/stationaryProducts/stationaryProduct_4.png'
import stationaryImage_5 from '../../images/stationaryProducts/stationaryProduct_5.png'
import CategoryListStyle from '../../styles/CategoryList.styles'
import CategoryItem from '../CategoryItem'



export default function StationaryProductList() {
    return (
        <CategoryListStyle>
            
                  {/* <div class="container"> */}
                   
                   
                   
                   <div class="categoryItems">
                   <Link to='/notebooks' style={{textDecoration:"none"}}>
                    <div> 
                    <CategoryItem 
                    categoryImage={stationaryImage_1}
                    categoryName='Notebooks'
                    />
                    </div>
                    </Link>
                    
                    <Link to='/writing'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={stationaryImage_2}
                    categoryName='Writing'
                    />
                    </div>
                    </Link>

                     <Link to='/printing'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={stationaryImage_3}
                    categoryName='Printing'
                    />
                    </div>
                    </Link> 

                     <Link to='/batteries'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={stationaryImage_4}
                    categoryName='Batteries'
                    />
                    </div>
                    </Link> 

                     <Link to='/adhesive'  style={{textDecoration:"none"}}>
                    <div>
                     <CategoryItem 
                    categoryImage={stationaryImage_5}
                    categoryName='Adhesive'
                    />
                    </div>
                    </Link> 



                </div>
            {/* </div> */}
        </CategoryListStyle>
    )
}
