import React from 'react'
import { Link } from 'react-router-dom'
import TopBannerListStyle from '../styles/TopBannerList.styles'

export default function TopBannerList() {
    return (
        <TopBannerListStyle>
    
            <div class="global_category_tab_btn_area">
              <div class="global_category_tab_btn_wrapper">
              
                <div class="single_global_catergory_btn">
                <Link to='/freshproduct'  style={{textDecoration:"none"}}>
                  <a class="globalBtn_link" href="#">Fresh</a>
                  </Link>
                </div>
                              
                <div class="single_global_catergory_btn">
                <Link to='/regularproduct'  style={{textDecoration:"none"}}>
                  <a class="globalBtn_link" href="#">Regular</a>
                  </Link>
                </div>
                            
                <div class="single_global_catergory_btn">
                <Link to='/preorder'  style={{textDecoration:"none"}}>
                  <a class="globalBtn_link" href="#">Preorder</a>
                    </Link>
                </div>
              
              </div>
            </div>
        
        </TopBannerListStyle>
    )
}
