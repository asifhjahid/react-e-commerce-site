import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import AirFreshenersProductList from './AirFreshenersProductList';




const AirFresheners = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Air Fresheners'
            />
           <AirFreshenersProductList />
        </div>
    );
}

export default AirFresheners;