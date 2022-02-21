import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import OilProductList from './OilProductList';




const Oil = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Oil'
            />
           <OilProductList />
        </div>
    );
}

export default Oil;