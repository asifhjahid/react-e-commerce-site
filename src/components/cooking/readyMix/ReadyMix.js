import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import ReadyMixProductList from './ReadyMixProductList';




const ReadyMix = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Ready Mix'
            />
           <ReadyMixProductList />
        </div>
    );
}

export default ReadyMix;