import { useState } from 'react';
import './Category.style.css'
import basicNotice from '../../images/basicNotice.png'
import classNotice from '../../images/classNotice.png'

function CategoryCard() {
    let [tab, setTab] = useState('일반공지')

    return (
        <div className='container'>
            <div className='tab-row'>
                <MainSelectList img={basicNotice} name='공지사항'/>
                <MainSelectList img={classNotice} name='학과별 공지'/>
            </div>
            <div className='clear-both'/>
            <div className='category-row'>
                <div className='category-select-column'>
                    <DetailSelectList name='일반공지' setTab={setTab}/>
                    <DetailSelectList name='학사공지' setTab={setTab}/>
                    <DetailSelectList name='입시공지' setTab={setTab}/>
                </div>
                <div className='category-checkbox-column'>
                    <TabContents tab={tab}/>
                </div>
            </div>
            <div className='selected-row'>

            </div>
        </div>
    )
}

function MainSelectList({img, name}) {
    return (
        <div className='main-select-container'>
            <img src={img} alt='이미지' className='main-select-img'></img>
            <p className='main-select-text'>{name}</p>
        </div>
    )
}

function DetailSelectList({name, setTab}) {
    return (
        <div className='detail-select-container' onClick={()=>{setTab(name)}}>
            <div className='detail-select-nav'><p>{name}</p><span className='Arrow'>&gt;</span></div>
            <div className='clear-both'/>
        </div>
    )
}

function TabContents({tab}) {
    return {
        '일반공지':<div>일반임</div>,
        '학사공지':<div>학사임</div>,
        '입시공지':<div>입시임</div>
    }[tab]
}

export default CategoryCard;