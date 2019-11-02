import datetime
from django.core.management.base import BaseCommand, CommandError

from backend.api_v1.models.stream import Stream


class Command(BaseCommand):
    help = 'Clean Stream model every day.'

    def handle(self, *args, **options):
        try:
            items = Stream.objects.all().delete()
        except Stream.DoesNotExist:
            raise CommandError('Stream model does not exist.')

        self.stdout.write(self.style.SUCCESS('Successfully cleaned |  {0}  |  {1}  |'.
                                             format(datetime.datetime.today().strftime("%Y-%m-%d %H:%M:%S"), items)))
