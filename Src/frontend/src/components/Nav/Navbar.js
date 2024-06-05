import { Container, LeftCol, RightCol, OrangeBtn } from "./Navbar.style";
import { useNavigate } from 'react-router-dom';
import MainIcon from "../.././images/Main/alarm.png"
import MainTitle from "../.././images/Main/dnow.png"


function Navbar() {
    const navigate = useNavigate();
    return (
        <Container>
            <LeftCol onClick={()=>{navigate('/')}}>
                <img src={MainIcon} alt="MainIcon"></img>
                <img src={MainTitle} alt="MainTitle"></img>
            </LeftCol>
            <RightCol>
                <OrangeBtn onClick={()=>{navigate('/login')}}>Login</OrangeBtn>
            </RightCol>
        </Container>
    )


}

export default Navbar;