"""
Monster View Class
"""
import requests
from rest_framework import viewsets
from rest_framework.response import Response
from gos.utils import DND_API_PATH

class MonsterView(viewsets.ViewSet):
    """Monster View

    Routes: List, Retrieve, Update, Delete
    """
    dnd_monster_path = f'{DND_API_PATH}/monsters'

    def list(self, request):
        """Monster List View

        Args:
            request ([type]): [description]

        Returns:
            [Response]: List of dnd api monsters
        """
        dnd_request = requests.get(self.dnd_monster_path).json()
        return Response(dnd_request['results'])

    def retrieve(self, request, pk=None):
        """Monster Detail View

        Returns:
            [Response]: json of requested monster
        """
        monster = requests.get(f'{self.dnd_monster_path}/{pk}')
        return Response(monster.json())
