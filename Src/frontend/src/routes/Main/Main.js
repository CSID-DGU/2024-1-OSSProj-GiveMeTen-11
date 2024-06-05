import ScheduleCard from '../../components/Schedule/ScheduleCard.js'
import CategoryCard from '../../components/Category/CategoryCard.js';
import NoticeCard from '../../components/Notice/NoticeCard.js';
import Navbar from '../../components/Nav/Navbar.js';
import MainTitle from '../../components/MainTitle/MainTitle.js';
import { Container, ConponentContainer, Col, Row, Mt50, Background } from "./Main.style.js";
import { useEffect } from 'react';


function Main() {
    let data = {
        "categories": [
            {
                "big": "학사공지",
                "detail": "전체",
                "url": "https://www.dongguk.edu/article/HAKSANOTICE/list",
                "title": null,
                "author": null,
                "date": null
            }
        ]
    }

    useEffect(() => {
        console.log(document.cookie)
    }, [])


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
                            <CategoryCard data={data} />
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