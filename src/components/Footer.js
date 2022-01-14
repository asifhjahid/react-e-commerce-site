import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import LogoImage from '../images/logo/logo.png';
import FooterStyle from '../styles/Footer.styles';
import Contact from './Contact';
import FooterItem from './FooterItem';
import PaymentSection from './PaymentSection';


export default function Footer() {
    return (
        <FooterStyle>
            <footer class="footer-wrapper">
            {/* <div class="container"> */}
              <div class="footer-content">
                <div class="footer-column logo__area">
                  <a href="#">
                    <img src={LogoImage} alt="" />
                  </a>
                  <div class="social__media">
                    <a href=""><AiFillFacebook /></a>
                    <a href=""><AiFillLinkedin /></a>
                    <a href=""><AiOutlineInstagram /></a>
                    <a href=""><AiFillYoutube /></a>
                  </div>
                  <a href="">
                    <div class="shodaimama__app">
                      <p>Shodaimama App</p>
                      <div class="ball motion-blur"></div>
                    </div>
                  </a>
                  <div class="shodaimama__CopyRight">
                    <p>
                      <i>ShodaiMama © 2021</i>
                    </p>
                  </div>
                </div>

               <FooterItem 
               heading='Useful links'
               item1='About ShodaiMama'
               item2='FAQ'
               item3='Contact Us'
               item4='Career'
               />

                <FooterItem 
               heading='Helpful Links'
               item1='Why Choose ShodaiMama'
               item2='Privacy policy'
               item3='Terms & Condition'
               item4='Delivery, Return & Refund'
               />
                <Contact />
               
              </div>

            <PaymentSection />

              
            {/* </div> */}
          </footer>
        </FooterStyle>
    )
}
