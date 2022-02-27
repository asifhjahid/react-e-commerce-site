import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import EnergyDrinksProductList from './EnergyDrinksProductList';



const EnergyDrinks = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Energy Drinks'
            /> 
           <EnergyDrinksProductList />
        </div>
    );
}

export default EnergyDrinks;