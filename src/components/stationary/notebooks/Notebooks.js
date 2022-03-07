import React from 'react';
import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import NotebooksProductList from './NotebooksProductList';



const Notebooks = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Notebooks'
            /> 
           <NotebooksProductList />
        </div>
    );
}

export default Notebooks;