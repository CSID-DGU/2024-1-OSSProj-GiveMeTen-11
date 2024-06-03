import { useState } from 'react';
import basicNotice from '../../images/CategoryCard/basicNotice.png'
import classNotice from '../../images/CategoryCard/classNotice.png'
import { MainSelectBtn } from './MainRowComponents';
import { CategoryShowTab, CategorySelectTab } from './CategorySelectRowComponents'
import { CategorySummaryTab } from './CategoryShowRowComponents'
import { CategorySelectRow, CategoryShowCol, CategoryShowRow, Container, MainSelectRow } from './Category.style';

function CategoryCard() {
    let [mainTab, setMainTab] = useState('')
    let [detailTab, setDetailTab] = useState('')
    let [selectedCategory, setSelectedCategory] = useState([])

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
                <CategorySummaryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </CategoryShowRow>
        </Container>
    )
}

export default CategoryCard;