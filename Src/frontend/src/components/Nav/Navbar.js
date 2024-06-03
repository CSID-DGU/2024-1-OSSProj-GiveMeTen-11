import { Container, LeftCol, RightCol, OrangeBtn } from "./Navbar.style";
import MainIcon from "../.././images/Main/alarm.png"
import MainTitle from "../.././images/Main/dnow.png"


function Navbar() {
    return (
        <Container>
            <LeftCol>
                <img src={MainIcon} alt="MainIcon"></img>
                <img src={MainTitle} alt="MainTitle"></img>
            </LeftCol>
            <RightCol>
                <OrangeBtn>Login</OrangeBtn>
            </RightCol>
        </Container>
    )


}

export default Navbar;