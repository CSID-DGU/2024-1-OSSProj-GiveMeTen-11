import { CategorySelectCol, CategorySelectOption, CategorySelectOptionSelected, CheckboxContainer, CheckboxForm, CheckboxSelectedContainer, CategoryGrid } from "./Category.style";


function CategoryShowTab({ detailTab, selectedCategory, setSelectedCategory }) {
    let checkbox = {
        '': [],
        '일반공지': ['일반공지-전체'],
        '학사공지': ['학사공지-수업/성적', '학사공지-학적', '학사공지-프로그램 및 특강', '학사공지-계절학기', '학사공지-교직', '학사공지-대학원', '학사공지-기타', '학사공지-국내학점교류', '학사공지-등록'],
        '입시공지': ['입시공지-전체'],
        '공과대학': ['공과대학-전체'],
        '이과대학': ['이과대학-전체'],
        '문과대학': ['문과대학-전체']
    }[detailTab]
    return (
        <CheckboxForm>
            {checkbox.map((a) => {
                let selected = selectedCategory.includes(a)
                return (<CategoryCheckGrid name={a} selected={selected} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryCheckGrid>)
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

function CategoryCheckGrid({ name, selected, selectedCategory, setSelectedCategory }) {
    return (
        <CategoryGrid>
            <CategoryCheckbox name={name} selected={selected} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </CategoryGrid>
    )
}

function CategoryCheckbox({ name, selected, selectedCategory, setSelectedCategory }) {
    return (
        selected ?
            <CheckboxSelectedContainer onClick={()=>{
                setSelectedCategory(selectedCategory.filter((e)=>e !== name))
            }}>
                <p>{name}</p>
            </CheckboxSelectedContainer> :
            <CheckboxContainer onClick={()=>{
                setSelectedCategory([...selectedCategory, name])
            }}>
                <p>{name}</p>
            </CheckboxContainer>
    )
}

export { CategoryShowTab, CategorySelectTab };