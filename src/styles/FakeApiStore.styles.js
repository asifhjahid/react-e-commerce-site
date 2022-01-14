import styled from 'styled-components';

const CartStyle = styled.div`
           

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
            background-color: aqua;
            width: 200px;
            height: 250px;
            margin: 5px 0;
            padding: 0 4px;
            box-shadow: 2px 2px 10px #fff;
        }
        .content{
            margin-bottom: 5px;
        }
        p{
            font-size: 10px;
            font-family: sans-serif;
        }
        h2{
            text-align: center;
            color: #ffffff;
            font-size: 10px;
            font-family: sans-serif;
        }
        
        img{
            width: 100px;
            height: 100px;
            object-fit: contain;
        }

`

export default CartStyle;