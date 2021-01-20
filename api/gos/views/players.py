from rest_framework import viewsets
from gos.models import Player
from gos.serializers import PlayerSerializer

class PlayerView(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
