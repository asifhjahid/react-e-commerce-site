import styled from 'styled-components';


const LeftSideBarListItemsStyle = styled.div`

                .leftSideBarTopNav {
                    /* border-bottom: 1px solid hsla(0, 0%, 50.2%, 0.21176470588235294); */
                    margin-top: 0;
                    padding: 0 20px;
                        .leftSideBarTopNavItem{
                            margin-bottom: 2px;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                            justify-content: center;
                            
                                .leftSideBarTopNavItemLink {
                                        font-size: 15px;
                                        color: #006a4e;
                                        font-weight: 700;
                                        padding: 10px;
                                        text-decoration: none;
                                        font-family: sans-serif;
                                        .categoryImageIcon {
                                                    width: 30px;
                                                    position: absolute;
                                                    margin-top: -3px;
                                                    }
                                        .marginLeft{
                                            margin-left: 44px;
                                           
                                        }  
  
                                                
                                        }
                                    &:hover{
                                        padding-left: 12px;
                                     }
                                    }
                                    
                                }


`

export default LeftSideBarListItemsStyle;