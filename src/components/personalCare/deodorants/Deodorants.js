import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import DeodorantsProductList from './DeodorantsProductList';



const Deodorants = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Deodorants'
            /> 
           <DeodorantsProductList />
        </div>
    );
}

export default Deodorants;