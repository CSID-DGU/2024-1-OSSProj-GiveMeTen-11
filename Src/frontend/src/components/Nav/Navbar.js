import { Container, RightCol, OrangeBtn } from "./Navbar.style";
import MainIcon from "../.././images/Main/alarm.png"
import MainTitle from "../.././images/Main/dnow.png"
import NavActive from "../.././images/Main/active.png"


function Navbar() {
    return (
        <Container>
            <div>
                <img src={MainIcon} alt="MainIcon"></img>
                <img src={MainTitle} alt="MainTitle"></img>
            </div>
            <RightCol>
                <img src={NavActive} alt="NavActive"></img>
                <OrangeBtn><p>Login</p></OrangeBtn>
            </RightCol>
        </Container>
    )


}

export default Navbar;