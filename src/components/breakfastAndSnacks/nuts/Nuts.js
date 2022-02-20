import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import NutsProductList from './NutsProductList';



const Nuts = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Dried  Fruits'
            /> 
           <NutsProductList />
        </div>
    );
}

export default Nuts;