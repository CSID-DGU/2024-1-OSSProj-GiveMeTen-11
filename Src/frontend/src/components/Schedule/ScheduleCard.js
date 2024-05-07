import React from "react";
import {Container, MonthText, CardContainer, Card, DateText, ContentsText, DetailText} from './Schedule.style'

function ScheduleCard() {
    return (
        <Container>
            <MonthText>03 Mar</MonthText>
            <CardContainer>
                <ScheduleElementCard date="2024.03.02." contents={"대학원 외국어(영어, 한국어)시험일"} detail={"(주관부서: 일반대학원)"} />
                <ScheduleElementCard date="2024.03.04." contents={"개강"} detail={""} />
                <ScheduleElementCard date="2024.03.04. ~ 2024.03.11." contents={"수강신청 확인 및 정정"} detail={"(주관부서: 일반대학원)"} />
                <ScheduleElementCard date="2024.03.04. ~ 2024.03.11." contents={"수강신청 확인 및 정정"} detail={"(주관부서: 일반대학원)"} />
            </CardContainer>
        </Container>
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