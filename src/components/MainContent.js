import React from 'react'
import {
    BrowserRouter, Route, Routes
} from "react-router-dom"
import MainContentStyle from '../styles/MainContent.styles'
import Banner from './Banner'
import BakeryAndCakes from './breakfastAndSnacks/bakeryAndCakes/BakeryAndCakes'
import Breakfastandsnacks from './breakfastAndSnacks/BreakfastAndSnacks'
import Cereals from './breakfastAndSnacks/Cereals/Cereals'
import Localbreakfasts from './breakfastAndSnacks/localBreakfast/LocalBreakfasts'
import Noodles from './breakfastAndSnacks/noodles/Noodles'
import Pasta from './breakfastAndSnacks/pasta/Pasta'
import Soups from './breakfastAndSnacks/soups/Soups'
import CategoryProducts from './categoryProducts/CategoryProducts'
import Footer from './Footer'
import FreshProductsSection from './freshProducts/FreshProductsSection'
import Home from './Home'
import HygieneProducts from './hygieneProducts/HygieneProducts'
import LeftSideBar from './LeftSideBar'
import Preorder from './preorder/Preorder'
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
                   <Route path='/preorder' element={<Preorder />}  />
                   <Route path='/freshproduct' element={<FreshProductsSection />}  />
                   <Route path='/regularproduct' element={<RegularProductsSection />}  />
                   <Route path='/categoryproduct' element={ <CategoryProducts />}  />
                   <Route path='/servicesection' element={ <ServiceSection />}  />
                   <Route path='/hygieneproduct' element={<HygieneProducts />} />
                   <Route path='/breakfast-snacks' element={<Breakfastandsnacks />} />
                   <Route path='/local-breakfast' element={<Localbreakfasts />} />
                   <Route path='/local-breakfast' element={<Localbreakfasts />} />
                   <Route path='/cereals' element={<Cereals />} />
                   <Route path='/pasta' element={<Pasta />} />
                   <Route path='/noodles' element={<Noodles />} />
                   <Route path='/bakeryAndCakes' element={<BakeryAndCakes />} />
                   <Route path='/soups' element={<Soups />} />
                   <Route path='/footer' element={<Footer />}  />
                   
                   </Routes>
                     
                   {/* <FakeProductSection /> */}

            </div>
        </MainContentStyle>
        </BrowserRouter>
        
        </div>
    )
}
