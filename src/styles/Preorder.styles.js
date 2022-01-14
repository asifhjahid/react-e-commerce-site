import styled from "styled-components";


const PreorderStyle = styled.div` 
                            padding-bottom: 50px;
                            margin-left: 16px;
                            .productListArea {
                                display: grid;
                                /* grid-template-columns: repeat(auto-fill, minmax(122px, 1fr));
                                grid-gap: 10px; */
                                
                                @media (min-width: 440px) {
                                    .productListArea {
                                        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                                        grid-gap: 5px;
                                         }
                                    }

                                .offerBannerItem {
                                    position: relative;
                                    min-height: 231px;
                                    width: 254px;
                                    background: #fff;
                                    border-radius: 3px;
                                    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

                                    .offerBannerItemImg {
                                            height: 200px;
                                            position: relative;
                                            overflow: hidden;
                                            &:hover {
                                                transform: scale(1.4);
                                                transition: 0.5s ease-in-out;
                                                }
                                                img {
                                                    width: 100%;
                                                    height: 164px;
                                                    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                                                    object-fit: cover;
                                                    }
                                            }

                                    .offerBannerContent {
                                                display: flex;
                                                justify-content: space-between;
                                                align-items: center;
                                                padding: 0 10px;
                                                background: #ffffff;
                                                position: absolute;
                                                width: 100%;
                                                bottom: 0;
                                                left: 0;
                                                height: 60px;
                                                p {
                                                    font-size: 16px;
                                                    font-family: sans-serif;
                                                    font-weight: 500;
                                                    padding: 3px 10px;
                                                    color: #615e58;
                                                    }
                                            }
                                    }
                                }





`
export default PreorderStyle;