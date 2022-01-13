import React from 'react'
import MainContentStyle from '../styles/MainContent.styles'
import Banner from './Banner'
import FreshProductsSection from './FreshProductsSection'
import Preorder from './Preorder'

export default function MainContent() {
    return (
        <MainContentStyle>
            <div className='container'>

                    <Banner />
                    <Preorder />
                    <FreshProductsSection />



            </div>
            
        </MainContentStyle>
    )
}
