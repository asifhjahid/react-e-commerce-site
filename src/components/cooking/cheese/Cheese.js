import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import CheeseProductList from './CheeseProductList';




const Cheese = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Cheese'
            />
           <CheeseProductList />
        </div>
    );
}

export default Cheese;