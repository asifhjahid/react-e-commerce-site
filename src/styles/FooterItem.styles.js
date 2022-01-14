import styled from "styled-components";


const FooterItemStyle= styled.div` 
                .footer-column {
                text-align: center;
                .footer-heading {
                        font-size: 16px;
                        font-family: sans-serif;
                        font-weight: 700;
                        text-transform: capitalize;
                        text-align: left;
                        color: #313131;
                    }
                    .footer__nav {
                text-align: left;
                margin-top: 15px;
                .footer__nav__item{
                    list-style: none;
                    &:not(:last-child){
                        margin-bottom: 8px;
                             }
                            a{
                                display: inline-block;
                                transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                                color: #615e58;
                                font-size: 14px;
                                font-family: sans-serif;
                                font-weight: 400;
                                text-decoration: none;
                                font-family: sans-serif;
                                &:hover{
                                        color:  #006a4e;
                                    }
                                }   
                            }
                        }
                }
            


`
export default FooterItemStyle;