import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import HairCareProductList from './HairCareProductList';



const HairCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Hair Care'
            /> 
           <HairCareProductList />
        </div>
    );
}

export default HairCare;