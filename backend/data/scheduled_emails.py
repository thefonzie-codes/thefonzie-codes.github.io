from .models import ListItem
from .serializers import ListItemSerializer, UserSerializer

from datetime import date

from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags

def send_daily_reminder():
    ListItems = ListItem.objects.filter(due_date=date.today())
    serializer = ListItemSerializer(ListItems, many=True)
    data = serializer.data
    html_message = render_to_string("reminder.html", {'tasks': data})
    plain_message = strip_tags(html_message)
    subject='Your To-Do List for Today'
    from_email='alfonsobanzon@gmail.com'
    to=['al_banzon@hotmail.com']

    send_mail(
      subject, 
      plain_message, 
      from_email, 
      to, 
      html_message=html_message,
      fail_silently=False)
    
def send_daily_checkin():
    ListItems = ListItem.objects.filter(due_date=date.today())
    serializer = ListItemSerializer(ListItems, many=True)
    data = serializer.data
    html_message = render_to_string("check-in-email.html", {'tasks': data})
    plain_message = strip_tags(html_message)
    subject='Did you complete your tasks today?'
    from_email='alfonsobanzon@gmail.com'
    to=['al_banzon@hotmail.com', 'anderson.ashley@live.ca']

    send_mail(
      subject, 
      plain_message, 
      from_email, 
      to, 
      html_message=html_message,
      fail_silently=False)