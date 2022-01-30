import React from 'react'
import LeftSideBarListItemsStyle from '../styles/LeftSideBarListItems.styles'


export default function LeftSideBarListItems({image,title,To}) {
    return (
        <LeftSideBarListItemsStyle>
            <div class="leftSideBarTop leftSidebarBottom">
                <ul class="leftSideBarTopNav">
                  
                  <li class="leftSideBarTopNavItem">
                    
                    <a class="leftSideBarTopNavItemLink" href="">
                      <img
                        class="categoryImageIcon"
                        src={image}
                        alt=""
                      />
                      <span class="marginLeft">{title}</span>
                    </a>
                  
                  </li>
                
                </ul>
              </div>
              
        </LeftSideBarListItemsStyle>
    )
}
