import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import FrozenAndCannedProductList from './FrozenAndCannedProductList';


const FrozenAndCanned = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Frozen &amp; Canned'
            />
           <FrozenAndCannedProductList />
        </div>
    );
}

export default FrozenAndCanned;
