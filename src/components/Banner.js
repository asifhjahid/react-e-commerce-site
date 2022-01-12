import React from 'react'
import BannerImage from '../images/bannerImages/banner.jpeg'
import BannerStyle from '../styles/Banner.styles'
import TopBannerList from './TopBannerList'

export default function Banner() {
    return (
        <BannerStyle>

            <TopBannerList />
            
            <div class="homeContentArea">
              <div class="bannerArea">
                <div class="container">
                  <div class="carousel-root">
                    <div class="carousel carousel-slider">
                      <div class="slider-wrapper axis-horizontal">
                        <ul class="slider animated">
                          <li class="slide">
                            <div class="image">
                              <img
                                src={BannerImage}
                                alt=""
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
              </div>
        </BannerStyle>
    )
}
