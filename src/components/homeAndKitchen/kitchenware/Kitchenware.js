import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import KitchenwareProductList from './KitchenwareProductList';




const Kitchenware = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Kitchenware'
            />
           <KitchenwareProductList />
        </div>
    );
}

export default Kitchenware;