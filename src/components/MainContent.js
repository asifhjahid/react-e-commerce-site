import React from 'react'
import {
    BrowserRouter, Route, Routes
} from "react-router-dom"
import MainContentStyle from '../styles/MainContent.styles'
import Banner from './Banner'
import Beverages from './beverages/Beverages'
import EnergyDrinks from './beverages/energyDrinks/EnergyDrinks'
import PowderDrinks from './beverages/powderDrinks/PowderDrinks'
import SoftDrinks from './beverages/softDrinks/SoftDrinks'
import Water from './beverages/water/Water'
import BakeryAndCakes from './breakfastAndSnacks/bakeryAndCakes/BakeryAndCakes'
import Breakfastandsnacks from './breakfastAndSnacks/BreakfastAndSnacks'
import Cereals from './breakfastAndSnacks/Cereals/Cereals'
import Chocolates from './breakfastAndSnacks/chocolates/Chocolates'
import Coffee from './breakfastAndSnacks/coffee/Coffee'
import Cookies from './breakfastAndSnacks/cookies/Cookies'
import DriedFruits from './breakfastAndSnacks/driedFruits/DriedFruits'
import EnergyBoosters from './breakfastAndSnacks/energyBoosters/EnergyBoosters'
import Honey from './breakfastAndSnacks/honey/Honey'
import JamAndSpreads from './breakfastAndSnacks/jamAndSpreads/JamAndSpreads'
import Juice from './breakfastAndSnacks/juice/Juice'
import Localbreakfasts from './breakfastAndSnacks/localBreakfast/LocalBreakfasts'
import Noodles from './breakfastAndSnacks/noodles/Noodles'
import Nuts from './breakfastAndSnacks/nuts/Nuts'
import Pasta from './breakfastAndSnacks/pasta/Pasta'
import Sauces from './breakfastAndSnacks/sauces/Sauces'
import SnacksAndChips from './breakfastAndSnacks/snacksAndChips/SnacksAndChips'
import Soups from './breakfastAndSnacks/soups/Soups'
import Tea from './breakfastAndSnacks/tea/Tea'
import CategoryProducts from './categoryProducts/CategoryProducts'
import BakingIngredients from './cooking/bakingIngredients/BakingIngredients'
import Butter from './cooking/butter/Butter'
import Cheese from './cooking/cheese/Cheese'
import Cooking from './cooking/Cooking'
import Dal from './cooking/dal/Dal'
import Eggs from './cooking/egg/Egg'
import Flour from './cooking/flour/Flour'
import LiquidMilk from './cooking/liquidMilk/LiquidMilk'
import Oil from './cooking/oil/Oil'
import OtherIngredient from './cooking/otherIngredient/OtherIngredient'
import Pickles from './cooking/pickles/Pickles'
import PowderMilk from './cooking/powderMilk/PowderMilk'
import ReadyMix from './cooking/readyMix/ReadyMix'
import Rice from './cooking/rice/Rice'
import SaladDressing from './cooking/saladDressing/SaladDressing'
import SaltAndSugar from './cooking/saltAndSugar/SaltAndSugar'
import ShemaiAndSuji from './cooking/shemaiAndSuji/ShemaiAndSuji'
import Spices from './cooking/spices/Spices'
import Yogurt from './cooking/yogurt/Yogurt'
import Dairy from './dairy/Dairy'
import Sweets from './dairy/sweets/Sweets'
import Footer from './Footer'
import FreshProductsSection from './freshProducts/FreshProductsSection'
import Canned from './frozenAndCanned/canned/Canned'
import Frozen from './frozenAndCanned/frozen/Frozen'
import FrozenAndCanned from './frozenAndCanned/FrozenAndCanned'
import Fruits from './fruitsAndVegetables/fruits/Fruits'
import FruitsAndVegetables from './fruitsAndVegetables/FruitsAndVegetables'
import Vegetables from './fruitsAndVegetables/vegetables/Vegetables'
import Home from './Home'
import AirFresheners from './homeAndKitchen/airFresheners/AirFresheners'
import DishDetergent from './homeAndKitchen/dishDetergent/DishDetergent'
import HomeAndKitchen from './homeAndKitchen/HomeAndKitchen'
import HomeCleaner from './homeAndKitchen/homeCleaner/HomeCleaner'
import Laundry from './homeAndKitchen/laundry/Laundry'
import HygieneProducts from './hygieneProducts/HygieneProducts'
import BabyFood from './kidsCare/babyFood/BabyFood'
import BabySkinCare from './kidsCare/babySkinCare/BabySkinCare'
import Diapers from './kidsCare/diapers/Diapers'
import Feeders from './kidsCare/feeders/Feeders'
import KidsCare from './kidsCare/KidsCare'
import OralCare from './kidsCare/oralCare/OralCare'
import SkinCare from './kidsCare/skinCare/SkinCare'
import Wipes from './kidsCare/wipes/Wipes'
import LeftSideBar from './LeftSideBar'
import DriedFish from './meatAndFish/driedFish/DriedFish'
import Fish from './meatAndFish/fish/Fish'
import Meat from './meatAndFish/meat/Meat'
import MeatAndFish from './meatAndFish/MeatAndFish'
import Condoms from './personalCare/condoms/Condoms'
import Deodorants from './personalCare/deodorants/Deodorants'
import FacialAndSkinCare from './personalCare/facialAndSkinCare/FacialAndSkinCare'
import Feminine from './personalCare/feminine/Feminine'
import FirstAid from './personalCare/firstAid/FirstAid'
import FoodSupplements from './personalCare/foodSupplements/FoodSupplements'
import HairCare from './personalCare/hairCare/HairCare'
import HandCare from './personalCare/handCare/HandCare'
import PersonalCare from './personalCare/PersonalCare'
import SoapsAndBodyWash from './personalCare/soapsAndBodyWash/SoapsAndBodyWash'
import TalcumPowder from './personalCare/talcumPowder/TalcumPowder'
import TissueWipes from './personalCare/tissueWipes/TissueWipes'
import Preorder from './preorder/Preorder'
import RegularProductsSection from './regularProducts/RegularProductsSection'
import ServiceSection from './serviceSection/ServiceSection'



export default function MainContent() {
    return (
        <div>
            <BrowserRouter>
            <LeftSideBar />
       
        <MainContentStyle>
            
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                   <Route path='/banner' element={<Banner />}  />
                   <Route path='/preorder' element={<Preorder />}  />
                   <Route path='/freshproduct' element={<FreshProductsSection />}  />
                   <Route path='/regularproduct' element={<RegularProductsSection />}  />
                   <Route path='/categoryproduct' element={ <CategoryProducts />}  />
                   <Route path='/servicesection' element={ <ServiceSection />}  />
                   <Route path='/hygieneproduct' element={<HygieneProducts />} />
                   <Route path='/breakfast-snacks' element={<Breakfastandsnacks />} />
                   <Route path='/local-breakfast' element={<Localbreakfasts />} />
                   <Route path='/cereals' element={<Cereals />} />
                   <Route path='/pasta' element={<Pasta />} />
                   <Route path='/noodles' element={<Noodles />} />
                   <Route path='/bakeryAndCakes' element={<BakeryAndCakes />} />
                   <Route path='/soups' element={<Soups />} />
                   <Route path='/juice' element={<Juice />} />
                   <Route path='/jam-and-spreads' element={<JamAndSpreads />} />
                   <Route path='/honey' element={<Honey />} />
                   <Route path='/energyBoosters' element={<EnergyBoosters />} />
                   <Route path='/sauces' element={<Sauces />} />
                   <Route path='/tea' element={<Tea />}  />
                   <Route path='/coffee' element={<Coffee />}  />
                   <Route path='/cookies' element={<Cookies />}  />
                   <Route path='/dried-fruits' element={<DriedFruits />}  />
                   <Route path='/nuts' element={<Nuts />}  />
                   <Route path='/chocolates' element={<Chocolates />}  />
                   <Route path='/snacks-and-chips' element={<SnacksAndChips />}  />
                   <Route path='/cooking' element={<Cooking />}  />
                   <Route path='/rice' element={<Rice />}  />
                   <Route path='/dal' element={<Dal />}  />
                   <Route path='/oil' element={<Oil />}  />
                   <Route path='/flour' element={<Flour />}  />
                   <Route path='/shemai-suji' element={<ShemaiAndSuji />}  />
                   <Route path='/salt-sugar' element={<SaltAndSugar />}  />
                   <Route path='/salad-dressing' element={<SaladDressing />}  />
                   <Route path='/baking-ingredients' element={<BakingIngredients />}  />
                   <Route path='/spices' element={<Spices />}  />
                   <Route path='/ready-mix' element={<ReadyMix />}  />
                   <Route path='/butter' element={<Butter />}  />
                   <Route path='/cheese' element={<Cheese />}  />
                   <Route path='/eggs' element={<Eggs />}  />
                   <Route path='/liquid-milk' element={<LiquidMilk />}  />
                   <Route path='/powder-milk-creamer' element={<PowderMilk />}  />
                   <Route path='/yogurt' element={<Yogurt />}  />
                   <Route path='/pickles' element={<Pickles />}  />
                   <Route path='/other-ingredient' element={<OtherIngredient />}  />
                   <Route path='/meat-and-fish' element={<MeatAndFish />}  />
                   <Route path='/meat' element={<Meat />}  />
                   <Route path='/fish' element={<Fish />}  />
                   <Route path='/dried-fish' element={<DriedFish />}  />
                   <Route path='/fruits-and-vegetables' element={<FruitsAndVegetables />}  />
                   <Route path='/vegetables' element={<Vegetables />}  />
                   <Route path='/fruits' element={<Fruits />}  />
                   <Route path='/dairy' element={<Dairy />}  />
                   <Route path='/sweets' element={<Sweets />}  />
                   <Route path='/frozen-and-canned' element={<FrozenAndCanned />}  />
                   <Route path='/frozen' element={<Frozen />}  />
                   <Route path='/canned' element={<Canned />}  />
                   <Route path='/beverages' element={<Beverages />}  />
                   <Route path='/energy-drinks' element={<EnergyDrinks />}  />
                   <Route path='/soft-drinks' element={<SoftDrinks />}  />
                   <Route path='/powder-drinks' element={<PowderDrinks />}  />
                   <Route path='/water' element={<Water />}  />
                   <Route path='/kids-care' element={<KidsCare />}  />
                   <Route path='/baby-food' element={<BabyFood />}  />
                   <Route path='/wipes' element={<Wipes />}  />
                   <Route path='/diapers' element={<Diapers />}  />
                   <Route path='/feeders' element={<Feeders />}  />
                   <Route path='/oral-care' element={<OralCare />}  />
                   <Route path='/skin-care' element={<SkinCare />}  />
                   <Route path='/baby-skin-care' element={<BabySkinCare />}  />
                   <Route path='/personal-care' element={<PersonalCare />}  />
                   <Route path='/first-aid' element={<FirstAid />}  />
                   <Route path='/facial-skin-care' element={<FacialAndSkinCare />}  />
                   <Route path='/soaps-body-wash' element={<SoapsAndBodyWash />}  />
                   <Route path='/hair-care' element={<HairCare />}  />
                   <Route path='/hand-care' element={<HandCare />}  />
                   <Route path='/deodorants' element={<Deodorants />}  />
                   <Route path='/talcum-powder' element={<TalcumPowder />}  />
                   <Route path='/tissue-wipes' element={<TissueWipes />}  />
                   <Route path='/feminine-hygiene' element={<Feminine />}  />
                   <Route path='/condoms' element={<Condoms />}  />
                   <Route path='/food-supplements' element={<FoodSupplements />}  />
                   <Route path='/home-kitchen' element={<HomeAndKitchen />}  />
                   <Route path='/dish-detergent' element={<DishDetergent />}  />
                   <Route path='/laundry' element={<Laundry />}  />
                   <Route path='/home-cleaner' element={<HomeCleaner />}  />
                   <Route path='/air-fresheners' element={<AirFresheners />}  />
                   <Route path='/footer' element={<Footer />}  />
                  
                   
                   </Routes>
                     
                   {/* <FakeProductSection /> */}

            </div>
        </MainContentStyle>
        </BrowserRouter>
        
        </div>
    )
}
