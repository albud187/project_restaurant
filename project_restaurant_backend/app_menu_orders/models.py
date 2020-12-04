from django.db import models

# Create your models here.

from app_restaurants_auth.models import (
Restaurant
)

class Menu(models.Model):
    title = models.CharField(max_length = 120)
    owner_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return ( self.owner_restaurant.name + ' / '+ self.title)

class MenuItem(models.Model):
    owner_menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    name = models.CharField(max_length = 120)
    price = models.FloatField()
    description = models.TextField(blank=True, null = True)

    def __str__(self):
        return (self.owner_menu.owner_restaurant.name + ' / '+ self.name)

# #subitem is for stuff like pizza toppings
# class SubItem(models.Model):
#     base_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
#     name = models.CharField(max_length=120)
#     price = models.FloatField()
#     description = models.TextField()

class Order(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    email = models.CharField(max_length = 120)
    phone = models.CharField(max_length = 120)
    notes = models.TextField()
    type = models.CharField(max_length = 120) #take-out, delivery, dine in
    date_created = models.DateField(auto_now=True)

    def __str__(self):
        return (self.restaurant.name + ' / '+ str(self.date_created) + ' / ' + str(self.id))

    @property
    def order_cost(self):
        order_items = OrderItem.objects.filter(order = self)
        cost = 0
        for item in order_items:
            cost = cost + item.food_item.price*item.quantity

        return(cost)
#
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    food_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.FloatField()
    notes = models.TextField(blank=True, null = True)

    def __str__(self):
        return (self.order.restaurant.name + ' / '+ str(self.order.date_created) + ' / ' + str(self.order.id) + ' / ' + str(self.food_item.name))
