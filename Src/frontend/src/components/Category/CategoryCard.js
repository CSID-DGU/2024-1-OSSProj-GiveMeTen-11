import { useEffect, useState } from 'react';
import basicNotice from '../../images/CategoryCard/basicNotice.png'
import classNotice from '../../images/CategoryCard/classNotice.png'
import { MainSelectBtn } from './MainRowComponents';
import { CategoryShowTab, CategorySelectTab } from './CategorySelectRowComponents'
import { CategorySummaryTab, CategorySubmitTab } from './CategoryShowRowComponents'
import { CategorySelectRow, CategoryShowCol, CategoryShowRow, Container, MainSelectRow } from './Category.style';

function CategoryCard({data}) {
    let [mainTab, setMainTab] = useState('')
    let [detailTab, setDetailTab] = useState('')
    let [selectedCategory, setSelectedCategory] = useState([])

    data = data
    useEffect(() => {
        // 읽어들인 카테고리 정보 반영
        data["categories"].map((a) => {
            let temp = a["big"] + " - " + a["detail"]
            setSelectedCategory([...selectedCategory, temp])
        })
    }, [])


    return (
        <Container>
            <MainSelectRow>
                <MainSelectBtn name={'공지사항'} img={basicNotice} mainTab={mainTab} setMainTab={setMainTab} setDetailTab={setDetailTab}></MainSelectBtn>
                <MainSelectBtn name={'학과별 공지'} img={classNotice} mainTab={mainTab} setMainTab={setMainTab} setDetailTab={setDetailTab}></MainSelectBtn>
            </MainSelectRow>
            <CategorySelectRow>
                <CategorySelectTab mainTab={mainTab} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectTab>
                <CategoryShowCol>
                    <CategoryShowTab detailTab={detailTab} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryShowTab>
                </CategoryShowCol>
            </CategorySelectRow>
            <CategoryShowRow>
                <CategorySummaryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <CategorySubmitTab selectedCategory={selectedCategory}/>
            </CategoryShowRow>
        </Container>
    )
}

export default CategoryCard;