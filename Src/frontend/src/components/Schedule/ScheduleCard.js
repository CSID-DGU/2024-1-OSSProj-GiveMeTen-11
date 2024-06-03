import React from "react";
import {Container, MonthText, CardContainer, Card, DateText, ContentsText, DetailText} from './Schedule.style'

function ScheduleCard() {
    return (
        <Container>
            <MonthText>06 Jun</MonthText>
            <CardContainer>
                <ScheduleElementCard date="2024.06.03. ~ 2024.06.07." contents={"2024-1학기 교육봉사 확인서, 응급처치및심폐소생술 타기관이수 확인서 제출"} detail={"(주관부서: 사범대학 교직부)"} />
                <ScheduleElementCard date="2024.06.03. ~ 2024.06.10." contents={"전과(전공변경) 신청"} detail={"(주관부서: 교무팀)"} />
                <ScheduleElementCard date="2024.06.03. ~ 2024.06.10." contents={"졸업연기 신청"} detail={"(주관부서: 교무팀)"} />
                <ScheduleElementCard date="2024.06.03. ~ 2024.06.21." contents={"단일전공/다전공(복수∙연계∙융합∙학생설계전공) 결정 및 신청"} detail={"(주관부서: 교무팀/사범대학 교직부)"} />
                <ScheduleElementCard date="2024.06.03. ~ 2024.06.21." contents={"나노∙마이크로디그리 신청"} detail={"(주관부서: 교무팀)"} />
                <ScheduleElementCard date="2024.06.03. ~ 2024.06.24." contents={"1학기 성적처리(입력)"} detail={"(주관부서: 담당교원)"} />
                <ScheduleElementCard date="2024.06.05. ~ 2024.06.07." contents={"취득교과목 학점포기 신청"} detail={"(주관부서: 교무팀)"} />
                <ScheduleElementCard date="2024.06.05. ~ 2024.06.21." contents={"2024-2학기 교내장학신청(복지,새터민,국가유공자,종단추천)"} detail={"(주관부서: 장학팀)"} />
                <ScheduleElementCard date="2024.06.07. ~ 2024.06.13." contents={"1학기 기말시험"} detail={""} />
                <ScheduleElementCard date="2024.06.14." contents={"종강"} detail={""} />
                <ScheduleElementCard date="2024.06.17. ~ 2024.06.21." contents={"2024-1학기 보강 시행기간"} detail={"2024-1학기 보강 시행기간"} />
                <ScheduleElementCard date="2024.06.24. ~ 2024.06.28." contents={"2024-2학기 학·석사연계과정 신청"} detail={"(주관부서: 일반대학원)"} />
                <ScheduleElementCard date="2024.06.24. ~ 2024.07.12." contents={"여름 계절학기"} detail={"(주관부서: 교무팀)"} />
                <ScheduleElementCard date="2024.06.24. ~ 2024.08.31." contents={"여름 방학"} detail={""} />
                <ScheduleElementCard date="2024.06.25. ~ 2024.06.27." contents={"1학기 성적처리(공시,정정)"} detail={"(주관부서: 담당교원)"} />
                <ScheduleElementCard date="2024.06.25. ~ 2024.06.28." contents={"2학기 복학 신청(1차)"} detail={"(주관부서: 교무팀/일반대학원)"} />
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