import React from 'react'
import CategoryItemStyle from '../styles/CategoryItem.styles'

export default function CategoryItem({categoryName,categoryImage}) {
    return (
        <CategoryItemStyle>
            <div class="homePageCategory">
                      <a href="#">
                        <div class="categoryItem">
                          <div class="categoryImageArea">
                            <img
                              src={categoryImage}
                              alt=""
                            />
                          </div>
                          <p class="categoryName">{categoryName}</p>
                     </div>
                    </a>
                </div>
        </CategoryItemStyle>
    )
}
