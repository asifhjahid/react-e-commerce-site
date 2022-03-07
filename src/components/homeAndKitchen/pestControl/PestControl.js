import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import PestControlProductList from './PestControlProductList';




const PestControl = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Pest Control'
            />
           <PestControlProductList />
        </div>
    );
}

export default PestControl;