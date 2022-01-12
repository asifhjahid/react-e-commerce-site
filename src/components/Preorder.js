import React from 'react'
import PreorderImage from '../images/bannerImages/preorderBanner.jpeg'
import PreorderStyle from '../styles/Preorder.styles'
import Title from './Title'
export default function Preorder() {
    return (
        <div>
             <Title 
             title='Preorder'
             subTitle='বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার
             এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।'
             
             />
                <PreorderStyle>
                <div class="productListArea">
                    <a class="offerBannerItem" href="#">
                      <div class="offerBannerItemImg">
                        <img
                          src={PreorderImage}
                          alt=""
                        />
                      </div>
                      <div class="offerBannerContent">
                        <p>সদাইমামা বার-বি-কিউ ফেস্ট ...</p>
                      </div>
                    </a>
                  </div>
                  </PreorderStyle>
             
        </div>
    )
}
