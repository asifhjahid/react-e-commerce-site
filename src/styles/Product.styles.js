import styled from 'styled-components';


const ProductStyle =styled.div`     


                .product {
                cursor: pointer;
                    .productContent {
                        /* height: calc(100% - 109px); */
                        height: 200px;
                        text-align: center;
                        position: relative;
                        border: 1px solid rgba(251, 231, 231, 0.38823529411764707);
                        border-bottom: none;
                        border-radius: 3px;
                        @media (min-width: 440px) {
                                .productContent {
                                    min-width: 180px;
                                }
                            }
                        
                        .productOrigin {
                            position: absolute;
                            right: 14px;
                            font-size: 12px;
                            font-family: sans-serif;
                            top: 10px;
                            padding: 2px 6px;
                            border-radius: 3px;
                            z-index: 99;
                            a{
                                color: #ffffff;
                                text-decoration: none;
                                font-family: sans-serif;
                            }
                        }
                        .fresh {
                            background: rgba(23, 177, 23, 0.7019607843137254);
                         }

                         .productImageArea{
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 14px;
                            img {
                            width: 100px;
                            height: 100px;
                            transition: 0.5s;
                            z-index: 9;
                                &:hover {
                                        transform: scale(1.4);
                                        transition: 0.5s;
                                        }
                                }
                                @media (min-width: 440px) {
                                .productImageArea {
                                            min-width: 180px;
                                            height: 155px;
                                            display: flex;
                                        }
                                    }
                         } 
                         .productName {
                                font-weight: 500;
                                color: #1a1a1a;
                                padding: 0 15px;
                                font-family: sans-serif;
                                @media (min-width: 440px) {
                                .productName {
                                    font-size: 16px;
                                    font-family: sans-serif;
                                    line-height: 25px;
                                        }
                                        }
                                    }
                        .productSubtext {
                                font-size: 12px;
                                font-family: sans-serif;
                                margin-top: 3px;
                                color: #fb6801;
                                font-weight: 500;
                                }
                                .productPriceArea {
                                    margin-top: 5px;
                                .quantitySymbol {
                                    font-size: 13px;
                                    font-family: sans-serif;
                                    font-weight: 500;
                                    color: #605e58;
                                    }
                                .prodcutPrice{
                                    font-weight: 700;
                                    font-family: sans-serif;
                                    color: #605e58;
                                    @media (min-width: 440px){
                                        .prodcutPrice{
                                            font-size: 18px;
                                            font-family: sans-serif;
                                        }
                                    }
                                }
                                }
                            }
                            

                }
                

`
export default ProductStyle;