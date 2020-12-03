from django.db import models

# Create your models here.

from app_restaurants_auth.models import (
Restaurant
)

class Menu(models.Model):
    title = models.CharField(max_length = 120)
    owner_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class MenuItem(models.Model):
    owner_menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    name = models.CharField(max_length = 120)
    price = models.FloatField()
    description = models.TextField()


#subitem is for stuff like pizza toppings
class SubItem(models.Model):
    base_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    price = models.FloatField()
    description = models.TextField()

class Order(models.Model):
    email = models.TextField()
    description = models.TextField()
    type = models.TextField() #take-out, delivery, dine in

    @property
    def order_cost(self):
        order_items = OrderItem.objects.filter(order = self)

        for item in order_items:
            cost += item.food_item.price*item.quantity

        return(cost)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    food_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.FloatField()
    notes = models.TextField()
