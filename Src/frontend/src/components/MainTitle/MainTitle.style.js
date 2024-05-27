import styled from "styled-components";
import { colors } from "../../constants/Colors";

const div = styled.div`
box-sizing: border-box;
`
const MainFont = styled.p`
font-size: 40px;
font-weight: 600;
`

export const FontContainer = styled(div)`
text-align: left;
`

export const FcBlack = styled(MainFont)`
color: ${colors.Black};
margin-bottom: 0;
`

export const FcOrange = styled(MainFont)`
color: ${colors.Orange};
`

export const SubFont = styled.p`
font-size: 16px;
color: ${colors.Grey};
`

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const W80Img = styled.img`
width: 50%
`