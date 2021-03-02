import os
import glob
import shutil
from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from django.db import connection


class Command(BaseCommand):
    help = 'Resets the database'

    def handle(self, *args, **options):
        dbname = settings.DATABASES["default"]["NAME"]
        with connection.cursor() as cursor:
            cursor.execute("DROP DATABASE %s" % dbname)
            cursor.execute("CREATE DATABASE %s" % dbname)

        base = str(settings.BASE_DIR)
        migrations = glob.glob(os.path.join(base, "*", "migrations"))

        for migration in migrations:
            shutil.rmtree(migration)

        apps = [migration.split("\\")[-2] for migration in migrations]
        for app in apps:
            os.system("python manage.py makemigrations %s" % app)
        os.system("python manage.py migrate")