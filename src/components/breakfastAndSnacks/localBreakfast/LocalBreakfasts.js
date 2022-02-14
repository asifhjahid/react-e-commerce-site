import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import LocalBreakfastProductList from './LocalBreakfastProductList';



const Localbreakfasts = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Local Breakfasts'
            />
            <LocalBreakfastProductList />
        </div>
    );
}

export default Localbreakfasts;
