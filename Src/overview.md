# 🗒️ Overview.md

## 🟢 시스템 구성 다이어그램
<img src="https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/24c30c47-ff2e-42d2-b3f5-9bbdf66d8396" alt="img">

## 📁 폴더 위치
<table border="1">
        <thead>
            <th colspan="2">구분</th>
            <th>구성블록</th>
            <th>폴더위치</th>
            <th>비고</th>
        </thead>
        <tbody>
            <tr>
                <td rowspan="6" align="center">Src/</td>
                <td rowspan="3" align="center">(FE)
                    frontend/</td>
                <td>로그인/회원가입</td>
                <td>src/routes/login.js, register.js</td>
                <td>직접 코딩</td>
            </tr>
            <tr>
                <td>학사일정 보기</td>
                <td>src/components/Schedule/ScheduleCard.js</td>
                <td>직접 코딩</td>
            </tr>
            <tr>
                <td>공지사항 카테고리 설정</td>
                <td>src/components/Category/CategoryCard.js</td>
                <td>직접 코딩</td>
            </tr>
            <tr>
                <td rowspan="3" align="center">(BE)
                    backend/</td>
                <td>회원관리</td>
                <td>user/views.py, models.py</td>
                <td>https://github.com/LikeLion-at-DGU/moin_backend</td>
            </tr>
            <tr>
                <td>학사일정</td>
                <td>notice/views.py, models.py</td>
                <td>직접 코딩</td>
            </tr>
            <tr>
                <td>공지사항 관리</td>
                <td>notice/views.py, models.py</td>
                <td>직접 코딩</td>
            </tr>
        </tbody>
    </table>