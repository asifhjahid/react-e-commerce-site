import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import DishDetergentProductList from './DishDetergentProductList';




const DishDetergent = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Dish Detergent'
            />
           <DishDetergentProductList />
        </div>
    );
}

export default DishDetergent;