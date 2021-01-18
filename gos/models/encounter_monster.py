"""
EncounterMonster Model Class
"""

from django.db import models
from django.db.models.deletion import CASCADE


class EncounterMonster(models.Model):
    """
    Through model for encounters and monsters

    Fields:
        monster: Foreign key field for Monster model
        encounter: Foreign key field for Encounter model
        initiative: the order the monster will go in the encounter
    """
    monster = models.ForeignKey('Monster', on_delete=CASCADE)
    encounter = models.ForeignKey('Encounter', on_delete=CASCADE)
    initiative = models.IntegerField(null=True)
