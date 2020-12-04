from app_menu_orders.models import (
Menu,
MenuItem,
Order,
OrderItem
)

from app_restaurants_auth.models import (
Restaurant
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

def send_order(response):
    recipient = response.data['email']
    restaurant_name = Restaurant.objects.filter(id=response.data['restaurant'])[0].name
    order_items = list(OrderItem.objects.filter(order = response.data['id']))

    print('RECIPIENT IS ' + recipient)
    print('RESTAURANT IS ' + restaurant_name)
    print('ITEMS ARE : ')
    for item in order_items:
        print(item.food_item)

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()


class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class MenuItemViewSet(viewsets.ModelViewSet):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def create(self, request, *args, **kwargs):
        response = super(OrderViewSet, self).create(request, *args, **kwargs)
        print(response.data)
        return(response)

    def update(self, request, *args, **kwargs):
        response = super(OrderViewSet, self).update(request, *args, **kwargs)
        if response.data['order_status'] == 'REC':
            send_order(response)
            # print('SEND EMAIL')
            #
            # sender = Order.objects.filter(id=response.data['id'])[0].restaurant.owner.email
            # print('SENDER IS ' + sender)
            #
            # recipient = response.data['email']
            # print('RECIPIENT IS ' + recipient)
            #
            # order_items = list(OrderItem.objects.filter(order = response.data['id']))
            # print(order_items)


        return(response)


class OrderItemViewSet(viewsets.ModelViewSet):
    serializer_class = OrderItemSerializer
    queryset = OrderItem.objects.all()
