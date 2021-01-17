"""
Encounter Model Class
"""
from django.db import models


class Encounter(models.Model):
    """
    Encounters keep track of monsters and rounds that players will fight

    Fields:
        monsters: many to many field with Monster model through the EncounterMonster model
        round: keeps track of the number of times all monsters/players have had an action
        name: name of the encounter
        description: description of the encounter
        players: many to many field with Player model through the EncounterPlayer model
    """
    monsters = models.ManyToManyField('Monster', through='EncounterMonster')
    round = models.IntegerField(default=0)
    name = models.CharField(max_length=100)
    description = models.TextField()
    players = models.ManyToManyField('Player', through='EncounterPlayer')
