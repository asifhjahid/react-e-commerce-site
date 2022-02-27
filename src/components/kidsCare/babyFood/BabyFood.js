import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import BabyFoodProductList from './BabyFoodProductList';



const BabyFood = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Baby Food'
            /> 
           <BabyFoodProductList />
        </div>
    );
}

export default BabyFood;