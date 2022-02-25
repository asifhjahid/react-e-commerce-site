import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import FruitsAndVegetablesProductList from './FruitsAndVegetablesProductList';


const FruitsAndVegetables = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Fruits &amp; Vegetables'
            />
           <FruitsAndVegetablesProductList />
        </div>
    );
}

export default FruitsAndVegetables;
