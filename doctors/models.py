from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Doctor(models.Model):
    doctor_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    specialization=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    fees=models.DecimalField(max_digits=8, decimal_places=2)
    phone=models.CharField(max_length=10)
    a_status=models.BooleanField(default=True)


class Profile(models.Model):
    ROLE_CHOICES = (
        ('patient', 'Patient'),
        ('doctor', 'Doctor'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.user.username
