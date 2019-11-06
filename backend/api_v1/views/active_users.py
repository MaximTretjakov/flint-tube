from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

from backend.api_v1.models.stream import Stream
from backend.api_v1.serializers.stream import StreamSerializer


class ActiveUsers(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        active = Stream.objects.filter(active=True)
        serializer = StreamSerializer(active, many=True)
        return Response(serializer.data)
