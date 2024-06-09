import { Container, MainTable, TableHead, TableBody, W30td, W70td, CategoryDetail, ContentsCell, Contents, Date } from "./Notice.style";

function NoticeCard({data}) {
    return (
        <Container>
            <MainTable>
                <TableHead>
                    <tr>
                        <W30td>카테고리</W30td>
                        <W70td>내용</W70td>
                    </tr>
                </TableHead>
                <NoticeContentsList data={data}></NoticeContentsList>
            </MainTable>
        </Container>
    )
}

function NoticeContentsList({data}) {
    return (
        data["categories"].map((a, i) => {
            return <NoticeContents key={i} categoryTitle={a.big} categoryDetail={a.detail} contents={a.title} date={a.date} url={a.url}></NoticeContents>
        })
    )
}

function NoticeContents({categoryTitle, categoryDetail, contents, date, url}) {
    return (
        <TableBody>
            <tr>
                <td>{categoryTitle}/<CategoryDetail>{categoryDetail}</CategoryDetail></td>
                <ContentsCell>
                    <Contents onClick={()=>{window.open(url)}}>{contents}</Contents>
                    <Date>{date}</Date>
                </ContentsCell>
            </tr>
        </TableBody>
    )
}

export default NoticeCard;