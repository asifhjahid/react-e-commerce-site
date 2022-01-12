import styled from "styled-components";


const LeftSideBarStyle =styled.div`

                .leftSideBar {
                width: 290px;
                box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
                position: fixed;
                left: 0;
                top: 80px;
                height: calc(100vh - 60px);
                background: #ffffff;
                overflow: auto;
                z-index: 9;
                text-decoration: none;
                list-style: none;
                /* display: none; */
                

            @media (min-width: 768px) {
            .leftSideBar {
                left: 0;
                padding-top: 12px;
                display: block;
                box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
                border-right: 1px solid rgba(119, 108, 108, 0.30980392156862746);
            }
        }
     }


`

export default LeftSideBarStyle;