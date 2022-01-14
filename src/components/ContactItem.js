import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { RiHeadphoneFill } from "react-icons/ri";
import ContactItemStyle from '../styles/ContactItem.styles';

export default function ContactItem({address,email,support,phone}) {
    return (
        <ContactItemStyle>
             
                      <li class="footer__nav__item">
                            <IoLocationSharp />
                        <span class="footer__nav__link"
                          >{address}</span
                        >
                      </li>
                      <li class="footer__nav__item">
                            <AiOutlineMail />
                        <span class="footer__nav__link"
                          >{email}</span
                        >
                      </li>
                      <li class="footer__nav__item">
                            <RiHeadphoneFill />
                        <span class="footer__nav__link"
                          >{support}</span
                        >
                      </li>
                      <li class="footer__nav__item__phone">
                        <a href="#">
                          <p>Help : {phone}</p>
                        </a>
                      </li>
                   
             

        </ContactItemStyle>
    )
}
