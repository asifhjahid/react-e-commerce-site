import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import NoodlesProductList from './NoodlesProductList';






const Noodles = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Noodles'
            />
           <NoodlesProductList />
        </div>
    );
}

export default Noodles;