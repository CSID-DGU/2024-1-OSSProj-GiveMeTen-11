import requests
from bs4 import BeautifulSoup

url = 'https://www.dongguk.edu/article/GENERALNOTICES/list'

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html,'html.parser')
    title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > p')
    print("title", title)
    print(title.get_text())
