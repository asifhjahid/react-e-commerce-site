import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import LaundryProductList from './LaundryProductList';




const Laundry = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Laundry'
            />
           <LaundryProductList />
        </div>
    );
}

export default Laundry;