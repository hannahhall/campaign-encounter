"""
Encounter View Class
"""
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from gos.models import Encounter
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
