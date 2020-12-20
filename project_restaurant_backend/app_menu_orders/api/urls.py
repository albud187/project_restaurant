from app_menu_orders.api.views import (
MenuViewSet,
MenuItemViewSet,
OrderViewSet,
OrderItemViewSet,
MenuByRestaurantView,
ItemByRestaurantView
)

from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register('Menus', MenuViewSet, basename='Menus')
router.register('MenuItems', MenuItemViewSet, basename='MenuItems')
router.register('Orders', OrderViewSet, basename='Orders')
router.register('OrderItems', OrderItemViewSet, basename='OrderItems')

function_views=[
    path('restaurant_menus',MenuByRestaurantView.as_view(), name='restaurant_menus'),
    path('restaurant_items',ItemByRestaurantView.as_view(), name='restaurant_items')




]

urlpatterns = router.urls + function_views
