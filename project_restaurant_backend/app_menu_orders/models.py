from django.db import models

# Create your models here.

from app_restaurants_auth.models import (
Restaurant
)

class Menu(models.Model):
    title = models.CharField(max_length = 120)
    owner_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return (self.owner_restaurant.name + ' / '+ self.title)

class MenuItem(models.Model):
    owner_menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    name = models.CharField(max_length = 120)
    price = models.FloatField()
    description = models.TextField(blank=True, null = True)
    owner_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return (self.owner_menu.owner_restaurant.name + ' / ' + self.owner_menu.title + ' / '+ self.name)

# #subitem is for stuff like pizza toppings and variations of items
# class SubItem(models.Model):
#     base_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
#     name = models.CharField(max_length=120)
#     price = models.FloatField()
#     description = models.TextField()

class Order(models.Model):
    name = models.CharField(max_length = 120)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    email = models.CharField(max_length = 120)
    phone = models.CharField(max_length = 120)
    notes = models.TextField(blank=True, null=True)

    DELIVERY, TAKEOUT, DINEIN = 'DEL','TAK', 'DIN'
    ORDER_TYPES = [
    (DELIVERY, 'delivery'),
    (TAKEOUT, 'takeout'),
    (DINEIN, 'dine-in')
    ]
    type = models.CharField(max_length = 3, choices = ORDER_TYPES, default=TAKEOUT) #take-out, delivery, dine in

    STARTED, RECIEVED, INPROGRESS, FULFILLED = 'STA', 'REC', 'INP', 'FUL'
    ORDER_STATUSES = [
    (STARTED, 'started'),
    (RECIEVED, 'recieved'),
    (INPROGRESS, 'in progress'),
    (FULFILLED, 'fulfilled'),
    ]
    order_status = models.CharField(max_length=3, choices = ORDER_STATUSES, blank= True, null = True)

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

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    food_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.FloatField()
    notes = models.TextField(blank=True, null = True)

    def __str__(self):
        return (self.order.restaurant.name + ' / '+ str(self.order.date_created) + ' / ' + str(self.order.id) + ' / ' + str(self.food_item.name))
