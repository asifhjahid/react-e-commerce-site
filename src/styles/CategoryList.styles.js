import styled from "styled-components";

const CategoryListStyle =styled.div` 
            /* padding-bottom: 50px; */
            .categoryItems {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(163px, 1fr));
                grid-gap: 15px;
                overflow: hidden;
                background: #ffffff;
                /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); */
            }
            

`
export default CategoryListStyle;