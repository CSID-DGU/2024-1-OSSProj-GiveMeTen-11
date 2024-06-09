import React from "react";
import { Container, MonthText, CardContainer, CardScrollContainer, Card, DateText, ContentsText, DetailText } from './Schedule.style'

function ScheduleCard({ data }) {
    return (
        <Container>
            <MonthText>06 Jun</MonthText>
            <CardContainer>
                <CardScrollContainer>
                    <ScheduleCardList data={data}></ScheduleCardList>
                </CardScrollContainer>
            </CardContainer>
        </Container>
    )
}

function ScheduleCardList({ data }) {
    return (
        data.map((a, i) => {
            return <ScheduleElementCard key={i} date={a.date} contents={a.title} detail={a.detail} />
        })
    )
}

// 인자로 날짜 / contents를 받아옴
function ScheduleElementCard({ date, contents, detail }) {
    return (
        <Card>
            <DateText>{date}</DateText>
            <ContentsText>{contents}</ContentsText>
            <DetailText>{detail}</DetailText>
        </Card>
    )
}

export default ScheduleCard;