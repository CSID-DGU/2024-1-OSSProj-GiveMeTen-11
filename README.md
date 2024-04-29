<div><img src="https://capsule-render.vercel.app/api?type=waving&color=0:99cc99,100:009630&height=200&section=header&text=GiveMeTen&fontSize=90" /></div>


### 2024-1-OSSProj-GiveMeTen-11 팀의 리파지토리입니다.
- 팀 구성
    - (팀장) 전병현  
    - (팀원) 성민제
    - (팀원) 박주한

# ➡️ Docs
### 프로젝트 관리문서 바로가기
- [범위 / 일정 관리](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/blob/main/Doc/4_1_OSSProj_11_%EC%8B%AD%EC%9B%90%EC%A1%B0_%EB%B2%94%EC%9C%84_%EC%9D%BC%EC%A0%95_%EC%9D%B4%EC%8A%88%EA%B4%80%EB%A6%AC.md)
- [이슈 관리](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/issues)
- [회의록](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/blob/main/Doc/4_2_OSSProj_11_%EC%8B%AD%EC%9B%90%EC%A1%B0_%ED%9A%8C%EC%9D%98%EB%A1%9D.md)
- [제품의 구성, 배포 및 운영 관련 문서 자료](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/blob/main/Doc/4_3_OSSProj_11_%EC%8B%AD%EC%9B%90%EC%A1%B0_%EC%A0%9C%ED%92%88%EA%B5%AC%EC%84%B1%EB%B0%B0%ED%8F%AC%EC%9A%B4%EC%98%81%EC%9E%90%EB%A3%8C.md)

# 🛠️ Tech

## FrameWork
REACT
<br/>
DRF

## 프로젝트 실행 방법
### 🖼️ FrontEnd
#### frondend 폴더로 이동 후
```cmd
npm install
npm start
``` 

### 💾 BackEnd
#### 1. 가상환경 만들기
##### 최초 1회 실행
    python -m venv {가상 환경 이름}

    * 가상 환경 이름은 venv로 통일

##### 아래서부터는 반복
#### 2. 가상환경 실행
    source venv/Scripts/activate

#### 3. 라이브러리 설치
    pip install -r requirements.txt

    * 추가됐으면 추가한 사람이 'pip freeze > requirements.txt' 꼭 해주기
    * 작업하는 사람은 작업 전 pull 받고 'pip install -r requirements.txt' 꼭 해주기

#### 4. db 마이그레이션 진행
    * manage.py 파일이 있는 위치로 이동 후
    python manage.py makemigrations
    python manage.py migrate

#### 5. 서버 실행
    python manage.py runserver


## 💻 Folder
```
📦 2024-1-OSSProj-GiveMeTen-11/       
├─ Doc
│    └─ 1_1_OSSProj_팀번호_팀명_수행계획서.md  
│    └─1_2_OSSProj_팀번호_팀명_수행계획발표자료.ppt  
│    └─2_1_OSSProj_팀번호_팀명_중간보고서_.md  
│    └─2_2_OSSProj_팀번호_팀명_중간발표자료_.ppt   
│    └─3_1_OSSProj_팀번호_팀명_최종보고서_.md  
│    └─3_2_OSSProj_팀번호_팀명_최종발표자료_.ppt  
│    └─4_1_OSSProj_팀번호_팀명_범위_일정_이슈관리.md  
│    └─4_2_OSSProj_팀번호_팀명_회의록.md  
│    └─4_3_OSSProj_팀번호_팀명_제품구성배포운영자료.md  
├─ SRC
└─ README.md
```

## 🎯 Commit Convention

-   feat : 새로운 기능 추가
-   fix : 버그 수정
-   docs : 문서 수정
-   style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
-   refactor: 코드 리펙토링
-   test: 테스트 코드, 리펙토링 테스트 코드 추가
-   chore : 빌드 업무 수정, 패키지 매니저 수정


## 💡 PR Convetion

| 아이콘 | 코드                       | 설명                     |
| ------ | -------------------------- | ------------------------ |
| 🎨     | :art                       | 코드의 구조/형태 개선    |
| ⚡️    | :zap                       | 성능 개선                |
| 🔥     | :fire                      | 코드/파일 삭제           |
| 🐛     | :bug                       | 버그 수정                |
| 🚑     | :ambulance                 | 긴급 수정                |
| ✨     | :sparkles                  | 새 기능                  |
| 💄     | :lipstick                  | UI/스타일 파일 추가/수정 |
| ⏪     | :rewind                    | 변경 내용 되돌리기       |
| 🔀     | :twisted_rightwards_arrows | 브랜치 합병              |
| 💡     | :bulb                      | 주석 추가/수정           |
| 🗃      | :card_file_box             | 데이버베이스 관련 수정   |
