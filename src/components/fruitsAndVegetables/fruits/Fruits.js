import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FruitsProductList from './FruitsProductList';



const Fruits = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Fruits'
            /> 
           <FruitsProductList />
        </div>
    );
}

export default Fruits;