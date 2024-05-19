import requests
import json


send_url = 'https://apis.aligo.in/send/' # 요청을 던지는 URL, 현재는 문자보내기

# ================================================================== 문자 보낼 때 필수 key값
# API key, userid, sender, receiver, msg
# API키, 알리고 사이트 아이디, 발신번호, 수신번호, 문자내용

sms_data={'key': 'a4b28emfj2xly983zovtd0q747n4jn95', #api key
        'userid': 'xz7840', # 알리고 사이트 아이디
        'sender': '01026373087', # 발신번호
        'receiver': '01086514250', # 수신번호 (,활용하여 1000명까지 추가 가능)
        'msg': ' 공지사항 업데이트', #문자 내용 
        'msg_type' : 'sms', #메세지 타입 (SMS, LMS)
        'title' : '동국대 알리미', #메세지 제목 (장문에 적용)
        'destination' : '01086514250|한종원', # %고객명% 치환용 입력
        #'rdate' : '예약날짜',
        #'rtime' : '예약시간',
        #'testmode_yn' : '' #테스트모드 적용 여부 Y/N
}
send_response = requests.post(send_url, data=sms_data)
print (send_response.json())
