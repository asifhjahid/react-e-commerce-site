import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import BreakfastProductList from './BreakfastProductList';


const Breakfastandsnacks = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Breakfast &amp; Snacks'
            />
           <BreakfastProductList />
        </div>
    );
}

export default Breakfastandsnacks;
