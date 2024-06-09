import { useEffect, useState } from 'react';
import basicNotice from '../../images/CategoryCard/basicNotice.png'
import classNotice from '../../images/CategoryCard/classNotice.png'
import { MainSelectBtn } from './MainRowComponents';
import { CategoryShowTab, CategorySelectTab } from './CategorySelectRowComponents'
import { CategorySummaryTab, CategorySubmitTab } from './CategoryShowRowComponents'
import { CategorySelectRow, CategoryShowCol, CategoryShowRow, Container, MainSelectRow, CategoryNoticeP } from './Category.style';
import { useNavigate } from 'react-router-dom';

function CategoryCard({data, isLogin}) {
    let navigate = useNavigate();
    let [mainTab, setMainTab] = useState('');
    let [detailTab, setDetailTab] = useState('');
    let [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(() => {
        // 읽어들인 카테고리 정보 반영
        const newCategories = data["categories"].map(a => a["big"] + " - " + a["detail"]);
        setSelectedCategory(newCategories);
    }, [data]); // data가 변경될 때마다 실행

    return (
        !isLogin ?
        <Container>
            <MainSelectRow>
                <MainSelectBtn name={'공지사항'} img={basicNotice} mainTab={mainTab} setMainTab={setMainTab} setDetailTab={setDetailTab} />
                <MainSelectBtn name={'학과별 공지'} img={classNotice} mainTab={mainTab} setMainTab={setMainTab} setDetailTab={setDetailTab} />
            </MainSelectRow>
            <CategorySelectRow>
                <CategorySelectTab mainTab={mainTab} detailTab={detailTab} setDetailTab={setDetailTab} />
                <CategoryShowCol>
                    <CategoryShowTab detailTab={detailTab} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </CategoryShowCol>
            </CategorySelectRow>
            <CategoryShowRow>
                <CategorySummaryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <CategorySubmitTab selectedCategory={selectedCategory} />
            </CategoryShowRow>
        </Container>
        :
        <Container>
            <CategoryNoticeP><span onClick={()=>{navigate('/login')}}>로그인</span> 후 이용해주세요</CategoryNoticeP>
        </Container>
    )
}

export default CategoryCard;
