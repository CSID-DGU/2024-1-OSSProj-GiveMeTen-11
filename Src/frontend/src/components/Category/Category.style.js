import styled from "styled-components";
import { colors } from "../../constants/Colors";

const div = styled.div`
box-sizing: border-box;
`
const form = styled.form`
box-sizing: border-box;
`

export const Container = styled(div)`
width: 600px;
height: 400px;
background-color: ${colors.White};
border: 1px solid ${colors.Grey};
`

export const MainSelectRow = styled(div)`
width: 100%;
height: 15%;
display: flex;
`

export const CategorySelectRow = styled(div)`
width: 100%;
height: 60%;
border-top: 1px solid ${colors.Grey};
border-bottom: 1px solid ${colors.Grey};
display: flex;
`

export const CategoryShowRow = styled(div)`
width: 100%;
height: 25%;
padding: 5px;
display: flex;
flex-wrap: wrap;
overflow-y: auto;
`

export const CategorySelectCol = styled(div)`
width: 20%;
`

export const CategoryShowCol = styled(div)`
width: 80%;
border-left: 1px solid ${colors.Grey};
padding: 5px;
`

export const MainSelectOption = styled(div)`
width: 33%;
display: flex;
align-items: center;
border-right: 1px solid ${colors.Grey};
color: ${colors.Grey};
cursor: pointer;
transition: all .25s;
&:hover {
    background-color: ${colors.Grey};
    color: ${colors.White};
}
* {
    padding: 10px;
    margin: 0;
}
img {
    width: 25%;
}
`
export const MainSelectOptionSelected = styled(MainSelectOption)`
color: ${colors.Black};
font-weight: 600;
border: 3px solid ${colors.Black};
`

export const CategorySelectOption = styled(div)`
height: 15%;
padding: 5px;
display: flex;
justify-content: space-between;
cursor: pointer;
cursor: pointer;
transition: all .25s;
&:hover {
    background-color: ${colors.Grey};
    color: ${colors.White};
}
&:hover {
    background-color: grey;
}
p {
    margin: 0;
}
span {
    margin: 0;
}
`
export const CategorySelectOptionSelected = styled(CategorySelectOption)`
background-color: ${colors.SelectedGrey};
font-weight: 600;
`

export const CheckboxForm = styled(form)`
display: flex;
flex-wrap: wrap;
align-content: flex-start;
width: 100%;
height: 100%;
overflow: auto;
`

export const CategoryGrid = styled(div)`
width: 33%;
height: 30%;
`

const CheckboxStyle = styled(div)`
cursor: pointer;
width: 90%;
height: 90%;
font-size: 12px;
border-radius: 10px;
border: 1px solid black;
margin-left: auto;
margin-right: auto;
margin-bottom: 5px;
box-shadow: 3px 3px 3px 0px rgba(55,49,80,0.2);
-webkit-box-shadow: 3px 3px 3px 0px rgba(55,49,80,0.2);
-moz-box-shadow: 3px 3px 3px 0px rgba(55,49,80,0.);
transition: all 0.5s;
`

export const CheckboxContainer = styled(CheckboxStyle)`
&:hover {
    background: ${colors.Orange_Light};
}
`

export const CheckboxSelectedContainer = styled(CheckboxStyle)`
color: ${colors.White};
background: ${colors.Orange};
font-weight: 600;
border: 2px solid black;
`

export const CheckboxSummaryCardContainer = styled(div)`
display: flex;
align-items: center;
height: 35%;
font-size: 12px;
margin: 5px;
& > button {
    cursor: pointer;
    background: none;
    border: none;
    font-weight: 500;
    & > p {
        color: ${colors.Red};
    }
}
`