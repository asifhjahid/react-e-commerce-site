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
                <Link to='/breakfast-snacks'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { BreakfastImage}
                title="Breakfast &amp; Snacks"
                />
                </Link>
                <Link to='/cooking'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { CookingImage}
                title="Cooking"
                />
                </Link>
                <Link to='/meat-and-fish'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { MeatFishImage}
                title="Meat &amp; Fish"
                />
                </Link>
                <Link to='/fruits-and-vegetables'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { FruitsImage}
                title="Fruits &amp; Vegetables"
                />
                </Link>
                <Link to='/dairy'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { DairyImage}
                title="Dairy"
                />
                </Link>
                <Link to='/frozen-and-canned'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { FrozenImage}
                title="Frozen &amp; Canned"
                />
                </Link>
                <Link to='/beverages'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { BeveragesImage}
                title="Beverages"
                />
                </Link>
                <Link to='/kids-care'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { KidsImage}
                title="Kids Care"
                />
                </Link>
                <Link to='/personal-care'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { PersonalCareImage}
                title="Personal Care"
                />
                </Link>
                <Link to='/home-kitchen'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { KitchenImage}
                title="Home &amp; Kitchen"
                />
                </Link>
                <Link to='/stationary'  style={{textDecoration:"none"}}>
                <LeftSideBarListItems
                image = { StationaryImage}
                title="Stationary"
                />
                </Link>
            </div>
            
        </LeftSideBarStyle>
    )
}
