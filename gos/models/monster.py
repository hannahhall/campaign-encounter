"""
Monster Model Class
"""

from django.db import models


class Monster(models.Model):
    """Monster class to hold base info from dndapi

    Fields:
        index: Primary Key, used to get detail view from dndapi
        name: Name of the monster
    """
    index = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)
