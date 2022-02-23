import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SpicesProductList from './SpicesProductList';




const Spices = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Spices'
            />
           <SpicesProductList />
        </div>
    );
}

export default Spices;