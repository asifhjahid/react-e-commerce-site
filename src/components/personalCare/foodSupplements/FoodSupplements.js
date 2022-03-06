import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FoodSupplementsProductList from './FoodSupplementsProductList';



const FoodSupplements = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Food Supplements'
            /> 
           <FoodSupplementsProductList />
        </div>
    );
}

export default FoodSupplements;