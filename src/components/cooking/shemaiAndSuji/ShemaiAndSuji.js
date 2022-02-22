import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import ShemaiAndSujiProductList from './ShemaiAndSujiProductList';




const ShemaiAndSuji = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Shemai &amp; Suji'
            />
           <ShemaiAndSujiProductList />
        </div>
    );
}

export default ShemaiAndSuji;