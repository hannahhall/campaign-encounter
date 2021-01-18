"""
Django admin model registration
"""
from django.contrib import admin
from gos.models import Monster, Player, Encounter, EncounterPlayer, EncounterMonster

# Register your models here.
admin.site.register(Monster)
admin.site.register(Player)
admin.site.register(Encounter)
admin.site.register(EncounterPlayer)
admin.site.register(EncounterMonster)
