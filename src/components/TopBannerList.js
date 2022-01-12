import React from 'react'
import TopBannerListStyle from '../styles/TopBannerList.styles'

export default function TopBannerList() {
    return (
        <TopBannerListStyle>
    
            <div class="global_category_tab_btn_area">
              <div class="global_category_tab_btn_wrapper">
                <div class="single_global_catergory_btn">
                  <a class="globalBtn_link" href="#">Fresh</a>
                </div>
                <div class="single_global_catergory_btn">
                  <a class="globalBtn_link" href="#">Regular</a>
                </div>
                <div class="single_global_catergory_btn">
                  <a class="globalBtn_link" href="#">Preorder</a>
                </div>
              </div>
            </div>
        
        </TopBannerListStyle>
    )
}
