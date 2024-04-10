from django.db import models
from datetime import date

from django.contrib.auth import get_user_model
from django.conf import settings
from django.utils import timezone

User = get_user_model()

class ListItem(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=500, blank=True, default='')
  due_date = models.DateField(default=timezone.now)
  completed = models.BooleanField(default=False)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.name