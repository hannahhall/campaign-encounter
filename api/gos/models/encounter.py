"""
Encounter Model Class
"""
from itertools import chain
from django.db import models
from .encounter_monster import EncounterMonster
from .encounter_player import EncounterPlayer


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
    turn = models.IntegerField(default=0)

    @property
    def order(self):
        """Order Property for combining players and monsters

        Returns:
            list: monsters and players sorted by initiative
        """
        encounter_monsters = EncounterMonster.objects.filter(encounter__id=self.id)
        encounter_players = EncounterPlayer.objects.filter(encounter__id=self.id)
        return sorted(
            chain(encounter_monsters, encounter_players),
            key=lambda member: member.initiative if member.initiative else 0,
            reverse=True
        )
