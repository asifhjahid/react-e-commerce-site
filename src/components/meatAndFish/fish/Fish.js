import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FishProductList from './FishProductList';



const Fish = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Fish'
            /> 
           <FishProductList />
        </div>
    );
}

export default Fish;