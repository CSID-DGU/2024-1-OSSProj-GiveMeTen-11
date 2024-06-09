import sys
import requests
from bs4 import BeautifulSoup

from .models import Category
from .serializers import CategorySerializer, CategorySaveSerializer
from user.serializers import UserSerializer, UserCategorySerializer

from sdk.api.message import Message
from sdk.exceptions import CoolsmsException
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

class ScheduleAPIView(APIView):
    def get(self, request):
        #content_focus > div > div.cont_group > div.schedule > div > table > tbody > tr:nth-child(27) > td:nth-child(2)
        response = requests.get("https://www.dongguk.edu/schedule/detail?schedule_info_seq=22")
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html,'html.parser')

        schedules = []
        for i in range(27,43):
            date = soup.select_one('#content_focus > div > div.cont_group > div.schedule > div > table > tbody > tr:nth-child('+ str(i) +') > td:nth-child(2)')
            title = soup.select_one('#content_focus > div > div.cont_group > div.schedule > div > table > tbody > tr:nth-child(' + str(i) + ') > td:nth-child(3)')
            detail = soup.select_one('#content_focus > div > div.cont_group > div.schedule > div > table > tbody > tr:nth-child(' + str(i) +') > td:nth-child(3) > p')
            
            schedules.append({
                'date': date.get_text(strip=True),
                'title': title.get_text(strip=True),
                'detail': detail.get_text(strip=True) if detail else ''
            })
        
        if schedules:
            return Response(schedules)
        
        else:
            return Response({"error": "Failed to retrieve data"}, status=response.status_code)
        

class UserCategoryAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserCategorySerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserCategorySaveAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        user = request.user
        user.categories.clear()
        
        categories_data = request.data.get('categories', [])
        for category_data in categories_data:
            serializer = CategorySaveSerializer(data=category_data)
            if serializer.is_valid():
                big = serializer.validated_data['big']
                detail = serializer.validated_data['detail']
                
                category = Category.objects.get(big=big, detail=detail)
                user.categories.add(category)
                
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"message":"Save Complete"}, status=status.HTTP_200_OK)