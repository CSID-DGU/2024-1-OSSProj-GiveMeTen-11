import ScheduleCard from '../../components/Schedule/ScheduleCard.js'
import CategoryCard from '../../components/Category/CategoryCard.js';
import NoticeCard from '../../components/Notice/NoticeCard.js';
import { Container, ClearBoth, FloatLeft, W50, CenterRow } from './Main.style.js';


function Main() {
    return (
        <Container>
            <CenterRow>
                <FloatLeft><W50><ScheduleCard /></W50></FloatLeft>
                <FloatLeft><W50><CategoryCard /></W50></FloatLeft>
                <ClearBoth></ClearBoth>
            </CenterRow>
            <br></br>
            <CenterRow>
                <NoticeCard />
            </CenterRow>
        </Container>
    )
}

export default Main;