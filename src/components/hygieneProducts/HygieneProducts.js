import React from 'react';
import HygieneProductList from '../HygieneProductList';
import ServiceTitle from '../ServiceTitle';
import TopBannerList from '../TopBannerList';



export default function HygieneProducts() {
  return <div>
      <TopBannerList />
      <ServiceTitle 
      title='Hygiene'
      />
      <HygieneProductList />
  </div>;
}

