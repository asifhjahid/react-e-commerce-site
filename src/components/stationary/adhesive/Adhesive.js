import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import AdhesiveProductList from './AdhesiveProductList';



const Adhesive = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Adhesive'
            /> 
           <AdhesiveProductList />
        </div>
    );
}

export default Adhesive;