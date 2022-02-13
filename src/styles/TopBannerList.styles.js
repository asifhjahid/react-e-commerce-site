import styled from "styled-components";


const TopBannerListStyle =styled.div`
                //margin-bottom: 110px;
                .global_category_tab_btn_area {
                height: 76px;
                width: calc(100% - 280px);
                right: 0;
                position: fixed;
                top: 70px;
                z-index: 9998;
                background: #fff;
                box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
                @media (min-width: 768px) {
                        .global_category_tab_btn_area {
                            display: block;
                            }
                        }
                    .global_category_tab_btn_wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 84px;
                    .single_global_catergory_btn {
                                width: 33.33%;
                                border-right: 1px solid #c7c3c3;
                                  .globalBtn_link {
                                    font-size: 16px;
                                    font-family: sans-serif;
                                    font-weight: 600;
                                    color: #313131;
                                    line-height: 30px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 50px;
                                    width: 100%;
                                    transition: 0.9s;
                                    text-decoration: none;
                                      &:hover{
                                        padding-left: 25px;
                                        transition: 0.9s;
                                        }
                                    }
                                }
                    }
                }


`

export default TopBannerListStyle;