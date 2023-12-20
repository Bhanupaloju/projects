from django.shortcuts import render, HttpResponse ,redirect
from .models import Task
from .forms import TaskForm,UpdateForm

# Create your views here.

def App(request):
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("home:App")
    
    tasks = Task.objects.all()
    form = TaskForm()
    print(form)
    
    return render(request, 'home.html', {"tasks":tasks})


def edit(request,id=id):
    task = Task.objects.get(id=id)
    if request.method == "POST":
        form = UpdateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("home:App")
    
    form = UpdateForm(request.POST or None )
    print(form)
    
    return render(request, 'edit.html', {"form": form})
