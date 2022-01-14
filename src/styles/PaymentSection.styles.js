import styled from 'styled-components';


const PaymentStyle = styled.div`

            .footerPaymentSection {
            border-top: 1px solid #d3d3d3;
            /* margin: 20px 0 0 30px; */
            padding: 10px 0;
            margin-top: 20px;   
            .PaymentMethodImage {
                    width: 100%;
                    img {
                        width: 100%;
                        }
                        @media (max-width: 767px) {

                            display: none;

                            }
                        }  
                    
                    .PaymentMethodImageForMobile {
                        display: none;
                        img {
                            width: 100%;
                            }
                            @media (max-width: 767px) {

                                display: block;
  
                                }
                        }
            }
`
export default PaymentStyle;