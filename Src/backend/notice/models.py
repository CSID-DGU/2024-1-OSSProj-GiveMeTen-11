from django.db import models
from django.conf import settings

# Category 모델
class Category(models.Model):
    id = models.AutoField(primary_key=True)
    big = models.CharField(max_length=100)
    detail = models.CharField(max_length=100)
    url = models.URLField()
    
    def __str__(self):
        return self.big + '/' + self.detail

