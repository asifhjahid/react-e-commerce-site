import React from 'react'
import RegularProductList from '../RegularProductList'
import ShowMore from '../ShowMore'
import Title from '../Title'
import TopBannerList from '../TopBannerList'


export default function RegularProductsSection() {
    return (
        <div>
            <TopBannerList />
            <Title
            title='Regular'
            subTitle='২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল
            ১০টা-রাত ১০টা পর্যন্ত ।'

            />
            <RegularProductList />
            <ShowMore />
        </div>
    )
}
