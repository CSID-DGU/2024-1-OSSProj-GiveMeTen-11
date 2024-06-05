from django.urls import path, include
from .views import *

urlpatterns = [
    path('save', UserCategorySaveAPIView.as_view()),
    path('check', UserCategoryAPIView.as_view()),
]