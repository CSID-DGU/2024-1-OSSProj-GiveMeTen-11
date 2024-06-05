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
                let data_list = []
                selectedCategory.map((element) => {
                    // dash 앞뒤로 나누기
                    let big = element.substring(0, element.indexOf(' - '));
                    let detail = element.substring(element.indexOf(' - ') + 3);
                    let data = { "big": big, "detail": detail }
                    data_list = [...data_list, data]
                })
                let send = JSON.stringify({"categories" : data_list})
                console.log(send);
            }}>알리미 저장</SubmitBtn>
        </CategorySubmitContainer>
    )
}

export { CategorySummaryTab, CategorySubmitTab }