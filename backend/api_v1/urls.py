from django.urls import path
from backend.api_v1.views.get_stream_key import GetKey
from backend.api_v1.views.active_users import ActiveUsers

urlpatterns = [
    path('key/', GetKey.as_view(), name='key'),
    path('active-users/', ActiveUsers.as_view(), name='active-users'),
]
