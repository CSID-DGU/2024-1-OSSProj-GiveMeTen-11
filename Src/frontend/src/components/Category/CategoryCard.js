import { useState } from 'react';
import basicNotice from '../../images/basicNotice.png'
import classNotice from '../../images/classNotice.png'
import { CategorySelectCol, CategorySelectRow, CategoryShowCol, CategoryShowRow, Container, MainSelectOption, MainSelectRow, CategorySelectOption, MainSelectOptionSelected, CategorySelectOptionSelected } from './Category.style';

function CategoryCard() {
    let [mainTab, setMainTab] = useState('공지사항')
    let [detailTab, setDetailTab] = useState('일반공지')

    return (
        <Container>
            <MainSelectRow>
                <MainSelectBtn name={'공지사항'} img={basicNotice} mainTab={mainTab} setMainTab={setMainTab}></MainSelectBtn>
                <MainSelectBtn name={'학과별 공지'} img={classNotice} mainTab={mainTab} setMainTab={setMainTab}></MainSelectBtn>
            </MainSelectRow>
            <CategorySelectRow>
                <CategorySelectTab mainTab={mainTab} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectTab>
                <CategoryShowCol></CategoryShowCol>
            </CategorySelectRow>
            <CategoryShowRow></CategoryShowRow>
        </Container>
    )
}

function MainSelectBtn({ name, img, mainTab, setMainTab }) {
    let isSelected = mainTab == name;
    return (
        isSelected ?
            <MainSelectOptionSelected>
                <img src={img} alt={name}></img>
                <p>{name}</p>
            </MainSelectOptionSelected> :

            <MainSelectOption onClick={() => { setMainTab(name) }}>
                <img src={img} alt={name}></img>
                <p>{name}</p>
            </MainSelectOption>
    )
}

function CategorySelectTab({ mainTab, detailTab, setDetailTab }) {
    return {
        '공지사항':
            <CategorySelectCol>
                <CategorySelectBtn name={'일반공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'학사공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'입시공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
            </CategorySelectCol>,
        '학과별 공지':
            <CategorySelectCol>
                <CategorySelectBtn name={'공과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'이과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'문과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
            </CategorySelectCol>
    }[mainTab]


}

function CategorySelectBtn({ name, detailTab, setDetailTab }) {
    let isSelected = detailTab == name;
    return (
        isSelected ?
            <CategorySelectOptionSelected>
                <p>{name}</p><span>&gt;</span>
            </CategorySelectOptionSelected> :

            <CategorySelectOption onClick={() => { setDetailTab(name) }}>
                <p>{name}</p><span>&gt;</span>
            </CategorySelectOption>
    )
}

export default CategoryCard;