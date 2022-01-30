import React from 'react'
import Banner from './Banner'
import CategoryProducts from './categoryProducts/CategoryProducts'
import Footer from './Footer'
import FreshProductsSection from './freshProducts/FreshProductsSection'
import Preorder from './Preorder'
import RegularProductsSection from './regularProducts/RegularProductsSection'
import ServiceSection from './serviceSection/ServiceSection'

export default function Home() {
    return (
        <div>
            <Banner />
            <Preorder/>
            <FreshProductsSection />
            <RegularProductsSection />
            <CategoryProducts />
            <ServiceSection />
            <Footer />
            
        </div>
    )
}
