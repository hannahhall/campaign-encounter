# Generated by Django 3.1.5 on 2021-01-18 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='encounter',
            name='turn',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='encountermonster',
            name='initiative',
            field=models.IntegerField(null=True),
        ),
    ]