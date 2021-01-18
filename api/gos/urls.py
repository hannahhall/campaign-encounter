"""
Urls for the GOS application
"""
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MonsterView, EncounterView


router = DefaultRouter()
router.register(r'monsters', MonsterView, 'monster')
router.register(r'encounters', EncounterView, 'encounter')

urlpatterns = [
    path('', include(router.urls)),
]
