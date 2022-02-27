import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SoftDrinksProductList from './SoftDrinksProductList';



const SoftDrinks = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Soft Drinks'
            /> 
           <SoftDrinksProductList />
        </div>
    );
}

export default SoftDrinks;