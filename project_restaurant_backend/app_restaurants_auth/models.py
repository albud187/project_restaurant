from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Restaurant(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    operating_hours = models.CharField(max_length = 120)
    address = models.CharField(max_length = 120)
    type = models.CharField(max_length = 120)
