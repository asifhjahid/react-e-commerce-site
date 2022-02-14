import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import CerealsProductList from './CerealsProductList';




const Cereals = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Cereals'
            />
           <CerealsProductList />
        </div>
    );
}

export default Cereals;