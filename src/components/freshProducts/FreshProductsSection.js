import React from 'react'
import FreshProductList from '../FreshProductList'
import ShowMore from '../ShowMore'
import Title from '../Title'
import TopBannerList from '../TopBannerList'


export default function FreshProductsSection() {
    return (
        <div>
            <TopBannerList />
            <Title
            title='Fresh'
            subTitle='গুনগত মান বজায় রাখার জন্য পচনশীল খাদ্যপণ্য সরবরাহ করা হয়
            সকাল ৮-১১ টা পর্যন্ত ।'

            />
            <FreshProductList />
            <ShowMore />
        </div>
    )
}
