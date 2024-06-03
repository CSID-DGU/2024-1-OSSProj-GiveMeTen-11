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
        '불교대학': ['전체공지', '문화재학과'],
        '문과대학': ['전체공지', '국어국문문예창작학부', '영어영문학부', '일본학과', '중어중문학과', '철학과', '사학과'],
        '이과대학': ['전체공지', '수학과', '화학과', '통계학과', '물리/반도체과학부'],
        '법과대학': ['전체공지'],
        '사회과학대학': ['전체공지', '정치외교학전공', '행정학전공', '북한학전공', '경제학과', '국제통상학과', '사회학전공', '미디어커뮤니케이션학전공', '식품산업관리학과', '광고홍보학과', '사회복지학과'],
        '경찰사법대학': ['전체공지'],
        '경영대학': ['전체공지', '경영학과', '회계학과', '경영정보학과'],
        '바이오시스템대학': ['전체공지', '바이오환경과학과', '생명과학과', '식품생명공학과', '의생명공학과'],
        '공과대학': ['전체공지', '전자전기공학부', '정보통신공학과', '건설환경공학과', '화공생물공학과', '기계로봇에너지공학과', '건축공학부', '산업시스템공학과', '에너지신소재공학과'],
        'AI융합대학': ['전체공지', '컴퓨터공학전공', '멀티미디어소프트웨어공학전공'],
        '사범대학': ['전체공지', '교육학과', '국어교육과', '역사교육과', '지리교육과', '수학교육과', '가정교육과', '체육교육과'],
        '예술대학': ['전체공지', '미술학부', '연극학부', '영화영상학과', '한국음악과'],
        '약학대학': ['전체공지'],
        '미래융합대학': ['전체공지', '융합보안학과', '사회복지상담학과', '글로벌무역학과'],
        '다르마칼리지': ['전체공지'],
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
                <CategorySelectBtn name={'불교대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'문과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'이과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'법과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'사회과학대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'경찰사법대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'경영대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'바이오시스템대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'공과대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'AI융합대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'사범대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'예술대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'약학대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'미래융합대학'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
                <CategorySelectBtn name={'다르마칼리지'} detailTab={detailTab} setDetailTab={setDetailTab}></CategorySelectBtn>
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