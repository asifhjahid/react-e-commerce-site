import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import CannedProductList from './CannedProductList';



const Canned = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Canned'
            /> 
           <CannedProductList />
        </div>
    );
}

export default Canned;