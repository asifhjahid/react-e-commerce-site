import styled from "styled-components";


const ExploredStyle = styled.div`


            .leftSideBarTopNav {
            border-bottom: 1px solid hsla(0, 0%, 50.2%, 0.21176470588235294);
            margin-top: 0;
            padding: 0 20px;
                    .leftSideBarTopNavItem {
                        margin-bottom: 2px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                        justify-content: center;
                        .leftSideBarTopNavItemLink {
                                    font-size: 15px;
                                    font-family: sans-serif;
                                    color: #006a4e;
                                    font-weight: 700;
                                    padding: 10px;

                                    .explore__text {
                                            color: grey;
                                            display: inline-block;
                                            margin-right: 3px;
                                            /* font-size: 18px; */
                                        }
                                        .shodai__text {
                                            color:  #006a4e;
                                            display: inline-block;
                                            /* font-size: 18px; */
                                        }
                                        .mama__text {
                                            color: #fb6801;
                                            display: inline-block;
                                            /* font-size: 18px; */
                                        }
                                    }
                              }
                          }
                        .explore__bg {
                            background: rgba(128, 128, 128, 0.09);
                            }

`


export default ExploredStyle;