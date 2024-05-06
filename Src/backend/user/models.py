from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# 헬퍼 클래스
class UserManager(BaseUserManager):
    def create_user(self, userid, password, phone, **kwargs):
        if not userid:
            raise ValueError('Users must have an email address')
        user = self.model(
            userid=userid,
            phone=phone
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, userid, password, phone, **extra_fields):
        superuser = self.create_user(
            userid=userid,
            password=password,
            phone=phone,
        )
        superuser.is_staff = True
        superuser.is_superuser = True
        superuser.is_active = True
        
        superuser.save(using=self._db)
        return superuser

# AbstractBaseUser를 상속해서 유저 커스텀
class User(AbstractBaseUser, PermissionsMixin):
    userid = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)
    phone = models.CharField(max_length=30)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

	# 헬퍼 클래스 사용
    objects = UserManager()

    USERNAME_FIELD = 'userid'
    REQUIRED_FIELDS = ['phone']