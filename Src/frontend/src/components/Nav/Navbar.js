import { Container, LeftCol, RightCol, OrangeBtn, DisplayFlex } from "./Navbar.style";
import { useNavigate } from 'react-router-dom';
import MainIcon from "../.././images/Main/alarm.png"
import MainTitle from "../.././images/Main/dnow.png"


function Navbar({login, setLogin}) {
    const navigate = useNavigate();
    return (
        <Container>
            <LeftCol onClick={()=>{navigate('/')}}>
                <img src={MainIcon} alt="MainIcon"></img>
                <img src={MainTitle} alt="MainTitle"></img>
            </LeftCol>
            <RightCol>
                <BtnContainer login={login} setLogin={setLogin}></BtnContainer>
            </RightCol>
        </Container>
    )
}

function BtnContainer({login, setLogin}) {
    const navigate = useNavigate();
    return (
        login ?
        <OrangeBtn onClick={()=>{
            function deleteCookie(name) {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
            deleteCookie('access')
            deleteCookie('refresh')
            window.location.reload()}}>Logout</OrangeBtn>
        :
        <DisplayFlex>
            <p onClick={()=>{navigate('/register')}}>회원가입</p>
            <OrangeBtn onClick={()=>{navigate('/login')}}>Login</OrangeBtn>
        </DisplayFlex>
    )
}

export default Navbar;