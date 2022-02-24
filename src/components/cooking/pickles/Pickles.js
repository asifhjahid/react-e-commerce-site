import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import PicklesProductList from './PicklesProductList';




const Pickles = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Pickles'
            />
           <PicklesProductList />
        </div>
    );
}

export default Pickles;