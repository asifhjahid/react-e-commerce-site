import styled from "styled-components";


const BannerStyle = styled.div`
                        
                width: calc(100% - 290px);
                margin-left: 290px;
                        

                            .homeContentArea {
                            padding-top: 50px;
                            /* margin-left: 66px; */
                                .bannerArea {
                                    width: 100%;
                                    padding-bottom: 60px;
                                    margin-top: 127px;
                            /* display: none; */
                                    @media (min-width: 768px) {
                                            .bannerArea {
                                                display: block;
                                            }
                                    }
                                    .container {
                                        max-width: 1240px;
                                        width: 100%;
                                        padding-left: 15px;
                                        padding-right: 15px;
                                        margin-left: auto;
                                        margin-right: auto;
                                        margin-top: -30px;
                                        .carousel-root {
                                                outline: none;

                                                .carousel {
                                                    width: 100%;
                                                    display: flex;
                                                    justify-content: center;
                                                    
                                                    }
                                                .carousel-slider {
                                                    position: relative;
                                                    margin: 0;
                                                    overflow: hidden;

                                                    .slider-wrapper {
                                                        overflow: hidden;
                                                        margin: auto;
                                                        width: 100%;
                                                        transition: height 0.15s ease-in;

                                                        .slider {
                                                                display: flex;
                                                                margin: 0;
                                                                padding: 0;
                                                                position: relative;
                                                                list-style: none;
                                                                width: 100%;
                                                                }
                                                        .animated {
                                                                transition: all 0.35s ease-in-out;
                                                                .slide {
                                                                        flex-direction: column;
                                                                        flex-flow: column;
                                                                        min-width: 100%;
                                                                        margin: 0;
                                                                        position: relative;
                                                                        text-align: center;
                                                                        img {
                                                                                display: inline-block;
                                                                                pointer-events: none;
                                                                                object-fit: fill;
                                                                                height: 350px;
                                                                                width: 100%;
                                                                                vertical-align: top;
                                                                                border: 0;
                                                                                @media (min-width: 768px){
                                                                                    img{
                                                                                        height: 350px;
                                                                                    }
                                                                                }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                    }
                                                 }

                                        }
                            }
                        }
`
export default BannerStyle;