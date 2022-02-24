import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import PowderMilkProductList from './PowderMilkProductList';




const PowderMilk = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Powder Milk &amp; Creamer'
            />
           <PowderMilkProductList />
        </div>
    );
}

export default PowderMilk;