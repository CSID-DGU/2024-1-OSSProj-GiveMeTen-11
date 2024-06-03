import { CategorySelectCol, CategorySelectOption, CategorySelectOptionSelected, CheckboxContainer, CheckboxForm, CheckboxSelectedContainer, CategoryGrid } from "./Category.style";


function CategoryShowTab({ detailTab, selectedCategory, setSelectedCategory }) {
    let checkbox = {
        '': [],
        '일반공지': ['전체'],
        '학사공지': ['전체', '수업/성적', '학적', '프로그램 및 특강', '계절학기', '교직', '대학원', '기타', '국내학점교류', '등록'],
        '입시공지': ['전체'],
        '장학공지': ['전체'],
        '연구공지': ['전체'],
        '국제공지': ['전체', '국제교류', '유학생', '외국인입학', '외부행사', '유학생 취업'],
        '학술공지': ['전체'],
        '안전공지': ['전체', '안내', '자료실'],
        '행사공지': ['전체'],
        '공과대학': ['공과대학-전체'],
        '이과대학': ['이과대학-전체'],
        '문과대학': ['문과대학-전체']
    }[detailTab]
    return (
        <CheckboxForm>
            {checkbox.map((a) => {
                let id = detailTab+' - '+a // id 설정
                let selected = selectedCategory.includes(id) // 이미 선택됐는지 확인
                return (<CategoryCheckGrid id={id} name={a} selected={selected} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryCheckGrid>)
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
                <CategorySelectBtn name={'장학공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'연구공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'국제공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'학술공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'안전공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'행사공지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
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

function CategoryCheckGrid({ id, name, selected, selectedCategory, setSelectedCategory }) {
    return (
        <CategoryGrid>
            <CategoryCheckbox id={id} name={name} selected={selected} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </CategoryGrid>
    )
}

function CategoryCheckbox({ id, name, selected, selectedCategory, setSelectedCategory }) {
    return (
        selected ?
            <CheckboxSelectedContainer onClick={()=>{
                setSelectedCategory(selectedCategory.filter((e)=>e !== id))
            }}>
                <p>{name}</p>
            </CheckboxSelectedContainer> :
            <CheckboxContainer onClick={()=>{
                setSelectedCategory([...selectedCategory, id])
            }}>
                <p>{name}</p>
            </CheckboxContainer>
    )
}

export { CategoryShowTab, CategorySelectTab };