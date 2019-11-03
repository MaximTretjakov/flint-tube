from django.contrib import admin
from django.urls import path, include
from backend.stream_auth.stream import start_stream, stop_stream


urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/', include('backend.api_v1.urls')),
    path('start_stream', start_stream, name="start-stream"),
    path('stop_stream', stop_stream, name="stop-stream")
]
