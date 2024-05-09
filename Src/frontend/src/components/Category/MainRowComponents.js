import { MainSelectOptionSelected, MainSelectOption } from "./Category.style";

function MainSelectBtn({ name, img, mainTab, setMainTab, setDetailTab }) {
    let isSelected = mainTab == name;
    return (
        isSelected ?
            <MainSelectOptionSelected>
                <img src={img} alt={name}></img>
                <p>{name}</p>
            </MainSelectOptionSelected> :

            <MainSelectOption onClick={() => {
                setMainTab(name)
                setDetailTab('')
            }}>
                <img src={img} alt={name}></img>
                <p>{name}</p>
            </MainSelectOption>
    )
}


export {MainSelectBtn};