import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FeedersProductList from './FeedersProductList';



const Feeders = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Feeders'
            /> 
           <FeedersProductList />
        </div>
    );
}

export default Feeders;