import styled from 'styled-components';

const CartStyle = styled.div`
            padding: 50px 0;
           .productCart{
                            display: grid;
                            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                            grid-gap: 20px;
                             
                            overflow: hidden;
                            /* background: #fff; */
                           

                            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                            /* height: 200px; */
                            /* width: 255px; */
                           
                        }

        .container{
            /* background-color: #ffffff; */
            display: flex;
            justify-content: space-evenly;
            /* flex-direction:row; */
            /* justify-content: space-around; */
            /* margin: 0 auto; */
            flex-wrap: wrap;
           
        }
        .cart{
            /* background-color: aqua; */
            /* width: 200px; */
            height: 400px;
            /* margin: 5px 0;
            padding: 0 4px; */
            box-shadow: 1px 1px 2px grey;
            img{
            width: 90px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* object-fit: contain; */
            padding: 10px 0;
            margin: 0 auto;
            }
        }
        .content{
            margin-bottom: 20px;
            height: 250px;
            
            h2{
            text-align: center;
            color: #000000;
            font-size: 10px;
            font-family: sans-serif;
            margin-bottom: 10px;
            overflow: hidden;

            }
            p{
            font-size: 10px;
            font-family: sans-serif;
            padding: 5px;
            overflow: hidden;
            }
        }
        
        
        
        

`

export default CartStyle;