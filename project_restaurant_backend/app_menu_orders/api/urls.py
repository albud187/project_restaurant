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


function_views=[

]

urlpatterns = router.urls + function_views
