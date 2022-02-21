import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import ChocolatesProductList from './ChocolatesProductList';



const Chocolates = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Chocolates'
            /> 
           <ChocolatesProductList />
        </div>
    );
}

export default Chocolates;