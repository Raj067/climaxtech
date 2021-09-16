from django.shortcuts import render
from .models import CommentForm

# Create your views here.
def home(request, *args, **kwargs):
    return render(request, 'home.html', {})


def about(request, *args, **kwargs):
    return render(request, 'about.html', {})


def contact(request, *args, **kwargs):
    form = CommentForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            #print(form.cleaned_data, form)
            form.save()
    return render(request, 'contact.html', {})


def services(request, *args, **kwargs):
    return render(request, 'services.html', {})
