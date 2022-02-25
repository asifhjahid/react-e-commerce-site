import React from 'react';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';
import DairyProductList from './DairyProductList';


const Dairy = () => {
    return (
        <div>
            <TopBannerList />
            <ServiceTitle 
            title='Dairy'
            />
           <DairyProductList />
        </div>
    );
}

export default Dairy;
