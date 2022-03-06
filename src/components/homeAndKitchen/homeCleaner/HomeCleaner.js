import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import HomeCleanerProductList from './HomeCleanerProductList';




const HomeCleaner = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Home Cleaner'
            />
           <HomeCleanerProductList />
        </div>
    );
}

export default HomeCleaner;