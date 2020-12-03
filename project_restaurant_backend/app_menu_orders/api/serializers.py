from rest_framework import serializers

from app_menu_orders.models import (
Menu,
MenuItem
)

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
