"""
Urls for the GOS application
"""
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MonsterView


router = DefaultRouter()
router.register(r'monsters', MonsterView, 'monster')

urlpatterns = [
    path('', include(router.urls)),
]
