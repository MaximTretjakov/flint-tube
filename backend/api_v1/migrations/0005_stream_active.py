# Generated by Django 2.2.5 on 2019-11-03 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_v1', '0004_delete_some'),
    ]

    operations = [
        migrations.AddField(
            model_name='stream',
            name='active',
            field=models.BooleanField(default=False),
        ),
    ]
