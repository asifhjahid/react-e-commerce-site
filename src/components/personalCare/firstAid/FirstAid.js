import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import FirstAidProductList from './FirstAidProductList';



const FirstAid = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='First Aid'
            /> 
           <FirstAidProductList />
        </div>
    );
}

export default FirstAid;