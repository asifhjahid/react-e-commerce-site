import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import ButterProductList from './ButterProductList';




const Butter = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Butter'
            />
           <ButterProductList />
        </div>
    );
}

export default Butter;