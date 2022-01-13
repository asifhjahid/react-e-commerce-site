import styled from 'styled-components';


const ProductDeliveryStyle =styled.div`

                .productDetailsArea {
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                padding: 5px;
                .productDeliveryStatus {
                        display: flex;
                        padding-left: 5px;
                        img {
                            height: 22px;
                            margin-right: 5px;
                            }
                        p {
                            font-weight: 500;
                            color: #9b9898;
                            margin-left: 5px;
                            line-height: 25px;
                            font-size: 11px;
                            }
                        }

                        .productDeliveryText {
                            padding-right: 10px;
                            font-size: 10px;
                            line-height: 25px;
                            font-weight: 500;
                            color: #868585;
                            img {
                                height: 22px;
                                }
                            }
                }


`
export default ProductDeliveryStyle;