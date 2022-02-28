import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import PersonalCareProductList from './PersonalCareProductList';



const PersonalCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Personal Care'
            /> 
           <PersonalCareProductList />
        </div>
    );
}

export default PersonalCare;