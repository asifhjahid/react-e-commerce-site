import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FrozenProductList from './FrozenProductList';



const Frozen = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Frozen'
            /> 
           <FrozenProductList />
        </div>
    );
}

export default Frozen;