import React from 'react'
import MainContentStyle from '../styles/MainContent.styles'
import Banner from './Banner'
import CategoryProducts from './categoryProducts/CategoryProducts'
import FreshProductsSection from './freshProducts/FreshProductsSection'
import Preorder from './Preorder'
import RegularProductsSection from './regularProducts/RegularProductsSection'




export default function MainContent() {
    return (
        <MainContentStyle>
            <div className='container'>

                    <Banner />
                    <Preorder />
                   <FreshProductsSection />
                   <RegularProductsSection />
                   <CategoryProducts />



            </div>
            
        </MainContentStyle>
    )
}
