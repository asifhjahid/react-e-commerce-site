import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import TeaProductList from './TeaProductList';



const Tea = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Tea'
            />
           <TeaProductList />
        </div>
    );
}

export default Tea;