from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Restaurant(models.Model):
    name = models.CharField(max_length=120)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length = 120)
    address = models.CharField(max_length = 120)
    type = models.CharField(max_length = 120)
    description = models.TextField()

    def __str__(self):
        return (self.name)
