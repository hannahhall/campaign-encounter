"""
Encounter Serializers Module
"""

from rest_framework import serializers

from gos.models import Encounter

class EncounterListSerializer(serializers.ModelSerializer):
    """Encounter List Serializer

    Serializer for list view only returns basic information
    """
    class Meta:
        model = Encounter
        fields = ['id', 'name', 'description']


class OrderSerializer(serializers.BaseSerializer):
    """
    Base serializer for the order property
    """

    def to_representation(self, instance):
        """Converts instance object to dict

        Args:
            instance: EncounterMonster or EncounterPlayer

        Returns:
            [dict]: normalized member of the encounter
        """
        if hasattr(instance, 'monster'):
            return {
                'id': instance.id,
                'initiative': instance.initiative,
                'current_hp': instance.current_hp,
                'is_monster': True,
                'member': {
                    'name': instance.monster.name,
                    'index': instance.monster.index,
                    'hit_points': instance.monster.hit_points
                }
            }
        if hasattr(instance, 'player'):
            return {
                'id': instance.id,
                'initiative': instance.initiative,
                'is_monster': False,
                'member': {
                    'name': instance.player.name,
                }
            }


class EncounterDetailSerializer(serializers.ModelSerializer):
    """Encounter Detail Serializer

    Serializer for detail view returns all fields listed on the Encounter model
    """
    order = OrderSerializer(many=True)

    class Meta:
        model = Encounter
        fields = ['id', 'round', 'name', 'description', 'order', 'turn']
