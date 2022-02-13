import React from 'react';
import LocalBreakfastProductList from './LocalBreakfastProductList';
import ServiceTitle from './ServiceTitle';
import TopBannerList from './TopBannerList';

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
