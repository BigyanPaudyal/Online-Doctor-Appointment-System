from django.db import models

class Doctor(models.Model):
    doctor_id = models.CharField(max_length=10, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    qualification = models.CharField(max_length=255)
    hospital = models.CharField(max_length=255, default='HAMS Hospital')
    address = models.CharField(max_length=255, default='Dhumbarahi, Kathmandu')
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    fees = models.IntegerField(default=1000)
    years_experience = models.IntegerField(default=0)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"Dr. {self.first_name} {self.last_name}"

    @property
    def full_name(self):
        return f"Dr. {self.first_name} {self.last_name}"

    @property
    def qualification_score(self):
        qual = self.qualification.lower()
        if 'chief' in qual: return 3
        elif 'senior' in qual: return 2
        elif 'consultant' in qual: return 1
        return 0

    @property
    def ranking_score(self):
        exp_score = min(self.years_experience / 40, 1.0) * 40
        qual_score = (self.qualification_score / 3) * 35
        fee_score = (1 - min(self.fees / 3000, 1.0)) * 25
        return round(exp_score + qual_score + fee_score, 2)