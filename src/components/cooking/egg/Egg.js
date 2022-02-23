import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import EggProductList from './EggProductList';




const Eggs = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Eggs'
            />
           <EggProductList />
        </div>
    );
}

export default Eggs;