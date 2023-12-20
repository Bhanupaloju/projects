from django.contrib import admin
from .models import Task

# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display=["title", "description", "due_date", "status", "timestamp"]  
      
admin.site.register(Task)