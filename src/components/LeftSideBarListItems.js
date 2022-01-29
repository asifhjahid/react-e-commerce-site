import React from 'react'
import { Link } from 'react-router-dom'
import LeftSideBarListItemsStyle from '../styles/LeftSideBarListItems.styles'

export default function LeftSideBarListItems({image,title,to}) {
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
                     <Link to={to}> <span class="marginLeft">{title}</span></Link>
                    </a>
                  </li>
                  
                </ul>
              </div>
              
        </LeftSideBarListItemsStyle>
    )
}
