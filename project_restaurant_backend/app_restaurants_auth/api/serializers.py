from rest_framework import serializers

from app_restaurants_auth.models import (
Restaurant
)

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
