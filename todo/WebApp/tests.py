from django.test import TestCase
from django import setup
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE","todo.settings")
setup()

from.models import Task

# Create your tests here.
class PostTestCase(TestCase):
    def test_queryset_exists(self):
        qs=Task.objects.all()
        self.assertTrue(qs.exists())