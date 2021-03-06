from django.db import models


class Stream(models.Model):

    key = models.CharField(max_length=20, unique=True)
    stream_url = models.CharField(max_length=100, null=True)
    started_at = models.DateTimeField(null=True, blank=True)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.key

    @property
    def is_live(self):
        return self.started_at is not None
