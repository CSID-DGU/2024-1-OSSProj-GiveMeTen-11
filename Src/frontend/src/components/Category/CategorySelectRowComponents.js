import { CategorySelectCol, CategorySelectOption, CategorySelectOptionSelected, CheckboxContainer, CheckboxForm } from "./Category.style";


function CategoryShowTab({ detailTab }) {
    let checkbox = {
        '':[],
        '일반공지': ['전체'],
        '학사공지': ['수업/성적', '학적', '프로그램 및 특강', '계절학기', '교직', '대학원', '기타', '국내학점교류', '등록'],
        '입시공지': ['전체'],
        '공과대학': ['전체'],
        '이과대학': ['전체'],
        '문과대학': ['전체']
    }[detailTab]
    return (
        <CheckboxForm>
            {checkbox.map((a) => {
                return (<CategoryCheckbox name={a}></CategoryCheckbox>)
            }
        )}
        </CheckboxForm>
    )
}

function CategorySelectTab({ mainTab, detailTab, setDetailTab }) {
    return {
        '': <CategorySelectCol></CategorySelectCol>,
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

function CategoryCheckbox({ name }) {
    return (
        <CheckboxContainer>
            <input id={name} type='checkbox'></input>
            <label for={name}>{name}</label>
        </CheckboxContainer>
    )
}

export {CategorySelectBtn, CategoryShowTab, CategorySelectTab, CategoryCheckbox};