import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import cartContext from '../context/cartContext';
import LogoImg from '../images/logo/logo.png';
import Search from '../images/search.png';
import NavStyle from '../styles/NavMenu.styles';


export default function NavMenu() {
  const ctx = useContext(cartContext)
    return (
        <NavStyle>
            <div class="navArea">
            <div class="navInner">
            <div class="navLeftCol">
              <div class="navLogo">
              <a href="#">
                <img src={LogoImg} alt="" />
              </a>
            </div>
          </div>
          <div class="navRightCol">
            <div>
              <label class="searchArea">
                <img src={Search} alt="" />
              </label>
            </div>
            <div class="navCityCol hover1">
              <a href="">
                <IoLocationSharp />
              </a>
              <span class="cityText">Select Delivery Location</span>
            </div>
            <span>
              <div class="navLanguageSettingsCol">
                <div className='user'>
                  <FaUserAlt />
                </div>
                <div class="signInTextForHeader">Sign In</div>
              </div>
            </span>
            <a href="#">
              <div class="nav__cart__icon__col">
                <div class="cartLogo">
                 <img src={'https://shodaimama.netlify.app/images/cart.svg'} alt='' />
                </div>
              </div>
            </a>
            <a href="#">
              <div class="navSignInCol hover1">
                <div class="nav__right__cart__info">
                  <div class="tag__arrow">
                    <img src={'https://shodaimama.netlify.app/images/leftArrow.svg'} alt="" />
                  </div>
                  <p
                    class="right__cart__info__style border__bottom__under__list"
                  >
                    <img src={'https://shodaimama.netlify.app/images/artBoard.svg'} alt="" />
                   {ctx.cart.length}
                  </p>
                  <p class="right__cart__info__style">
                    <span class="right__cart__info__icon">৳</span>
                    0
                  </p>
                </div>
                </div>
                    </a>
                </div>
                </div>
            </div>
        </NavStyle>
    )
}
