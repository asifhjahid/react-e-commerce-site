import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import KidsCareProductList from './KidsCareProductList';


const KidsCare = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Kids Care'
            />
           <KidsCareProductList />
        </div>
    );
}

export default KidsCare;
