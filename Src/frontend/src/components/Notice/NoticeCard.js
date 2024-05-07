import { Container, MainTable, TableHead, TableBody, CategoryDetail, ContentsCell, Contents, Date } from "./Notice.style";

function NoticeCard() {
    return (
        <Container>
            <MainTable>
                <TableHead>
                    <tr>
                        <td>카테고리</td>
                        <td>내용</td>
                    </tr>
                </TableHead>
                <NoticeContents categoryTitle='학사공지' categoryDetail='프로그램 및 특강' contents='2024학년도 여름학기 현장실습 교과목 운영 안내' date='2024.04.26'/>
                <NoticeContents categoryTitle='학사공지' categoryDetail='프로그램 및 특강' contents='2024학년도 여름학기 현장실습 교과목 운영 안내' date='2024.04.26'/>
            </MainTable>

        </Container>
    )
}

function NoticeContents({categoryTitle, categoryDetail, contents, date}) {
    return (
        <TableBody>
            <tr>
                <td>{categoryTitle}/<CategoryDetail>{categoryDetail}</CategoryDetail></td>
                <ContentsCell>
                    <Contents>{contents}</Contents>
                    <Date>{date}</Date>
                </ContentsCell>
            </tr>
        </TableBody>
    )
}

export default NoticeCard;