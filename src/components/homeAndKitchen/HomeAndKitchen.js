import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import HomeAndKitchenProductList from './HomeAndKitchenProductList';



const HomeAndKitchen = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Home &amp; Kitchen'
            /> 
           <HomeAndKitchenProductList />
        </div>
    );
}

export default HomeAndKitchen;