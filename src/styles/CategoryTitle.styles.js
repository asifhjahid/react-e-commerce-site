import styled from "styled-components";

const CategoryTitleStyle =styled.div` 

                .sectionHeadingArea {
                max-width: 1240px;
                width: 100%;
                border-bottom: 1px solid rgba(128, 128, 128, 0.361);
                margin: auto auto 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .sectionHeading {
                        font-size: 30px;
                        text-transform: capitalize;
                        font-weight: 600;
                        display: inline-block;
                        padding-right: 10px;
                        position: relative;
                        color: #313131;
                        padding-bottom: 10px;
                        &::after {
                            content: "";
                            position: absolute;
                            left: 0;
                            bottom: -2px;
                            height: 3px;
                            width: 100%;
                            background-color:  #006a4e;
                            }
                        }
                }


`
export default CategoryTitleStyle;