import React from 'react'
import FooterItemStyle from '../styles/FooterItem.styles'

export default function FooterItem({heading,item1,item2,item3,item4}) {
    return (
        <FooterItemStyle>
             <div class="footer-column">
                  <div class="usefull__link">
                    <p class="footer-heading">{heading}</p>
                    <ul class="footer__nav">
                      <li class="footer__nav__item">
                        <a href="/aboutus">{item1}</a>
                      </li>
                      <li class="footer__nav__item">
                        <a href="/aboutus">{item2}</a>
                      </li>
                      <li class="footer__nav__item">
                        <a href="/aboutus">{item3}</a>
                      </li>
                      <li class="footer__nav__item">
                        <a href="/aboutus">{item4}</a>
                      </li>
                    </ul>
                  </div>
                </div>
        </FooterItemStyle>
    )
}
