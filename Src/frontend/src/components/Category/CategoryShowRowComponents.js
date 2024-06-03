import  { CheckboxSummaryCardContainer } from "./Category.style";

function CategorySummaryTab({selectedCategory, setSelectedCategory}) {
    return (
        selectedCategory.map((a)=>{
            return (<CategorySummaryCard name={a} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>)
        })
    )
}

function CategorySummaryCard({name, selectedCategory, setSelectedCategory}) {
    return (
        <CheckboxSummaryCardContainer>
            <p>{name}</p>
            <button onClick={()=>{setSelectedCategory(selectedCategory.filter((e)=>e !== name))}}><p>X</p></button>
        </CheckboxSummaryCardContainer>
    )
}

export { CategorySummaryTab }