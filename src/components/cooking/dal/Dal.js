import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import DalProductList from './DalProductList';




const Dal = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Dal'
            />
           <DalProductList />
        </div>
    );
}

export default Dal;