import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SaladDressingProductList from './SaladDressingProductList';




const SaladDressing = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Salad Dressing'
            />
           <SaladDressingProductList />
        </div>
    );
}

export default SaladDressing;