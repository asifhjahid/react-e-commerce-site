import styled from 'styled-components';


const ShoppingCartStyle = styled.div`

            .main{
                position: relative;
                height: 100vh;
                width: 100%;
                
                .header{
                    position: relative;
                    height: 15vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    background-size: cover;
                    background-position: center center;
                    font-size: 1.5rem;
                    /* color: #fff; */
                    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                    h1{
                        color: #000000;
                    }

                    .iconShopping{
                            cursor: pointer;
                            z-index: 1;
                            position: relative;
                            font-size: 1.8rem;
                            /* display: flex; */
                            p{
                                    position: absolute;
                                    top: -5px;
                                    right: -12px;
                                    font-size: 0.69rem;
                                    /* background-color: #000; */
                                    padding: 5px 5px;
                                    border-radius: 50%;
                                    color: #000000;
                                }
                        }
                  }
            }
            .cartBox{
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.8);
                    z-index: 99999;
                    transition: 0.3s linear;
                    transform: scale(0);
                    .cart{
                            position: relative;
                            height: 70%;
                            width: 80%;
                            background: #fff;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                                .close{
                                    position: absolute;
                                    right: 0;
                                    top: 0;
                                    background:#f00;
                                    padding:10px 15px;
                                    color: #fff;
                                    cursor: pointer;
                                    &:hover{
                                        background-color: #ff0000a5;
                                    }
                                }
                             h1{
                                position: relative;
                                margin-top: 2%;
                                font-size: 2.8rem;
                                color: #017bf5;
                            }
                        }
                }



`
export default ShoppingCartStyle;