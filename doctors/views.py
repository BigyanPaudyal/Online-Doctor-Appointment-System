from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login

# Create your views here.

# from django.http import HttpResponse;

# def DoctorPage(Request):
#     return HttpResponse("<h1> Doctors Page </h1>")

def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        if not username or not password:
            messages.error(request, "Please fill all fields")
            return redirect('signup')

        # check if user already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "User already exists")
            return redirect('signup')

        # create new user
        user = User.objects.create_user(username=username, password=password)
        user.save()

        messages.success(request, "Account created successfully! Now login.")

        return redirect('login')

    return render(request, 'signup.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)   # session created
            return redirect('dashboard')
        else:
            messages.error(request, "Invalid credentials")
    return render(request, 'login.html')