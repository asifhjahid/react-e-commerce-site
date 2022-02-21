import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import CookingProductList from './CookingProductList';


const Cooking = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Cooking'
            />
           <CookingProductList />
        </div>
    );
}

export default Cooking;
