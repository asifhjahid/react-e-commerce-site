import styled from "styled-components";

const CategoryItemStyle=styled.div`


            .homePageCategory {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(163px, 1fr));
                grid-gap: 15px;
                text-decoration: none;
                .categoryItem {
                        border-radius: 3px;
                        overflow: hidden;
                        text-align: center;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #fff;
                        flex-direction: column;
                        height: 160px;
                        padding: 10px;
                        margin: 2px 0;
                        box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
                        @media (min-width: 767px) {
                                .categoryItem {
                                     cursor: pointer;
                                        }
                                    }
                            .categoryImageArea{
                                img {
                                width: 90px;
                                height: 90px;
                                -webkit-object-fit: cover;
                                object-fit: cover;
                                transition: all 0.55s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                                    &:hover {
                                        transform: scale(1.4);
                                        transition: 0.5s;
                                        }
                                }
                                
                            } 
                            .categoryName {
                                    color: #615e58;
                                    font-size: 14px;
                                    font-family: sans-serif;
                                    font-weight: 400;
                                    text-align: center;
                                    display: block;
                                   
                                    }
                            
                                }
                        a{
                            text-decoration: none;
                        }
            }


`
export default CategoryItemStyle;