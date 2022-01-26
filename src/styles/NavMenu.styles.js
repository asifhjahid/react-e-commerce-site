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
            
            &::after {
            content: "";
            display: block;
            clear: both;
            }
            .mobile__menu__top__content{
                display: none;
            }
            
            @media only screen and (max-width:768px){
                .hideItem{
                    display: none;
                }
                .showMobileMenu{
                left: 0;
                }
            
            .mobile__menu {
                display: block;
                height: calc(100vh - 84px);
                min-height: 600px;
                width: 100%;
                position: fixed;
                /* left: -100%; */
                top: 0;
                z-index: 9999;
                margin-top: 83px;
                transition: all .45s cubic-bezier(.23,1,.32,1) 0ms;
                overflow: scroll;
                .mobile__menu__left {
                        width: 290px;
                        /* background-color: #fff; */
                        height: calc(100vh - 84px);
                        box-sizing: border-box;
                        position: absolute;
                        /* top: 11; */
                        left: 0;
                        transition: all .45s cubic-bezier(.23,1,.32,1) 0ms;
                        overflow: overlay;
                        /* display: none; */
                        .mobile__menu__top__content {
                                padding: 13px 15px;
                                background: #006a4e;
                                display: flex;
                                justify-content: space-between;
                                z-index:9;
                                .show__location__to__mobile {
                                            display: flex;
                                            align-items: center;
                                            margin-bottom: 5px;
                                            .mobileUser{
                                                font-size: 13px;
                                        
                                                width: 10px;
                                                height: 10px;
                                                color: #ffffff;
                                                cursor: pointer;
                                            }
                                            .mobileSignInTextForHeader {
                                                font-size: 12px;
                                                font-family: sans-serif;
                                                font-weight: 500;
                                                color: #006a4e;
                                                margin: 4px 0 0 8px;
                                                color: #ffffff;
                                                cursor: pointer;
                                               
                                                }
                                            .mobileNavCityCol{
                                                display: flex;
                                                align-items: center;
                                                justify-content: flex-end;
                                                width: auto;
                                                padding: 0 10px;
                                                cursor: pointer;
                                                transition: all 0.1s linear;
                                                
                                                a {
                                                    font-size: 12px;
                                                    font-family: sans-serif;
                                                    color: #ffffff;
                                                    }
                                                    .mobileCityText{
                                                        font-weight: 500;
                                                        font-size: 12px;
                                                        font-family: sans-serif;
                                                        color: #ffffff;
                                                        margin-top: 3px;
                                                        margin-left: 6px;
                                                    }
                                            }

                                        }
                               .mobile__profile__relative{
                                    position: relative;
                                   
                                 
                                        }
                            }
                            .leftSideProductList{
                                /* z-index: -1;
                                display: block; */
                            }
                            .hideItem{
                            display: none !important;
                        }
                    }
            }
        }
            .navInner {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            height: 55px;
           
            .navLeftCol {
            width: 248px;
            display: flex;
            align-items: center;
            .NavMobileOpen {
                    /* width: 100px;
                    height: 50px; */
                    padding: 0px 6px;
                    /* color: rgb(255, 255, 255); */
                    display: none;
                    outline: none;
                    svg{
                       
                        font-size: 28px;
                    }
                    @media only screen and (max-width: 768px){ 
                            display: block;
                            /* margin-top: 10px; */
                            cursor: pointer;  
                        }
                        
            
                    }
                .navLogo {
                height: 55px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                    
                    img{
                        width: 127px;
                        cursor: pointer;
                        @media only screen and (max-width:768px){
                            width: 70px;
                        }
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
            @media only screen and (max-width:768px){
                            
                        }
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
                    @media only screen and (max-width:768px){
                        padding:0;
                        margin-right: 0;
                        border-radius: 0px;
                        }
                        img {
                            width: 30px;
                            height: 30px;
                            @media only screen and (max-width:768px){
                                width: 20px;
                                height: 20px;
                                }
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
                @media only screen and (max-width:768px){
                            display: none;
                        }
                    a {
                    font-size: 20px;
                    font-family: sans-serif;
                    color:#006a4e;
                    }
                    @media only screen and (max-width:768px){
                            display: none;
                        }
                    .cityText {
                    font-weight: 600;
                    font-size: 14px;
                    font-family: sans-serif;
                    color: #006a4e;
                    margin-top: 3px;
                    margin-left: 6px;
                    @media only screen and (max-width:768px){
                            display: none;
                        }
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
                    @media only screen and (max-width:768px){
                           width: 0;
                           padding: 0 6px;
                        }
                       
                        .user{
                        font-size: 20px;
                        font-family: sans-serif;
                        width: 15px;
                        height: 15px;
                        color: #006a4e;
                        @media only screen and (max-width:768px){
                            display: none;
                        }
                        
                            
                        }
                        .signInTextForHeader {
                        font-size: 14px;
                        font-family: sans-serif;
                        font-weight: 600;
                        color: #006a4e;
                        margin: 3px 0 0 8px;
                        @media only screen and (max-width:768px){
                            display: none;
                         }
                        
                        }
                    }
                    
                    
                    .nav__cart__icon__col {
                    width: 100px;
                    display: block;
                    @media only screen and (max-width:768px){
                        width: 42px;
                         }
                        .cartLogo {
                            width: 70px;
                            @media only screen and (max-width:768px){
                                width: 30px;
                            }
                              img{
                                color: #006a4e;
                                width: 41px;
                                @media only screen and (max-width:768px){
                                width: 22px;
                               }
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
                                    height: .5px;
                                    width: calc(100% - 20px);
                                    background-color: hsla(0, 0%, 100%, 0.47843137254901963);
                                    -webkit-transform: translateX(-50%);
                                    transform: translateX(-50%);
                                        }
                                    }
                                
                                .right__cart__info__style {
                                    font-size: 16px;
                                    font-family: sans-serif;
                                    font-weight: 600;
                                    color: #fff;
                                    text-decoration: none;
                                    .right__cart__info__icon {
                                        font-size: 13px;
                                        font-family: sans-serif;
                                        font-weight: 400;
                                        display: inline-block;
                                        margin-right: 4px;
                                        }
                                    }
                                }
                        }
                    }
                 }
                }
                .pl2{
                    padding-left: 20px;
                }
                            a{
                                text-decoration: none;
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