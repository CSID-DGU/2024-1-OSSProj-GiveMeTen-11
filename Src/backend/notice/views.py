from .models import User, Category
from .serializers import CategorySerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

class UserCategoryAPIView(APIView):
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