import ScheduleCard from '../../components/Schedule/ScheduleCard.js';
import CategoryCard from '../../components/Category/CategoryCard.js';
import NoticeCard from '../../components/Notice/NoticeCard.js';
import Navbar from '../../components/Nav/Navbar.js';
import MainTitle from '../../components/MainTitle/MainTitle.js';
import { Container, ConponentContainer, Col, Row, Mt50, Background } from "./Main.style.js";
import { useEffect, useState } from 'react';

function Main() {
    const [login, setLogin] = useState(false);
    const [scheduleData, setScheduleData] = useState([]);
    const [categoryData, setCategoryData] = useState({
        "categories": [
        ]
    });

    useEffect(() => {
        const accessTokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('access='));
        const accessToken = accessTokenCookie ? accessTokenCookie.split('=')[1] : '';
        const fetchScheduleData = async () => {
            try {
                const response = await fetch('http://15.164.59.41/api/v1/notice/schedule', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setScheduleData(data)
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        const fetchCategoryData = async () => {
            try {
                const response = await fetch('http://15.164.59.41/api/v1/notice/check', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setCategoryData(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        fetchScheduleData();
        if (accessToken) {
            setLogin(true);
            fetchCategoryData();
        }
    }, []);

    useEffect(() => {
        console.log(`categoryData: ${JSON.stringify(categoryData)}`);
    }, [categoryData]);

    return (
        <>
            <Background />
            <Container>
                <Navbar login={login} setLogin={setLogin} />
                <ConponentContainer>
                    <MainTitle />
                    <Row>
                        <Col>
                            <ScheduleCard data={scheduleData}/>
                        </Col>
                        <Col>
                            <CategoryCard data={categoryData} isLogin={login} />
                        </Col>
                    </Row>
                    <Mt50>
                        <NoticeCard data={categoryData} />
                    </Mt50>
                </ConponentContainer>
            </Container>
        </>
    );
}

export default Main;