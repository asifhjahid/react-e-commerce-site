import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SweetsProductList from './SweetsProductList';




const Sweets = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Sweets'
            />
           <SweetsProductList />
        </div>
    );
}

export default Sweets;