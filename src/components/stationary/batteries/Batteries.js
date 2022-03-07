import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import BatteriesProductList from './BatteriesProductList';



const Batteries = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Batteries'
            /> 
           <BatteriesProductList />
        </div>
    );
}

export default Batteries;