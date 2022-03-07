import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import ElectricalsProductList from './ElectricalsProductList';




const Electricals = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Lights &amp; Electricals'
            />
           <ElectricalsProductList />
        </div>
    );
}

export default Electricals;