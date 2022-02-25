import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import DriedFishProductList from './DriedFishProductList';



const DriedFish = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Dried Fish'
            /> 
           <DriedFishProductList />
        </div>
    );
}

export default DriedFish;