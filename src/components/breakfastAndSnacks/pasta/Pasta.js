import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import PastaProductList from './PastaProductList';





const Pasta = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Pasta'
            />
           <PastaProductList />
        </div>
    );
}

export default Pasta;