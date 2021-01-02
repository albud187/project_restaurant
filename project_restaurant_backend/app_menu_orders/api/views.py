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

from django.core import mail
from django.utils.html import strip_tags
from django.conf import settings
from django.contrib import messages
from django.core.mail import EmailMessage
from django.core.mail import send_mail
from django.template.loader import render_to_string
import pickle
import pandas as pd

def send_order_confirmation(resposne):
    pass

def send_order_notification(response):
    recipient = response.data['email'] + ' / ' + response.data['phone']
    customer_name = response.data['name']
    restaurant_name = Restaurant.objects.filter(id=response.data['restaurant'])[0].name

    order_items = OrderItem.objects.filter(order = response.data['id'])

    order_items_list=[]
    for item in order_items:
        order_items_list.append(item.__dict__)

    #names
    food_item_names = []
    for item in order_items_list:
        food_item_names.append(str(OrderItem.objects.filter(id=item['id'])[0]).split(' / ')[3])

    #costs
    costs = []
    for item in order_items_list:
        itemCost = OrderItem.objects.filter(id=item['id'])[0].food_item.price
        costs.append(item["quantity"]*itemCost)

    total_order_cost = sum(costs)

    order_df = pd.DataFrame(order_items_list)
    order_df['food item'] = food_item_names
    order_df['cost'] = costs
    order_df_html = order_df[['food item', 'quantity', 'cost']].to_html()
    restaurant_email = Restaurant.objects.filter(id=response.data['restaurant'])[0].email

    order_id = response.data['id']
    print(order_items_list[0].keys())

    email_subject = 'ORDER NOTIFICATION ' + restaurant_name + ' # ' + str(order_id)
    html_message = render_to_string('app_menu_order/order_notification.html',
    {'restaurant': restaurant_name,
    'customer_name':customer_name,
    'recipient': recipient,
    'order': order_df_html,
    'order_cost':total_order_cost
    })
    plain_message = strip_tags(html_message)

    email_message = EmailMessage(
    email_subject,
    html_message,
    settings.EMAIL_HOST_USER,
    [restaurant_email]
    )
    email_message.content_subtype ='html'
    email_message.send()

    # send_mail(
    # subject=email_subject,
    # message=plain_message,
    # from_email = settings.EMAIL_HOST_USER,
    # recipient_list=[restaurant_email],
    # html_message=html_message
    #
    # )
    print(email_subject)

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class MenuItemViewSet(viewsets.ModelViewSet):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()

class MenuByRestaurantView(ListAPIView):
    serializer_class = MenuSerializer

    def get_queryset(self):
        restaurantID = self.request.GET['restaurantID']

        if restaurantID:
            target_queryset = Menu.objects.filter(owner_restaurant=restaurantID)
        return(target_queryset)


class ItemByMenuView(ListAPIView):
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        menuID = self.request.GET['menuID']

        if menuID:
            target_queryset = MenuItem.objects.filter(owner_menu=menuID)
        return(target_queryset)


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
            send_order_notification(response)

        return(response)


class OrderItemViewSet(viewsets.ModelViewSet):
    serializer_class = OrderItemSerializer
    queryset = OrderItem.objects.all()

def calculate_order(order_dict):
    #takes in order items
    #gets price of each order item by using MenuItem.objects.filter
    #multiplies by quantity from order
    #adds total cost
    pass

class OrderCostCalculateView(views.APIView):

    def get(self, request):
        pass
    pass
