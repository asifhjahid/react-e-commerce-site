import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import RiceProductList from './RiceProductList';




const Rice = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Rice'
            />
           <RiceProductList />
        </div>
    );
}

export default Rice;