import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import HandCareProductList from './HandCareProductList';


const HandCare = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Hand Care'
            /> 
           <HandCareProductList />
        </div>
    );
}

export default HandCare;