import styled from "styled-components";


  const TitleStyled = styled.div`
  
                    .common__product__title__area {
                            margin-bottom: 40px;
                            .common__product__title__wrapper {
                                background: hsla(0, 0%, 50.2%, 0.09019607843137255);
                                padding: 15px 30px;
                                position: relative;
                                .common__product__left__border {
                                        position: absolute;
                                        left: 0;
                                        top: 50%;
                                        height: 70%;
                                        width: 10px;
                                        -webkit-transform: translateY(-50%);
                                        transform: translateY(-50%);
                                        border-radius: 5px;
                                        background: rgb(68, 189, 50);
                                        }

                                 .common__product__title {
                                        font-size: 25px;
                                        font-weight: 600;
                                        line-height: 40px;
                                        color: #313131;
                                        margin: 0 0 5px 5px;
                                        }
                                .common__product__subTitle {
                                        font-size: 18px;
                                        font-weight: 400;
                                        text-transform: capitalize;
                                        line-height: 30px;
                                        color: #313131;
                                        overflow: hidden;
                                        margin-left: 5px;
                                        }
                                }
                            }

                            
                    
                
  
  `

  export default TitleStyled;