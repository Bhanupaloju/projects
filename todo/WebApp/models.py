from django.db import models

# Create your models here.

class Task(models.Model):
    selecte = ( ('OPEN', 'Open'),
                ('WORKING', 'Working'),
                ('DONE', 'Done'),
                ('OVERDUE', 'Overdue'))
    
    title=models.CharField(max_length=100,blank=False,null=False)
    description = models.CharField(max_length=1000, blank=False, null=False)
    due_date = models.DateField(blank=True,null=True)
    status = models.CharField(choices=selecte, default="open",max_length=10,blank=False)
    timestamp = models.DateTimeField(auto_now_add=True) 
    
    def __str__(self):
        return self.title
    