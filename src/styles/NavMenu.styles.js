import styled from 'styled-components';

const NavStyle = styled.div`

            .navArea {
            height: 84px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-left: 26px;
            background:#ffffff;
            border-bottom: 3px solid #006a4e;
            position: fixed;
            z-index: 9999;
            box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
            }
            .navArea::after {
            content: "";
            display: block;
            clear: both;
            }
            .navInner {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            height: 55px;
            }

            .navLeftCol {
            width: 248px;
            display: flex;
            align-items: center;
                .navLogo {
                height: 55px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                    
                    img{
                        width: 127px;
                        cursor: pointer;
                    }
                }
            }


            .navRightCol {
            width: 2594px;
            display: flex;
            align-items: center;
            height: 55px;
            justify-content: flex-end;
            /* margin-right: 20px; */
                .searchArea{
                    position: relative;
                    cursor: pointer;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    float: right;
                    border-radius: 3px;
                    padding: 0 13px;
                    text-align: center;
                    margin-right: 20px;
                        img {
                            width: 30px;
                            height: 30px;
                         }
                }
                .navCityCol {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                height: 55px;
                width: auto;
                padding: 0 10px;
                cursor: pointer;
                transition: all 0.1s linear;
                    a {
                    font-size: 20px;
                    color:#006a4e;
                    }
                    /* .fa-map-marker-alt {
                    width: 15px;
                    height: 15px;
                    color:#006a4e;
                    } */
                    .cityText {
                    font-weight: 600;
                    font-size: 14px;
                    color: #006a4e;
                    margin-top: 3px;
                    margin-left: 6px;
                    }

                }
                .navLanguageSettingsCol {
                    height: 55px;
                    width: 150px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                    transition: all 0.1s linear;
                    cursor: pointer;
                        .user{
                        font-size: 20px;
                        width: 15px;
                        height: 15px;
                        color: #006a4e;
                            
                        }
                        .signInTextForHeader {
                        font-size: 14px;
                        font-weight: 600;
                        color: #006a4e;
                        margin: 3px 0 0 8px;
                        }
                    }
                    
                    
                    .nav__cart__icon__col {
                    width: 100px;
                    display: block;
                        .cartLogo {
                            width: 70px;
                              img{
                                color: #006a4e;
                                width: 41px;
                            }
                        }
                     }

                    .navSignInCol {
                        height: 85px;
                        width: 126px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.1s linear;
                        cursor: pointer;
                        background:  #006a4e;
                        position: relative;
                            .nav__right__cart__info {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            position: relative;
                            .tag__arrow {
                                position: absolute;
                                width: 30px;
                                left: -20px;
                                top: 50%;
                                -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                                padding-top: 8px;
                                z-index: 9999;
                                img {
                                    width: 30px;
                                    }
                                }
                                .border__bottom__under__list {
                                position: relative;
                                width: 100%;
                                margin-bottom: 2px;
                                padding-bottom: 6px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                text-decoration: none;
                                img {
                                    width: 25px;
                                    /* height: 28px; */
                                    }

                                    &:after{
                                    content: "";
                                    position: absolute;
                                    left: 50%;
                                    bottom: 0;
                                    height: 2.25px;
                                    width: calc(100% - 20px);
                                    background-color: hsla(0, 0%, 100%, 0.47843137254901963);
                                    -webkit-transform: translateX(-50%);
                                    transform: translateX(-50%);
                                        }
                                    }
                                
                                .right__cart__info__style {
                                    font-size: 16px;
                                    font-weight: 600;
                                    color: #fff;
                                    text-decoration: none;
                                    .right__cart__info__icon {
                                        font-size: 13px;
                                        font-weight: 400;
                                        display: inline-block;
                                        }
                                    }
                                }
                        }
                    }
            
        

           
                       
           
           

           
           

           
            

            
            
            

            
            

            /* Main Area */
/* 
            .rightSidebar {
            width: 100%;
            position: relative;
            }

            @media (min-width: 768px) {
            .rightSidebar {
                width: calc(100% - 290px);
                margin-left: 290px;
            }
            } */


`

export default NavStyle;