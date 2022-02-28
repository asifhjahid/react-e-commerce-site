import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import WipesProductList from './WipesProductList';



const Wipes = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Wipes'
            /> 
           <WipesProductList />
        </div>
    );
}

export default Wipes;