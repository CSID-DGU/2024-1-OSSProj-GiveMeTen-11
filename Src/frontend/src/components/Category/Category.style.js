import styled from "styled-components";
import { colors } from "../../constants/Colors";

const div = styled.div`
box-sizing: border-box;
`

export const Container = styled(div)`
width: 600px;
height: 350px;
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
`

export const CategorySelectCol = styled(div)`
width: 20%;
`

export const CategoryShowCol = styled(div)`
width: 80%;
border-left: 1px solid ${colors.Grey};
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