import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import JuiceProductList from './JuiceProductList';







const Juice = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Juice'
            />
            
           <JuiceProductList />
        </div>
    );
}

export default Juice;