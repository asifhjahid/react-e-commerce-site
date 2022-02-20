import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import CoffeeProductList from './CoffeeProductList';



const Coffee = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Coffee'
            /> 
           <CoffeeProductList />
        </div>
    );
}

export default Coffee;