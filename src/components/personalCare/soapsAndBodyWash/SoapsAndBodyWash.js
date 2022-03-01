import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SoapsAndBodyWashProductList from './SoapsAndBodyWashProductList';



const SoapsAndBodyWash = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Soaps &amp; Body Wash'
            /> 
           <SoapsAndBodyWashProductList />
        </div>
    );
}

export default SoapsAndBodyWash;