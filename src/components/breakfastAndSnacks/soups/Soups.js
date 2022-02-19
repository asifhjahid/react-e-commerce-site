import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SoupsProductList from './SoupsProductList';







const Soups = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Soups'
            />
           <SoupsProductList />
        </div>
    );
}

export default Soups;