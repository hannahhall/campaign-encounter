"""
EncounterPlayer Model Class
"""

from django.db import models
from django.db.models.deletion import CASCADE


class EncounterPlayer(models.Model):
    """
    Through model for encounters and players
    Fields:
        player: Foreign key field for Player model
        encounter: Foreign key field for Encounter model
        initiative: the order the player will go in the encounter
    """
    player = models.ForeignKey('Player', on_delete=CASCADE)
    encounter = models.ForeignKey('Encounter', on_delete=CASCADE)
    initiative = models.IntegerField(null=True)
