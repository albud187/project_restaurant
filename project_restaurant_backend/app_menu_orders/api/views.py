from app_menu_orders.models import (
Menu,
MenuItem,
Order,
OrderItem
)

from .serializers import (
    MenuSerializer,
    MenuItemSerializer,
    OrderSerializer,
    OrderItemSerializer)

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

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

    # def get_queryset(self):
    #     if self.request.user.is_superuser:
    #         return NoteGroup.objects.all()
    #     else:
    #         return NoteGroup.objects.filter(author=self.request.user)

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class MenuItemViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class OrderItemViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()
