import requests
from bs4 import BeautifulSoup

from .models import Category

def Crawling():
    categories = Category.objects.all()
    for category in categories:
        response = requests.get(category.url)
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html,'html.parser')
            title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > p')
            print("title", title)
            print(title.get_text())