import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FacialAndSkinCareProductList from './FacialAndSkinCareProductList';



const FacialAndSkinCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Facial &amp; Skin Care'
            /> 
           <FacialAndSkinCareProductList />
        </div>
    );
}

export default FacialAndSkinCare;