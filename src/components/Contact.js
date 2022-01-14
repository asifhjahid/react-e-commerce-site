import React from 'react'
import ContactStyle from '../styles/Contact.styles'
import ContactItem from './ContactItem'

export default function Contact() {
    return (
        <ContactStyle>
            <div class="footer-column">
                  <div class="usefull__link contact__section">
                    <p class="footer-heading">Contact Us</p>
                    <ul class="footer__nav">
                            <ContactItem 
                                address='House 18, block: k, South Banasree, Dhaka'
                                email='info@shodaimama.com'
                                support='support@shodaimama.com'
                                phone='+8801894874999'
                            />
                    </ul>
            </div>
            </div>
        </ContactStyle>
    )
}
