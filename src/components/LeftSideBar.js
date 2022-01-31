import React from 'react'
import { Link } from 'react-router-dom'
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


export default function LeftSideBar({showNav,setShowNav}) {
    return (
        <LeftSideBarStyle>
          <div className='leftSideBar'>

                <Link to='/' style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { HomeImage}
                title="Home"
               
                />
               </Link>
               <Link to='/freshproduct'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { FreshImage}
                title="Fresh"
               
                />
                </Link>
                <Link to='/regularproduct'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { RegularImage}
                title="Regular"
                To='/regularproduct'
                />
                </Link>
                <Link to='/preorder'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { PreorderImage}
                title="Preorder"
                />
                </Link>
                <Explore />
                <Link to='/hygieneproduct'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { HygieneImage}
                title="Hygiene"
                />
                </Link>
                <LeftSideBarListItems
                image = { BreakfastImage}
                title="Breakfast &amp; Sanacks"
                />
                <LeftSideBarListItems
                image = { CookingImage}
                title="Cooking"
                />
                <LeftSideBarListItems
                image = { MeatFishImage}
                title="Meat &amp; Fish"
                />
                <LeftSideBarListItems
                image = { FruitsImage}
                title="Fruits &amp; Vegetables"
                />
                <LeftSideBarListItems
                image = { DairyImage}
                title="Dairy"
                />
                <LeftSideBarListItems
                image = { FrozenImage}
                title="Frozen &amp; Canned"
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
                title="Home &amp; Kitchen"
                />
                <LeftSideBarListItems
                image = { StationaryImage}
                title="Stationary"
                />
            </div>
            
        </LeftSideBarStyle>
    )
}
