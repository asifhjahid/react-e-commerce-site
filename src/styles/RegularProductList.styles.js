import styled from "styled-components";


    const RegularProductListStyle = styled.div`
                    
                        .productCart{
                            display: grid;
                            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                            grid-gap: 20px;
                             
                            overflow: hidden;
                            background: #fff;
                            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                            /* height: 200px; */
                            /* width: 255px; */
                           
                        }
                        /* .regularProduct{
                                height: 200px;
                            } */
                            


            
    `
    export default RegularProductListStyle;