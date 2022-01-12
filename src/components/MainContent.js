import React from 'react'
import MainContentStyle from '../styles/MainContent.styles'
import Banner from './Banner'
import FreshSection from './FreshSection'
import Preorder from './Preorder'

export default function MainContent() {
    return (
        <MainContentStyle>
            <div className='container'>

                    <Banner />
                    <Preorder />
                    <FreshSection />



            </div>
            
        </MainContentStyle>
    )
}
