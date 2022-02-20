import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SaucesProductList from './SaucesProductList';



const Sauces = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Sauces'
            />
           <SaucesProductList />
        </div>
    );
}

export default Sauces;