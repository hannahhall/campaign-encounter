"""
Encounter View Class
"""
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404


from gos.models import Encounter, Player, Monster, EncounterPlayer, EncounterMonster
from gos.serializers import EncounterListSerializer, EncounterDetailSerializer

class EncounterView(viewsets.ViewSet):
    """
    Encounter View Set with list, retrieve, update, and delete methods
    """
    def list(self, request):
        """List view for encounters

        Returns:
            [Response]: serialized json of all encounters
        """
        encounters = Encounter.objects.all()
        serializer = EncounterListSerializer(encounters, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        """Detail view for Encounters

        Returns:
            [Response]: serialized json of the encounter being requested

        Errors:
            404: If encounter not found returns 404 error
        """
        encounter = get_object_or_404(Encounter, pk=pk)
        serializer = EncounterDetailSerializer(encounter)
        return Response(serializer.data)

    def create(self, request):
        """Create Encounter with players and monsters

        Returns:
            Response: json serialized Encounter
        """
        encounter = Encounter()
        encounter.name = self.request.data.get('name')
        encounter.description = self.request.data.get('description')
        encounter.save()

        players = self.request.data.get('players')
        for player in players:
            encounter.players.add(Player.objects.get(name=player))

        monsters = self.request.data.get('monsters')

        for i in monsters:
            monster = Monster.objects.get_or_create(
                index=i['index'],
                name=i['name'],
                hit_points=i['hitPoints']
            )
            encounter.monsters.add(monster[0])
        return Response({}, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['put'])
    def save_initiative(self, request, pk=None):
        """Save the monster and player initiative
        Start the encounter by upping the round to 1

        Returns:
            Response: json serialized encounter
        """
        order = request.data.get('order')

        for member in order:
            if member['is_monster']:
                encounter_monster = EncounterMonster.objects.get(pk=member['id'])
                encounter_monster.initiative = member['initiative']
                encounter_monster.current_hp = encounter_monster.monster.hit_points
                encounter_monster.save()
            else:
                encounter_player = EncounterPlayer.objects.get(pk=member['id'])
                encounter_player.initiative = member['initiative']
                encounter_player.save()

        encounter = Encounter.objects.get(pk=pk)
        encounter.round = 1
        encounter.save()
        serializer = EncounterDetailSerializer(encounter)
        return Response(serializer.data)

    @action(detail=True, methods=['put'])
    def update_hit_points(self, request, pk):
        amount = request.data.get('amount')
        encounter_monster = EncounterMonster.objects.get(pk=request.data.get('memberId'))
        encounter_monster.current_hp += amount
        encounter_monster.save()

        encounter = Encounter.objects.get(pk=pk)
        serializer = EncounterDetailSerializer(encounter)
        return Response(serializer.data)

    @action(detail=True, methods=['put'])
    def update_turn(self, request, pk):
        encounter = Encounter.objects.get(pk=pk)
        members_len = len(encounter.order)

        if encounter.turn + 1 >= members_len:
            encounter.round += 1
            encounter.turn = 0
        else:
            encounter.turn += 1
        
        encounter.save()

        serializer = EncounterDetailSerializer(encounter)
        return Response(serializer.data)
    
