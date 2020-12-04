from app_menu_orders.api.views import (
MenuViewSet,
MenuItemViewSet,
OrderViewSet,
OrderItemViewSet
)

from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register('Menus', MenuViewSet, basename='Menus')
router.register('MenuItems', MenuItemViewSet, basename='MenuItems')
router.register('Orders', OrderViewSet, basename='Orders')
router.register('OrderItems', OrderItemViewSet, basename='OrderItems')

function_views=[

]

urlpatterns = router.urls + function_views
