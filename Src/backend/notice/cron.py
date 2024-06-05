import requests
from decouple import config
from bs4 import BeautifulSoup

from .models import Category
from sdk.api.message import Message
from sdk.exceptions import CoolsmsException
def hello():
    print('hi')

def Crawling():
    categories = Category.objects.all()
    for category in categories:
        response = requests.get(category.url)
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html,'html.parser')

        contents_1_big = ['바이오시스템대학', '예술대학']
        contents_1_detail = ['바이오환경과학과', '식품생명공학과', '연극학부']

        contents_2_big = ['사범대학', '이과대학']
        contents_2_detail = ['국어교육과', '물리반도체과학부']

        contents_3_big = ['불교대학', '사회과학대학', '사범대학']
        contents_3_detail = ['문화재학과', '미디어커뮤니케이션학전공', '교육학과', '체육교육과']

        contents_4_big = ['사회과학대학', '사범대학']
        contents_4_detail = ['경제학과', '수학교육과']

        contents_5_big = ['문과대학', '사회과학대학', '경영대학', '공과대학', 'AI융합대학', '사범대학']
        contents_5_detail = ['중어중문학과', '사학과', '식품산업관리학과', '경영학과', '경영정보학과', '건설환경공학과', '건축공학부', '컴퓨터공학전공', '역사교육과', '가정교육과']

        contents_6_big = ['문과대학', '이과대학']
        contents_6_detail = ['영어영문학부', '화학과']

        contents_7_big = ['불교대학', '문과대학', '이과대학', '법과대학', '사회과학대학', '경찰사법대학', '경영대학', '바이오시스템대학', '공과대학', 'AI융합대학', '사범대학', '예술대학', '약학대학', '다르마칼리지']
        contents_7_detail = ['전체공지', '국어국문문예창작학부', '일본학과', '철학과', '수학과', '통계학과', '정치외교학전공', '행정학전공', '북한학전공', '국제통상학과', '사회학전공', '사회복지학과', '회계학과', '생명과학과', '의생명공학과', '전자전기공학부', '화공생물공학과', '정보통신공학과', '기계로봇에너지공학과', '산업시스템공학과', '에너지신소재공학과', '지리교육과', '미술학부', '한국음악과']

        ##### 학교 공지사항 #####
        if category.big == '연구공지':
            title = soup.select_one('#BusinessVO > div.borad-content > table > tbody > tr:nth-child(1) > td:nth-child(1)')
            date = soup.select_one('#BusinessVO > div.borad-content > table > tbody > tr:nth-child(1) > td.left > a')
            author = soup.select_one('#BusinessVO > div.borad-content > table > tbody > tr:nth-child(1) > td.mo-li')

        elif category.big == '안전공지':
            title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(3) > a > div.top > p')
            date = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(2) > a > div.top > div.info > span:nth-child(1)')
            author = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(2) > a > div.top > div.info > span:nth-child(2)')

        elif category.big == '입시공지':
            title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(1) > a > div.top > p')
            date = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(1) > a > div.top > div.info > span:nth-child(1)')
            author = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(1) > a > div.top > div.info > span:nth-child(2)')
        elif category.big == '장학공지':
            title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(11) > a > div.top > p')
            date = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(11) > a > div.top > div.info > span:nth-child(1)')
            author = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(11) > a > div.top > div.info > span:nth-child(2)')

        else:
            title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > p')
            date = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > div.info > span:nth-child(1)')
            author = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > div.info > span:nth-child(2)')


        ##### 학과별 공지사항 #####
        # 1~7 정해진 범위에 있는 페이지  
        if category.big in contents_1_big and category.detail in contents_1_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(1) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(1) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(1) > td:nth-child(4)')
        
        elif category.big in contents_2_big and category.detail in contents_2_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(2) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(2) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(2) > td:nth-child(4)')

        elif category.big in contents_3_big and category.detail in contents_3_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(3) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(3) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(3) > td:nth-child(4)')

        elif category.big in contents_4_big and category.detail in contents_4_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(4) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(4) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(4) > td:nth-child(4)')

        elif category.big in contents_5_big and category.detail in contents_5_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(5) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(5) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(5) > td:nth-child(4)')

        elif category.big in contents_6_big and category.detail in contents_6_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(6) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(6) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(6) > td:nth-child(4)')

        elif category.big in contents_7_big and category.detail in contents_7_detail:
            title = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(7) > td.td_tit > a')
            date = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(7) > td.td_write')
            author = soup.select_one('#contents > div.contents > div.board_wrap > table > tbody > tr:nth-child(7) > td:nth-child(4)')
        
        # 그외 페이지
        elif category.detail == '광고홍보학과':
            title = soup.select_one('#fboardlist > div > table > tbody > tr:nth-child(10) > td.td_subject > a:nth-child(2)')
            date = soup.select_one('#fboardlist > div > table > tbody > tr:nth-child(10) > td.td_date')
            author = '관리자'

        elif category.detail == '멀티미디어소프트웨어공학전공':
            title = soup.select_one('#inner_wrap > div.rightW > div.sub_con > div.board_listW > table > tbody > tr:nth-child(8) > td.subject > a')
            date = soup.select_one('#inner_wrap > div.rightW > div.sub_con > div.board_listW > table > tbody > tr:nth-child(8) > td.w_date')
            author = '관리자'

        elif category.detail == '영화영상학과':
            title = soup.select_one('#fboardlist > div > table > tbody > tr:nth-child(14) > td.td_subject > a')
            date = soup.select_one('#fboardlist > div > table > tbody > tr:nth-child(14) > td.td_name.sv_use')
            author = '관리자'
        
        elif category.big == '미래융합대학':
            if category.detail == '전체공지':
                title = soup.select_one('#dBody > table > tbody > tr:nth-child(7) > td.cell_type > a')
                date = soup.select_one('#dBody > table > tbody > tr:nth-child(7) > td:nth-child(5)')

            elif category.detail == '융합보안학과':
                title = soup.select_one('#wrap > div.site-content > div.wrap > div.content_body > div.module-content > table > tbody > tr:nth-child(2) > td.cell_type > a')
                date = soup.select_one('#wrap > div.site-content > div.wrap > div.content_body > div.module-content > table > tbody > tr:nth-child(2) > td:nth-child(5)')
            
            elif category.detail == '사회복지상담학과':
                title = soup.select_one('#wrap > div.site-content > div.wrap > div.content_body > div.module-content > table > tbody > tr:nth-child(6) > td.cell_type > a')
                date = soup.select_one('#wrap > div.site-content > div.wrap > div.content_body > div.module-content > table > tbody > tr:nth-child(6) > td:nth-child(5)')
            
            else:
                title = soup.select_one('#wrap > div.site-content > div.wrap > div.content_body > div.module-content > table > tbody > tr:nth-child(2) > td.cell_type > a')
                date = soup.select_one('#wrap > div.site-content > div.wrap > div.content_body > div.module-content > table > tbody > tr:nth-child(2) > td:nth-child(5)')
                
            author = '미래융합대학'
            
        new_title = title.get_text().strip()
        new_date = date.get_text()
        if type(author) != str:
            new_author = author.get_text() 
        else:
            new_author = author
        
        # 새로운 공지사항이 올라오게 되면 문자전송
        # if category.title != new_title:
        #     api_key = config('API_KEY')
        #     api_secret = config('API_SECRET')

        #     for user in category.users.all():
        #         params = {
        #             'type': 'sms',
        #             'to': user.phone,
        #             'from': config('ADMIN_PHONE'),
        #             'text': f"[동국대알리미]{category.big}/{category.detail}\n{new_title}"
        #         }

        #         cool = Message(api_key, api_secret)
        #         try:
        #             response = cool.send(params)
        #             print("Success Count : %s" % response['success_count'])
        #             print("Error Count : %s" % response['error_count'])
        #             print("Group ID : %s" % response['group_id'])

        #             if "error_list" in response:
        #                 print("Error List : %s" % response['error_list'])

        #         except CoolsmsException as e:
        #             print("Error Code : %s" % e.code)
        #             print("Error Message : %s" % e.msg)
            
            category.title = new_title
            category.date = new_date
            category.author = new_author
            category.save()