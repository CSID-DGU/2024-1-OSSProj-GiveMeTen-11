from django.urls import path, include
from .views import *

urlpatterns = [
    path('signup', SignUpAPIView.as_view()),
    path('login', AuthAPIView.as_view()),
]