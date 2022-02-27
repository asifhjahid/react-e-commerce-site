import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import BeveragesProductList from './BeveragesProductList';


const Beverages = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Beverages'
            />
           <BeveragesProductList />
        </div>
    );
}

export default Beverages;
