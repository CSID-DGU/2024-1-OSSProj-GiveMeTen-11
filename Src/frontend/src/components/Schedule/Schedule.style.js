import styled from "styled-components";
import { colors } from "../../constants/Colors"

export const Container = styled.div`
background-color: ${colors.Orange};
width: 320px;
height: 400px;
text-align: center;
justify-content: center;
align-content: center;
border: 2px solid ${colors.Orange};
box-shadow: 4px 4px 5px 0px rgba(55,49,80,0.30);
-webkit-box-shadow: 4px 4px 5px 0px rgba(55,49,80,0.30);
-moz-box-shadow: 4px 4px 5px 0px rgba(55,49,80,0.30);
/* border-radius: 20px; */
`
export const MonthText = styled.h2`
font-size: 30px;
margin: 10px;
color: ${colors.White};
font-weight: 600;
`
export const CardContainer = styled.div`
background-color: ${colors.White};
width: 100%;
height: 84%;
overflow-x: hidden;
overflow-y: auto;
margin: auto;
/* border-bottom-left-radius: 18px;
border-bottom-right-radius: 18px; */
`
export const Card = styled.div`
min-height: 25%;
text-align: left;
border-bottom: 1px solid ${colors.Grey}
`
export const DateText = styled.div`
font-size: 18px;
font-weight: 700;
margin : 10px;
`
export const ContentsText = styled.div`
font-size: 15px;
margin : 10px 10px 5px 10px;
`
export const DetailText = styled.div`
font-size: 12px;
margin : 5px 10px 10px 10px;
height: 12px;
`