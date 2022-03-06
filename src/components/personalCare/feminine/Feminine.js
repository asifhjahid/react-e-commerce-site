import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FeminineProductList from './FeminineProductList';



const Feminine = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Feminine Hygiene'
            /> 
           <FeminineProductList />
        </div>
    );
}

export default Feminine;