import React from 'react'
import { Link } from 'react-router-dom'
import ExploredStyle from '../styles/Explore.styles'

export default function Explore() {
    return (
        <ExploredStyle>
          
            <div class="leftSideBarTop exploreMargin">
                <ul class="leftSideBarTopNav explore__bg">
                  <Link to='/servicesection'>
                  <li class="leftSideBarTopNavItem">
                    <a class="leftSideBarTopNavItemLink" href="#">
                      <span class="explore__text">Explore</span>
                      <span class="shodai__text">Shodai</span>
                      <span class="mama__text">Mama</span>
                    </a>
                   </li>
                  </Link>
                </ul>
              </div>
        </ExploredStyle>
    )
}
