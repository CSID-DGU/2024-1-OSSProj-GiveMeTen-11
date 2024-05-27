import ScheduleCard from '../../components/Schedule/ScheduleCard.js'
import CategoryCard from '../../components/Category/CategoryCard.js';
import NoticeCard from '../../components/Notice/NoticeCard.js';
import Navbar from '../../components/Nav/Navbar.js';
import MainTitle from '../../components/MainTitle/MainTitle.js';
import { Container, ConponentContainer, Col, Row, Mt50, Background } from "./Main.style.js";


function Main() {
    return (
        <>
            <Background></Background>
            <Container>
                <Navbar></Navbar>
                <ConponentContainer>
                    <MainTitle></MainTitle>
                    <Row>
                        <Col>
                            <ScheduleCard />
                        </Col>
                        <Col>
                            <CategoryCard />
                        </Col>
                    </Row>
                    <Mt50>
                        <NoticeCard />
                    </Mt50>
                </ConponentContainer>
            </Container>
        </>
    )
}

export default Main;