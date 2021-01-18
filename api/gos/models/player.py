"""
Player Model Class
"""
from django.db import models


class Player(models.Model):
    """Player model

    Fields:
        name: Name of the character
    """
    name = models.CharField(max_length=100)
