import styled from "styled-components";
import { colors } from "../../constants/Colors"

export const Container = styled.div`
background-color: ${colors.Orange};
width: 320px;
text-align: center;
justify-content: center;
align-content: center;
border: 2px solid ${colors.Orange};
border-radius: 20px;
`
export const MonthText = styled.h2`
font-size: 30px;
margin: 10px;
color: ${colors.White};
`
export const CardContainer = styled.div`
background-color: ${colors.White};
width: 300px;
height: 310px;
overflow-x: hidden;
overflow-y: auto;
margin: auto;
padding: 10px;
border-bottom-left-radius: 18px;
border-bottom-right-radius: 18px;
`
export const Card = styled.div`
width: 300px;
height: 90px;
text-align: left;
&:after {
    content: "";
    display: block;
    width: 280px;
    border-bottom: 1px solid ${colors.Gray};
    margin: 0px auto;
}
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