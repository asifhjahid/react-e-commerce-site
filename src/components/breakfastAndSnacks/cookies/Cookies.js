import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import CookiesProductList from './CookiesProductList';



const Cookies = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Cookies'
            /> 
           <CookiesProductList />
        </div>
    );
}

export default Cookies;