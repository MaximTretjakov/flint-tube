from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.utils.crypto import get_random_string
from functools import partial

from backend.api_v1.models.stream import Stream


class GetKey(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        make_stream_key = partial(get_random_string, 20)
        key_s = make_stream_key()
        key = Stream.objects.create(key=key_s)
        key.save()
        return Response({'stream_key': key_s})
