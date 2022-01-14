import React from 'react'
import PaymentImage from '../images/paymentImages/payment.png'
import PaymentMobileImage from '../images/paymentImages/paymentForMobile.png'
import PaymentStyle from '../styles/PaymentSection.styles'


export default function PaymentSection() {
    return (
        <PaymentStyle>
             <div class="footerPaymentSection">
                <div class="PaymentMethodImage">
                  <img src={PaymentImage} alt="" />
                </div>
                <div class="PaymentMethodImageForMobile">
                  <img
                    src={PaymentMobileImage}
                    alt=""
                  />
                </div>
              </div>
            
        </PaymentStyle>
    )
}
