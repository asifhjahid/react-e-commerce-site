import styled from "styled-components";

const ContactItemStyle =styled.div` 

                .footer__nav__item{
                    display: flex;
                    list-style: none;
                    font-size: 18px;
                    font-family: sans-serif;
                    color:#006a4e;
                    &:not(:last-child) {
                    margin-bottom: 8px;
                    }
                    a{
                        /* display: inline-block; */
                        transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                        color:#615e58;
                        font-size: 14px;
                        font-family: sans-serif;
                        font-weight: 400;
                        
                    }
                    .footer__nav__link {
                            font-size: 14px;
                            font-family: sans-serif;
                            font-weight: 400;
                            display: inline-block;
                            margin-left: 3px;
                            color: #615e58;
                            list-style: none;
                            }
                }
                .footer__nav__item__phone {
                            border: 1px solid #d3d3d3;
                            transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                            /* color:#006a4e; */
                            display: flex;
                            width: 200px;
                            padding: 5px 10px;
                            text-decoration: none;
                            a{
                                /* color:#006a4e; */
                                font-size: 14px;
                                font-family: sans-serif;
                                font-weight: 400; 
                                text-decoration: none;
                                p{
                                    color:#615e58;
                                }
                            }
                    }


`

export default ContactItemStyle;