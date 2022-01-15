import React from 'react'
import MainContentStyle from '../styles/MainContent.styles'
import FakeProductSection from './apiProducts/ApiProductSection.'
import Banner from './Banner'
import CategoryProducts from './categoryProducts/CategoryProducts'
import Footer from './Footer'
import FreshProductsSection from './freshProducts/FreshProductsSection'
import Preorder from './Preorder'
import RegularProductsSection from './regularProducts/RegularProductsSection'
import ServiceSection from './serviceSection/ServiceSection'




export default function MainContent() {
    return (
        <MainContentStyle>
            <div className='container'>

                    <Banner />
                    <Preorder />
                   <FreshProductsSection />
                   <RegularProductsSection />
                   <FakeProductSection />
                   <CategoryProducts />
                   <ServiceSection />
                   <Footer />



            </div>
            
        </MainContentStyle>
    )
}
