# Generated by Django 3.1.5 on 2021-01-20 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gos', '0004_auto_20210120_0321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='encountermonster',
            name='current_hp',
            field=models.IntegerField(null=True),
        ),
    ]
