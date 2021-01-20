"""
Urls for the GOS application
"""
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MonsterView, EncounterView
from gos.views.players import PlayerView


router = DefaultRouter()
router.register(r'monsters', MonsterView, 'monster')
router.register(r'encounters', EncounterView, 'encounter')
router.register(r'players', PlayerView)

urlpatterns = [
    path('', include(router.urls)),
]
