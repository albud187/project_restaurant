# Generated by Django 3.1.2 on 2020-12-04 02:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_menu_orders', '0006_auto_20201203_2238'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('REC', 'recieved'), ('INP', 'in progress'), ('FUL', 'fulfilled')], default='REC', max_length=3),
        ),
    ]
