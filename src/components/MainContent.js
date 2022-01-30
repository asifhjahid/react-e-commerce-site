import React from 'react'
import {
    BrowserRouter, Route, Routes
} from "react-router-dom"
import MainContentStyle from '../styles/MainContent.styles'
import Banner from './Banner'
import CategoryProducts from './categoryProducts/CategoryProducts'
import Footer from './Footer'
import FreshProductsSection from './freshProducts/FreshProductsSection'
import Home from './Home'
import LeftSideBar from './LeftSideBar'
import Preorder from './Preorder'
import RegularProductsSection from './regularProducts/RegularProductsSection'
import ServiceSection from './serviceSection/ServiceSection'

export default function MainContent() {
    return (
        <div>
            <BrowserRouter>
            <LeftSideBar />
           
            
       
        <MainContentStyle>
            
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                   <Route path='/banner' element={<Banner />}  />
                   <Route path='/prorder' element={<Preorder />}  />
                   <Route path='/freshproduct' element={<FreshProductsSection />}  />
                   <Route path='/regularproduct' element={<RegularProductsSection />}  />
                   <Route path='/categoryproduct' element={ <CategoryProducts />}  />
                   <Route path='/servicesection' element={ <ServiceSection />}  />
                   <Route path='/footer' element={<Footer />}  />
                   
                   
                   </Routes>
                     
                  
                  
                    
                    
                    
                   
                  
                   {/* <FakeProductSection /> */}
                  
                   
                   

             
     
       

            </div>
            
        </MainContentStyle>
        
       
        </BrowserRouter>
        </div>
    )
}
