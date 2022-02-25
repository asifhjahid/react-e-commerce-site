import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import MeatProductList from './MeatProductList';



const Meat = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Meat'
            /> 
           <MeatProductList />
        </div>
    );
}

export default Meat;