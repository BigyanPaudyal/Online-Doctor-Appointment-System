from django.shortcuts import render
from .models import Doctor

def department_list(request):
    departments = (
        Doctor.objects.filter(is_available=True)
        .values_list('specialization', flat=True)
        .distinct()
        .order_by('specialization')
    )
    return render(request, 'ranking/department_list.html', {
        'departments': departments,
    })

def doctor_list(request, department):
    doctors = Doctor.objects.filter(
        specialization=department,
        is_available=True
    )
    ranked_doctors = sorted(doctors, key=lambda d: d.ranking_score, reverse=True)
    return render(request, 'ranking/doctor_list.html', {
        'department': department,
        'doctors': ranked_doctors,
    })