import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SkinCareProductList from './SkinCareProductList';



const SkinCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Skin Care'
            /> 
           <SkinCareProductList />
        </div>
    );
}

export default SkinCare;