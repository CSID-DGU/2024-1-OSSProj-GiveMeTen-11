import styled from "styled-components";
import { colors } from "../../constants/Colors";

const div = styled.div`
box-sizing: border-box;
`

export const Container = styled(div)`
padding: 50px;
position: relative;
`

export const ConponentContainer = styled(div)`
width: 1200px;
margin: auto;
`

export const Background = styled(div)`
position: absolute;
background: ${colors.BackgroundGray};
width: 100%;
height: 700px;
z-index: -1;
`

export const Row = styled(div)`
margin-top: 50px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Col = styled(div)`
`

export const Mt50 = styled(div)`
margin: auto;
margin-top: 100px;
& div {
    margin-left: auto;
    margin-right: auto;
}
`