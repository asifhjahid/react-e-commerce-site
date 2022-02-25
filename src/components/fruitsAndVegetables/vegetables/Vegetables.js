import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import VegetablesProductList from './VegetablesProductList';



const Vegetables = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Vegetables'
            /> 
           <VegetablesProductList />
        </div>
    );
}

export default Vegetables;