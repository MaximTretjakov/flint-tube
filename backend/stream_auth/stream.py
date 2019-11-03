from django.http import HttpResponse, HttpResponseForbidden
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

from backend.api_v1.models.stream import Stream


@require_POST
@csrf_exempt
def start_stream(request):
    """ This view is called when a stream starts.
    """
    stream = get_object_or_404(Stream, key=request.POST["name"])

    # If user inactive
    if not stream:
        return HttpResponseForbidden("Can't find stream key for this user.")

    # Don't allow the same stream to be published multiple times
    if stream.started_at:
        return HttpResponseForbidden("User already streaming.")

    stream.started_at = timezone.now()
    stream.active = True
    stream.save()

    print(request.POST.dict())
    return HttpResponse("OK")


@require_POST
@csrf_exempt
def stop_stream(request):
    """ This view is called when a stream stops.
    """
    Stream.objects.filter(key=request.POST["name"]).delete()
    return HttpResponse("OK")
