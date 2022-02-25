import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import MeatAndFishProductList from './MeatAndFishProductList';


const MeatAndFish = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Meat &amp; Fish'
            />
           <MeatAndFishProductList />
        </div>
    );
}

export default MeatAndFish;
