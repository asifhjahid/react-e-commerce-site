import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import WritingProductList from './WritingProductList';



const Writing = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Writing'
            /> 
           <WritingProductList />
        </div>
    );
}

export default Writing;