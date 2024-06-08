# A4.3 OSS 프로젝트 제품 구성, 배포 및 운영 자료

[프로젝트로 돌아가기](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11)

## 1. 프로젝트 제품 구성

- [overview.md](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/blob/main/Src/overview.md)

## 2. 프로젝트 제품 배포 방법

2.1 배포 방법

1) 코드 준비

    - 필요한 패키지 저장
        - requirements.txt  파일에 필요한 python 패키지를 저장한다
    - Django 정적 파일 수집
        - Django의 정적 파일을 수집한다
    - cors 설정

        ![Untitled](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/6a19b982-c3f8-4a15-9fcb-6c3450d29bf6)
    

2) AWS 환경 설정

    - EC2 인스턴스 생성
        - AWS 콘솔에서 EC2 인스턴스를 생성하고 필요한 보안 그룹과 키 페어를 설정한다
    
            ![Untitled 1](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/b5729f17-fb79-4f55-9421-3491d6fce7ea)
    
    - 탄력적 IP 주소 할당
        - 탄력적 IP 주소를 생성하고 생성한 인스턴스와 연결한다
    
            ![Untitled 2](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/b9e689a0-0f29-4aa1-8bbb-c2195bf598fd)
    

3) 서버 설정(EC2)

    - 패키지 업데이트 및 필수 소프트웨어 설치
        
        ```python
        sudo apt-get update
        sudo apt-get install build-essential 
        sudo apt-get install python3 
        sudo apt-get install python3-pip
        sudo pip3 install --upgrade pip 
        ```
        
    - 애플리케이션 코드 배포
        
        ```python
        git clone [레포지토리 url]
        sudo apt-get install virtualenv 
        cd [레포지토리 이름]
        virtualenv –p python3 venv 
        source venv/bin/activate 
        pip install -r requirements.txt
        ```
        
    - Gunicorn 설정
        
        ```python
        gunicorn myproject.wsgi:application
        ```
    

4) 애플리케이션 배포

    - Gunicorn.service 파일 생성

        ![Untitled 3](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/4d31ba96-762b-4a4a-9311-899120516afc)

    - Nginx 설정

        ![Untitled 4](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/753d03a1-5de2-437f-81be-a5c68f62405f)

5) 최종 배포 화면
    ![Untitled 5](https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11/assets/101497652/0d8f1c42-78db-44f9-b84a-8ffd67a59f4d)

## **3. 프로젝트 제품 운영 방법**

**3.1 제품 시연을 위한 환경구성 및 운영방법**

1) 환경구성

    - 프로젝트 시연을 위해 AWS로 배포를 진행했고 사전 설정을 진행한다
    - 무선 인터넷 연결을 통해 네트워크 환경을 구성하여 시연 중 네트워크 장애가 발생하지 않도록 한다
    - 프론트의 경우 로컬 환경에서 사전 설정을 통해 시연 중 바로 웹페이지를 보여줄 수 있도록 준비한다
    - 프로젝트 시연을 위해서 노트북과 핸드폰을 준비한다

2) 데이터베이스 초기 데이터 설정

    - 필요한 데이터베이스를 설치하고 시연에 필요한 학교 공지사항 카테고리 데이터 및 사용자 정보를 입력한다.

3) 테스트 환경 구성 

    - 시연 전에 실제 작동 테스트를 위해 테스트 데이터를 준비하고 확인한다

**3.2 시연 시나리오** 

1) 시나리오 1: 사용자 등록 및 로그인

    - 브라우저를 열고 프로젝트 URL에 접속한다
    - 회원가입 페이지로 이동하여 사용자 정보를 입력하고 회원가입을 완료한다
    - 회원가입 후 로그인 페이지로 이동하여 가입한 계정으로 로그인을 진행한다

2) 시나리오 2: 카테고리 조회 및 저장

    - 로그인 후 사용자가 조회 할 수 있는 카테고리 목록들을 보여준다
    - 카테고리를 선택하고 저장 버튼을 클릭한다
    - 저장된 카테고리 목록을 표시한다

3) 시나리오 3: 새로운 공지사항 문자 알림

    - 임시로 만들어 놓은 블로그 카테고리를 저장한다
    - 사전에 만들어 놓은 블로그 계정으로 로그인 한 후, 새로운 글을 작성한다
    - 문자메시지를 보여주어 새로운 공지사항에 대한 알림이 오는 것을 확인한다