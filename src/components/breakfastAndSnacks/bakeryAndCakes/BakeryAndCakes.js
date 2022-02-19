import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import BakeryAndCakesProductList from './BakeryAndCakesProductList';







const BakeryAndCakes = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Bakery &amp; Cakes'
            />
          <BakeryAndCakesProductList />
        </div>
    );
}

export default BakeryAndCakes;