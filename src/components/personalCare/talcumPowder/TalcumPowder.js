import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import TalcumPowderProductList from './TalcumProductList';



const TalcumPowder = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Talcum Powder'
            /> 
           <TalcumPowderProductList />
        </div>
    );
}

export default TalcumPowder;