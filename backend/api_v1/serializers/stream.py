from rest_framework import serializers

from backend.api_v1.models.stream import Stream


class StreamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stream
        fields = ('key', 'started_at')
