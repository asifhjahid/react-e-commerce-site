import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import DriedFruitsProductList from './DriedFruitsProductList';



const DriedFruits = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Dried  Fruits'
            /> 
           <DriedFruitsProductList />
        </div>
    );
}

export default DriedFruits;