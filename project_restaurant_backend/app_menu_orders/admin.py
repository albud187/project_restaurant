from django.contrib import admin

# Register your models here.

from .models import (
Menu,
MenuItem,
Order,
OrderItem
)

admin.site.register(Menu)
admin.site.register(MenuItem)
admin.site.register(Order)
admin.site.register(OrderItem)
