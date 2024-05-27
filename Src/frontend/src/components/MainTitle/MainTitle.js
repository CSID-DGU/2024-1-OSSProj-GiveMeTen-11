import { Container, FontContainer, FcBlack, FcOrange, SubFont, W80Img } from './MainTitle.style'
import MainImage from "../.././images/Main/MainImage.png"


function MainTitle() {

    return (
        <Container>
            <FontContainer>
                <FcBlack>동국대학교 학생을 위한</FcBlack>
                <FcOrange>알리미 DNOW</FcOrange>
                <SubFont>카테고리를 선택하고 원하는 알림을 받으세요!</SubFont>
            </FontContainer>

            <W80Img src={MainImage} alt='MainImage'></W80Img>
        
        </Container>
    )
}

export default MainTitle;