import styled from 'styled-components';


const ServiceItemStyle=styled.div` 

                .serviceItem {
                text-align: center;
                padding: 40px 15px 15px;
                box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
                background: #fff;
                border-radius: 4px;
                height: 250px;
                .serviceItemIcon {
                            margin-bottom: 13px;
                           
                                img {
                                    width: 60px;
                                    }
                                }
                 .serviceContentTitle {
                        font-size: 17px;
                        font-weight: 500;
                        color: #313131;
                        margin-bottom: 5px;
                        text-transform: capitalize;
                 }
                        .serviceSubContentTitle {
                                font-size: 14px;
                                font-weight: 400;
                                color: #615e58;
                                line-height: 24px;
                                    }
                        
                }
                

`
export default ServiceItemStyle;