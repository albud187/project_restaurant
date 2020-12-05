from app_restaurants_auth.api.views import (
RestaurantViewSet,

)

from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register('Restaurants', RestaurantViewSet, basename='Restaurants')

function_views=[

]

urlpatterns = router.urls + function_views
