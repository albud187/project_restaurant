# Generated by Django 3.1.2 on 2020-12-03 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_restaurants_auth', '0002_auto_20201203_1726'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='name',
            field=models.CharField(default=0, max_length=120),
            preserve_default=False,
        ),
    ]
