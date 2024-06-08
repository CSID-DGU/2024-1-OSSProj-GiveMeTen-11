import { CategorySummaryContainer, CheckboxSummaryCardContainer, CheckboxSummaryCardBig, CategorySubmitContainer, SubmitBtn } from "./Category.style";

function CategorySummaryTab({ selectedCategory, setSelectedCategory }) {
    return (
        <CategorySummaryContainer>
            <CategorySummaryButtons selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </CategorySummaryContainer>
    )
}

function CategorySummaryButtons({ selectedCategory, setSelectedCategory }) {
    return (
        selectedCategory.map((a) => {
            return (<CategorySummaryCard name={a} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />)
        })
    )
}

function CategorySummaryCard({ name, selectedCategory, setSelectedCategory }) {
    // dash 앞뒤로 나누기
    let big = name.substring(0, name.indexOf(' - '));
    let detail = name.substring(name.indexOf(' - ') + 2);

    return (
        <CheckboxSummaryCardContainer onClick={() => { setSelectedCategory(selectedCategory.filter((e) => e !== name)) }}>
            <CheckboxSummaryCardBig>{big}/</CheckboxSummaryCardBig>
            <p>{detail}</p>
            <span>X</span>
        </CheckboxSummaryCardContainer>
    )
}

function CategorySubmitTab({ selectedCategory }) {

    return (
        <CategorySubmitContainer>
            <SubmitBtn onClick={() => {
                // Token 풀러오기
                const accessTokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('access='))
                let accessToken = ''
                if (accessTokenCookie) {
                    accessToken = accessTokenCookie.substring('access='.length);
                }

                let data_list = []
                selectedCategory.forEach((element) => {
                    // dash 앞뒤로 나누기
                    let big = element.substring(0, element.indexOf(' - '));
                    let detail = element.substring(element.indexOf(' - ') + 3);
                    let data = { "big": big, "detail": detail }
                    data_list.push(data);
                });

                // 데이터를 JSON 문자열로 변환
                const sendData = JSON.stringify({ "categories": data_list });

                // fetch를 사용하여 데이터 전송
                fetch('http://15.164.59.41/api/v1/notice/save', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: sendData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // 응답 데이터 처리
                    console.log(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });

            }}>알리미 저장</SubmitBtn>
        </CategorySubmitContainer>
    )
}

export { CategorySummaryTab, CategorySubmitTab }
