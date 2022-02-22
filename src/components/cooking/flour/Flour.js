import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FlourProductList from './FlourProductList';




const Flour = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Flour'
            />
           <FlourProductList />
        </div>
    );
}

export default Flour;