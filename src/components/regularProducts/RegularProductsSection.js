import React from 'react'
import RegularProductStyle from '../../styles/RegularProductSection.styles'
import RegularProductList from '../RegularProductList'
import Title from '../Title'

export default function RegularProductsSection() {
    return (
        <RegularProductStyle>
            <Title
            title='Regular'
            subTitle='২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল
            ১০টা-রাত ১০টা পর্যন্ত ।'

            />
            <RegularProductList />
        </RegularProductStyle>
    )
}
