import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import BakingIngredientsProductList from './BakingIngredientsProductList';




const BakingIngredients = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Baking Ingredients'
            />
           <BakingIngredientsProductList />
        </div>
    );
}

export default BakingIngredients;