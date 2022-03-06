import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import CondomsProductList from './CondomsProductList';



const Condoms = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Condoms'
            /> 
           <CondomsProductList />
        </div>
    );
}

export default Condoms;