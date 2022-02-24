import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import YogurtProductList from './YogurtProductList';




const Yogurt = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Yogurt'
            />
           <YogurtProductList />
        </div>
    );
}

export default Yogurt;