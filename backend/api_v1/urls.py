from django.urls import path

from backend.api_v1.views.get_stream_key import GetKey


urlpatterns = [
    path('key/', GetKey.as_view()),
]
