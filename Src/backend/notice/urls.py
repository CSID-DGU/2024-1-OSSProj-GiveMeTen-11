from django.urls import path, include
from .views import *

urlpatterns = [
    path('save', UserCategoryAPIView.as_view()),
]