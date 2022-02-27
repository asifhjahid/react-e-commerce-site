import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import WaterProductList from './WaterProductList';



const Water = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Water'
            /> 
           <WaterProductList />
        </div>
    );
}

export default Water;