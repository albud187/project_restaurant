from app_restaurants_auth.models import (
Restaurant
)


from .serializers import (
    RestaurantSerializer
)

import json
from rest_framework import viewsets
import random
from rest_framework import serializers, views
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)

from django.conf import settings
from django.contrib import messages
from django.core.mail import EmailMessage


class RestaurantViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
