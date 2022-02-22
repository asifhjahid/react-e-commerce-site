import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SaltAndSugarProductList from './SaltAndSugarProductList';




const SaltAndSugar = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Salt &amp; Sugar'
            />
           <SaltAndSugarProductList />
        </div>
    );
}

export default SaltAndSugar;