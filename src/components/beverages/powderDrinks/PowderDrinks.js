import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import PowderDrinksProductList from './PowderDrinksProductList';



const PowderDrinks = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Powder Drinks'
            /> 
           <PowderDrinksProductList />
        </div>
    );
}

export default PowderDrinks;