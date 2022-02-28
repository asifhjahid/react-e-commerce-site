import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import OralCareProductList from './OralCareProductList';



const OralCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Oral Care'
            /> 
           <OralCareProductList />
        </div>
    );
}

export default OralCare;