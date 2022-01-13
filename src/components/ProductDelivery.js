import React from 'react'
import CardPayment from '../images/paymentsOptionImage/cardPayment.png'
import CashPayment from '../images/paymentsOptionImage/cashPayment.png'
import DeliveryImage from '../images/productDeliveryImg.png'
import ProductDeliveryStyle from '../styles/ProductDelivery.styles'

export default function ProductDelivery() {
    return (
        <ProductDeliveryStyle>
           
                <span class="productDetailsArea">
                    <div class="productDeliveryStatus">
                     <img
                        src={DeliveryImage}
                         alt=""
                        />
                              <p>Next Morning</p>
                        </div>
                        <div class="productDeliveryText">
                              <img
                                src={CardPayment}
                                alt=""
                              />
                              <img
                                src={CashPayment}
                                alt=""
                              />
                        </div>
                    </span>
            </ProductDeliveryStyle>
       
    )
}
