import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import HoneyProductList from './HoneyProductList';




const Honey = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Honey'
            />
            
         <HoneyProductList />
        </div>
    );
}

export default Honey;