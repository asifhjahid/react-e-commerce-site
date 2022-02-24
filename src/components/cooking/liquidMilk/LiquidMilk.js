import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import LiquidMilkProductList from './LiquidMilkProductList';




const LiquidMilk = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Liquid Milk'
            />
           <LiquidMilkProductList />
        </div>
    );
}

export default LiquidMilk;