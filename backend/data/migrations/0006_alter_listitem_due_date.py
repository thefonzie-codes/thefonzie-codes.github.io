# Generated by Django 5.0.3 on 2024-03-18 19:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0005_listitem_completed_listitem_due_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listitem',
            name='due_date',
            field=models.DateField(default=datetime.date(2024, 3, 18)),
        ),
    ]
