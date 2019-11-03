from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from backend.api_v1.models.stream import Stream
from backend.api_v1.serializers.stream import StreamSerializer


class ActiveUsers(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = StreamSerializer

    def get_queryset(self):
        return Stream.objects.filter(active=True)
