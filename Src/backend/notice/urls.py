from django.urls import path, include
from .views import *

urlpatterns = [
    path('save', UserCategorySaveAPIView.as_view()),
    path('category', UserCategoryAPIView.as_view()),
    path('crawl', CrawlAPIView.as_view()),
]