import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import SnacksAndChipsProductList from './SnacksAndChipsProductList';



const SnacksAndChips = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Snacks &amp; Chips'
            /> 
           <SnacksAndChipsProductList />
        </div>
    );
}

export default SnacksAndChips;