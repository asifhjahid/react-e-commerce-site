import React from 'react'
import CategoryTitleStyle from '../styles/CategoryTitle.styles'

export default function ServiceTitle({title}) {
    return (
        <CategoryTitleStyle>
           
                    <div class="sectionHeadingArea">
                      <p class="sectionHeading">{title}</p>
                    </div>
                  
                 
             
            
        </CategoryTitleStyle>
    )
}
