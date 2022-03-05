import ServiceTitle from '../../ServiceTitle';
import TopBannerList from '../../TopBannerList';
import TissueWipesProductList from './TissueWipesProductList';



const TissueWipes = () => {
    return (
        <div>
           <TopBannerList />
            <ServiceTitle
            title='Tissue &amp; Wipes'
            /> 
           <TissueWipesProductList />
        </div>
    );
}


export default TissueWipes;