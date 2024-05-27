import styled from "styled-components";
import { colors } from "../../constants/Colors"

const div = styled.div`
box-sizing: border-box;
`
const button = styled.button`
box-sizing: border-box;
`
export const Container = styled(div)`
height: 50px;
max-width: 1300px;
margin: auto;
display: flex;
justify-content: space-between;
& img {
    margin-left: 10px;
    height: 100%;
}
`

export const OrangeBtn = styled(button)`
background: ${colors.Orange};
color: ${colors.White};
border: none;
border-radius: 5px;
padding: 5px 30px 5px 30px;
transition: all 0.2s;
font-weight: 600;
box-shadow: 5px 5px 5px 0px rgba(254,142,3,0.35);
-webkit-box-shadow: 5px 5px 5px 0px rgba(254,142,3,0.35);
-moz-box-shadow: 5px 5px 5px 0px rgba(254,142,3,0.35);

& > p {
    margin: 0;
}

&:hover {
    background: ${colors.Orange_Dark};
}
&:active {
    background: ${colors.Black};
}
`


export const RightCol = styled(div)`
& > * {
    margin-left: 20px;
}
`