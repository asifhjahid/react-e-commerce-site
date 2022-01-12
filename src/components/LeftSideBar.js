import React from 'react'
import BeveragesImage from '../images/leftImageListBottom/beverages.png'
import BreakfastImage from '../images/leftImageListBottom/breakfast.png'
import CookingImage from '../images/leftImageListBottom/cooking.png'
import DairyImage from '../images/leftImageListBottom/dairy.png'
import FrozenImage from '../images/leftImageListBottom/frozen.png'
import FruitsImage from '../images/leftImageListBottom/fruits.png'
import HygieneImage from '../images/leftImageListBottom/hygiene.png'
import KidsImage from '../images/leftImageListBottom/kids.png'
import KitchenImage from '../images/leftImageListBottom/kitchen.png'
import MeatFishImage from '../images/leftImageListBottom/meatFish.png'
import PersonalCareImage from '../images/leftImageListBottom/personalCare.png'
import StationaryImage from '../images/leftImageListBottom/stationary.png'
import FreshImage from '../images/leftImageListTop/fresh.png'
import HomeImage from '../images/leftImageListTop/home.png'
import PreorderImage from '../images/leftImageListTop/preorder.png'
import RegularImage from '../images/leftImageListTop/regular.png'
import LeftSideBarStyle from '../styles/LeftSideBar.styles'
import Explore from './Explore'
import LeftSideBarListItems from './LeftSideBarListItems'

export default function LeftSideBar() {
    return (
        <LeftSideBarStyle>
          <div class="leftSideBar">
              
                <LeftSideBarListItems
                image = { HomeImage}
                title="Home"
                />

                <LeftSideBarListItems
                image = { FreshImage}
                title="Fresh"
                />

                <LeftSideBarListItems
                image = { RegularImage}
                title="Regular"
                />

                <LeftSideBarListItems
                image = { PreorderImage}
                title="Preorder"
                />
               <Explore />
                <LeftSideBarListItems
                image = { HygieneImage}
                title="Hygiene"
                />

                <LeftSideBarListItems
                image = { BreakfastImage}
                title="Breakfast & Sanacks"
                />
                <LeftSideBarListItems
                image = { CookingImage}
                title="Cooking"
                />
                <LeftSideBarListItems
                image = { MeatFishImage}
                title="Meat & Fish"
                />
                <LeftSideBarListItems
                image = { FruitsImage}
                title="Fruits & Vegetables"
                />
                <LeftSideBarListItems
                image = { DairyImage}
                title="Dairy"
                />
                <LeftSideBarListItems
                image = { FrozenImage}
                title="Frozen & Canned"
                />
                <LeftSideBarListItems
                image = { BeveragesImage}
                title="Beverages"
                />
                <LeftSideBarListItems
                image = { KidsImage}
                title="Kids Care"
                />
                <LeftSideBarListItems
                image = { PersonalCareImage}
                title="Personal Care"
                />
                <LeftSideBarListItems
                image = { KitchenImage}
                title="Home & Kitchen"
                />
                <LeftSideBarListItems
                image = { StationaryImage}
                title="Stationary"
                />
            </div>
            
        </LeftSideBarStyle>
    )
}
