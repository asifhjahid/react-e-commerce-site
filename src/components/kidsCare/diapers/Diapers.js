import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import DiapersProductList from './DiapersProductList';



const Diapers = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Diapers'
            /> 
           <DiapersProductList />
        </div>
    );
}

export default Diapers;