import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainContentStyle from '../styles/MainContent.styles'
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
                    <Router>
                      <Routes>
                          <Route path='/' element={<Banner />} />
                          <Route path='/preorder' element={ <Preorder />} />
                          <Route path='/freshproduct' element={<FreshProductsSection />} />
                          <Route path='/regularproduct' element={<RegularProductsSection />} />
                            
                            {/* <FakeProductSection /> */}
                            <CategoryProducts />
                            <ServiceSection />
                            <Footer />
                        </Routes>
                   </Router>


            </div>
            
        </MainContentStyle>
    )
}
