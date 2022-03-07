import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import StationaryProductList from './StationaryProductList';



const Stationary = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Stationary'
            /> 
           <StationaryProductList />
        </div>
    );
}

export default Stationary;