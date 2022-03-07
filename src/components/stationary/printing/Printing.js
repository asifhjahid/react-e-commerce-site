import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import PrintingProductList from './PrintingProductList';



const Printing = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Printing'
            /> 
           <PrintingProductList />
        </div>
    );
}

export default Printing;