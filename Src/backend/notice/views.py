from .models import Category
from .serializers import CategorySerializer
from user.serializers import UserSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

import requests
from bs4 import BeautifulSoup

class CrawlAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        for category in categories:
            print(category.url)
            print(category.big)
            response = requests.get(category.url)
            if response.status_code == 200:
                html = response.text
                soup = BeautifulSoup(html,'html.parser')

                title = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > p')
                date = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > div.info > span:nth-child(1)')
                author = soup.select_one('#content_focus > div > div.board > div.board_list > ul > li:nth-child(7) > a > div.top > div.info > span:nth-child(2)')

                new_title = title.get_text().strip()
                new_date = date.get_text()
                new_author = author.get_text()

                # 새로운 공지사항이 올라오게 되면 정보 바꿈
                if category.title != new_title:
                    category.title = new_title
                    category.date = new_date
                    category.author = new_author
                    category.save()

        return Response(status=status.HTTP_200_OK)

class UserCategoryAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserCategorySaveAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        user = request.user
        user.categories.clear()
        
        categories_data = request.data.get('categories', [])
        for category_data in categories_data:
            serializer = CategorySerializer(data=category_data)
            if serializer.is_valid():
                big = serializer.validated_data['big']
                detail = serializer.validated_data['detail']
                
                category = Category.objects.get(big=big, detail=detail)
                user.categories.add(category)
                
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def put(self, request):
    #     user = request.user
    #     user.categories.clear()  # 유저의 모든 categories 삭제
        
    #     categories_data = request.data.get('categories', [])
    #     for category_data in categories_data:
    #         serializer = CategorySerializer(data=category_data)
    #         if serializer.is_valid():
    #             big = serializer.validated_data['big']
    #             detail = serializer.validated_data['detail']
                
    #             category = Category.objects.get(big=big, detail=detail)
    #             user.categories.add(category)
                
    #         else:
    #             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    #     return Response({"message": "User categories updated successfully."}, status=status.HTTP_200_OK)     