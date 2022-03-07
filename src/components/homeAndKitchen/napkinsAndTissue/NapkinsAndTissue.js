import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import NapkinsAndTissueProductList from './NapkinsAndTissueProductList';




const NapkinsAndTissue = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Napkins &amp; Tissue'
            />
           <NapkinsAndTissueProductList />
        </div>
    );
}

export default NapkinsAndTissue;