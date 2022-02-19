import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import JamAndSpreadsProductList from './JamAndSpreadsProductList';




const JamAndSpreads = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Jam &amp; Spreads'
            />
            
           <JamAndSpreadsProductList />
        </div>
    );
}

export default JamAndSpreads;