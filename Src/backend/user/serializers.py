# serializers.py

from .models import User
from notice.serializers import *

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create_user(
            userid = validated_data['userid'],
            password = validated_data['password'],
            phone = validated_data['phone']
        )
        return user
