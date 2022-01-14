import styled from "styled-components";


const FooterStyle=styled.div` 

            .footer-wrapper {
            padding-top: 70px;
            width: 100%;
            /* margin-left: 35px; */
            @media (min-width: 768px) {

                background: rgba(222, 222, 222, 0.22);
                padding-bottom: 0;
  
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(212px, 1fr));
                    /* justify-content: center; */
                    grid-gap: 30px;
                    width: 100%;
                    /* margin-left: 35px; */
                    .logo__area {
                            text-align: center;
                            img {
                                width: 110px;
                                }
                                .social__media {
                                    display: flex;
                                    justify-content: space-evenly;
                                    margin-top: 25px;
                                        a{
                                            font-size: 18px;
                                            color: #006a4e;
                                            transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                                            &:hover{
                                                color: #fb6801;
                                            }
                                        }
                                    }
                                    a{
                                        text-decoration: none;
                
                                    }
                                    .shodaimama__app {
                                                position: relative;
                                                width: 200px;
                                                margin: 0 auto;
                                                overflow: hidden;
                                                z-index: -1;
                                                p{
                                                    display: block;
                                                    width: 200px;
                                                    background:  #006a4e;

                                                    margin: 20px auto 0;
                                                    font-size: 15px;
                                                    font-family: sans-serif;
                                                    color: #fff;
                                                    text-transform: uppercase;
                                                    letter-spacing: 1px;
                                                    font-weight: 600;
                                                    border-radius: 3px;
                                                    height: 36px;
                                                    line-height: 36px;
                                                    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                                                    }
                                                    .ball {
                                                        height: 36px;
                                                        width: 200px;
                                                        background-color: rgba(0, 106, 78, 0.34901960784313724);
                                                        position: absolute;
                                                        }
                                         }

                                         .shodaimama__CopyRight{
                                            margin-top: 12px;
                                             p{
                                                
                                                 i{
                                                    font-style: italic;
                                                    color: #615e58;
                                                    font-family: sans-serif;
                                                    
                                                 }
                                             }
                                         }
                                                       
                                 }
                    }

            }

`
export default FooterStyle;