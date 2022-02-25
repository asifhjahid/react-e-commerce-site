import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import OtherIngredientProductList from './OtherIngredientProductList';



const OtherIngredient = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Other Ingredient'
            /> 
           <OtherIngredientProductList />
        </div>
    );
}

export default OtherIngredient;