import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import BabySkinCareProductList from './BabySkinCareProductList';



const BabySkinCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Baby Skin Care'
            /> 
           <BabySkinCareProductList />
        </div>
    );
}

export default BabySkinCare;